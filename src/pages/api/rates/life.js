export async function GET({ request, params }) {
  const url = new URL(request.url);
  const state = url.searchParams.get('state') || 'US';
  
  // Parse life profile from query parameters
  const profile = {};
  for (const [key, value] of url.searchParams.entries()) {
    if (key !== 'state') {
      profile[key] = value;
    }
  }
  
  try {
    const rates = await getLifeInsuranceRates(state, profile);
    
    return new Response(JSON.stringify({
      rates,
      timestamp: new Date().toISOString(),
      source: 'life-insurance-api-v2',
      meta: {
        state,
        profile,
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

async function getLifeInsuranceRates(state, profile) {
  // Base monthly premiums for $250K term life coverage by age/health
  const ageBasePremiums = {
    25: { basic: 18, standard: 22, premium: 28 },
    35: { basic: 22, standard: 28, premium: 35 },
    45: { basic: 45, standard: 58, premium: 72 },
    55: { basic: 95, standard: 125, premium: 165 },
    65: { basic: 285, standard: 385, premium: 525 }
  };
  
  const age = parseInt(profile.age) || 35;
  let basePremiums = ageBasePremiums[35]; // Default to 35
  
  // Find closest age bracket
  const ages = Object.keys(ageBasePremiums).map(Number);
  const closestAge = ages.reduce((prev, curr) => 
    Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev
  );
  basePremiums = ageBasePremiums[closestAge];
  
  let profileFactor = 1.0;
  
  // Gender factor (where legally allowed)
  if (profile.gender === 'male') profileFactor *= 1.15;
  else if (profile.gender === 'female') profileFactor *= 0.92;
  
  // Health factors
  if (profile.health === 'excellent') profileFactor *= 0.85;
  else if (profile.health === 'good') profileFactor *= 1.0;
  else if (profile.health === 'fair') profileFactor *= 1.35;
  else if (profile.health === 'poor') profileFactor *= 2.15;
  
  // Smoking factor
  if (profile.smoker === 'yes') profileFactor *= 2.85;
  
  // Coverage amount factor
  const coverage = parseInt(profile.coverage) || 250000;
  const coverageFactor = coverage / 250000;
  
  // Apply all factors
  let adjustedPremiums = {};
  Object.keys(basePremiums).forEach(tier => {
    adjustedPremiums[tier] = Math.round(basePremiums[tier] * profileFactor * coverageFactor);
  });
  
  return {
    basic: adjustedPremiums.basic,
    standard: adjustedPremiums.standard,
    premium: adjustedPremiums.premium,
    comprehensive: adjustedPremiums.premium, // Alias
    factors: {
      age: closestAge,
      health: profile.health || 'good',
      profileFactor: Math.round(profileFactor * 100) / 100
    },
    coverage: {
      amount: coverage,
      type: 'term_life',
      period: '20_year'
    },
    location: { state },
    effectiveDate: '2025-09-26',
    currency: 'USD',
    period: 'monthly'
  };
}