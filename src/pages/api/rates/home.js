export async function GET({ request, params }) {
  const url = new URL(request.url);
  const state = url.searchParams.get('state') || 'US';
  const zipCode = url.searchParams.get('zipCode') || '';
  
  // Parse home profile from query parameters
  const homeProfile = {};
  for (const [key, value] of url.searchParams.entries()) {
    if (key !== 'state' && key !== 'zipCode') {
      homeProfile[key] = value;
    }
  }
  
  try {
    const rates = await getHomeInsuranceRates(state, zipCode, homeProfile);
    
    return new Response(JSON.stringify({
      rates,
      timestamp: new Date().toISOString(),
      source: 'home-insurance-api-v2',
      meta: {
        state,
        zipCode,
        homeProfile,
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

async function getHomeInsuranceRates(state, zipCode, profile) {
  // Base monthly premiums for homeowners insurance
  let basePremiums = {
    basic: 95,
    comprehensive: 165,
    premium: 285
  };
  
  // State factors for homeowners insurance
  const stateFactors = {
    'AL': 1.25, 'AK': 0.88, 'AZ': 1.05, 'AR': 1.15, 'CA': 1.45,
    'CO': 1.35, 'CT': 1.08, 'DE': 1.05, 'FL': 2.25, 'GA': 1.35,
    'HI': 1.15, 'ID': 0.78, 'IL': 1.05, 'IN': 0.92, 'IA': 0.88,
    'KS': 1.45, 'KY': 0.95, 'LA': 2.15, 'ME': 0.85, 'MD': 1.08,
    'MA': 1.15, 'MI': 1.08, 'MN': 0.95, 'MS': 1.45, 'MO': 1.25,
    'MT': 0.85, 'NE': 1.18, 'NV': 0.98, 'NH': 0.88, 'NJ': 1.25,
    'NM': 1.05, 'NY': 1.35, 'NC': 1.55, 'ND': 1.15, 'OH': 0.95,
    'OK': 1.85, 'OR': 0.92, 'PA': 1.02, 'RI': 1.18, 'SC': 1.85,
    'SD': 1.25, 'TN': 1.15, 'TX': 1.95, 'UT': 0.82, 'VT': 0.85,
    'VA': 1.05, 'WA': 0.95, 'WV': 0.98, 'WI': 0.92, 'WY': 0.95
  };
  
  const stateFactor = stateFactors[state] || 1.0;
  
  // Apply state factor
  Object.keys(basePremiums).forEach(coverage => {
    basePremiums[coverage] = Math.round(basePremiums[coverage] * stateFactor);
  });
  
  // Home profile adjustments
  if (profile && Object.keys(profile).length > 0) {
    let profileFactor = 1.0;
    
    // Home value factor
    const homeValue = parseInt(profile.homeValue);
    if (homeValue) {
      if (homeValue > 750000) profileFactor *= 1.65;
      else if (homeValue > 500000) profileFactor *= 1.35;
      else if (homeValue > 300000) profileFactor *= 1.15;
      else if (homeValue < 150000) profileFactor *= 0.85;
    }
    
    // Home age factor
    const homeAge = profile.homeAge;
    if (homeAge === 'old') profileFactor *= 1.25;
    else if (homeAge === 'new') profileFactor *= 0.88;
    
    // Security features factor
    const security = profile.security;
    if (security === 'premium') profileFactor *= 0.75;
    else if (security === 'advanced') profileFactor *= 0.82;
    else if (security === 'basic') profileFactor *= 0.92;
    
    // Claims history factor
    if (profile.claims === 'multiple') profileFactor *= 1.45;
    else if (profile.claims === 'single') profileFactor *= 1.18;
    
    // Deductible factor
    const deductible = parseInt(profile.deductible);
    if (deductible >= 2500) profileFactor *= 0.78;
    else if (deductible >= 1000) profileFactor *= 0.88;
    else if (deductible <= 250) profileFactor *= 1.25;
    
    // Apply profile factor
    Object.keys(basePremiums).forEach(coverage => {
      basePremiums[coverage] = Math.round(basePremiums[coverage] * profileFactor);
    });
  }
  
  return {
    basic: basePremiums.basic,
    comprehensive: basePremiums.comprehensive,
    premium: basePremiums.premium,
    factors: {
      state: stateFactor,
      profile: profile ? 'applied' : 'none'
    },
    location: { state, zipCode },
    effectiveDate: '2025-09-26',
    currency: 'USD',
    period: 'monthly'
  };
}