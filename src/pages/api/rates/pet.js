export async function GET({ request, params }) {
  const url = new URL(request.url);
  const state = url.searchParams.get('state') || 'US';
  
  // Parse pet profile from query parameters
  const petProfile = {};
  for (const [key, value] of url.searchParams.entries()) {
    if (key !== 'state') {
      petProfile[key] = value;
    }
  }
  
  try {
    const rates = await getPetInsuranceRates(state, petProfile);
    
    return new Response(JSON.stringify({
      rates,
      timestamp: new Date().toISOString(),
      source: 'pet-insurance-api-v2',
      meta: {
        state,
        petProfile,
        effectiveDate: 'September 26, 2025',
        rateType: 'monthly_premium'
      }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Rate calculation failed',
      message: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

async function getPetInsuranceRates(state, profile) {
  // Base monthly premiums for pet insurance
  let basePremiums = {
    basic: 28,      // Accident only
    comprehensive: 48,  // Accident + illness
    premium: 78     // Comprehensive + wellness
  };
  
  let profileFactor = 1.0;
  
  // Pet type factor
  if (profile.petType === 'dog') profileFactor *= 1.0;
  else if (profile.petType === 'cat') profileFactor *= 0.75;
  else profileFactor *= 1.25; // Exotic pets
  
  // Age factor
  const age = parseInt(profile.age) || 3;
  if (age < 1) profileFactor *= 0.85; // Puppies/kittens
  else if (age >= 7) profileFactor *= 1.35; // Senior pets
  
  // Breed factor (simplified)
  if (profile.breed) {
    const highRiskBreeds = ['german_shepherd', 'rottweiler', 'bulldog', 'great_dane'];
    if (highRiskBreeds.includes(profile.breed)) {
      profileFactor *= 1.25;
    }
  }
  
  // Pre-existing conditions
  if (profile.preExisting === 'yes') profileFactor *= 1.45;
  
  // Deductible factor
  const deductible = parseInt(profile.deductible) || 250;
  if (deductible >= 1000) profileFactor *= 0.82;
  else if (deductible >= 500) profileFactor *= 0.92;
  else if (deductible <= 100) profileFactor *= 1.18;
  
  // Apply factors
  Object.keys(basePremiums).forEach(coverage => {
    basePremiums[coverage] = Math.round(basePremiums[coverage] * profileFactor);
  });
  
  return {
    basic: basePremiums.basic,
    comprehensive: basePremiums.comprehensive,
    premium: basePremiums.premium,
    factors: {
      petType: profile.petType || 'dog',
      age: age,
      profileFactor: Math.round(profileFactor * 100) / 100
    },
    location: { state },
    effectiveDate: '2025-09-26',
    currency: 'USD',
    period: 'monthly'
  };
}