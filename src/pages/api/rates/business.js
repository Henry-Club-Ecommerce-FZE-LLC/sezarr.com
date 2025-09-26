export async function GET({ request, params }) {
  const url = new URL(request.url);
  const state = url.searchParams.get('state') || 'US';
  
  // Parse business profile from query parameters
  const businessProfile = {};
  for (const [key, value] of url.searchParams.entries()) {
    if (key !== 'state') {
      businessProfile[key] = value;
    }
  }
  
  try {
    const rates = await getBusinessInsuranceRates(state, businessProfile);
    
    return new Response(JSON.stringify({
      rates,
      timestamp: new Date().toISOString(),
      source: 'business-insurance-api-v2',
      meta: {
        state,
        businessProfile,
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

async function getBusinessInsuranceRates(state, profile) {
  // Base monthly premiums for business insurance packages
  let basePremiums = {
    basic: 125,      // Essential coverage
    comprehensive: 285,  // Business shield
    premium: 485     // Enterprise plus
  };
  
  // Industry risk factors
  const industryFactors = {
    'retail': 1.0, 'restaurant': 1.65, 'construction': 2.15, 'professional': 1.25,
    'healthcare': 2.45, 'manufacturing': 1.85, 'technology': 1.15, 'real-estate': 1.35,
    'education': 0.92, 'other': 1.25
  };
  
  // State factors for business insurance
  const stateFactors = {
    'CA': 1.45, 'NY': 1.35, 'FL': 1.25, 'TX': 1.15, 'IL': 1.18,
    'PA': 1.08, 'OH': 1.02, 'MI': 1.15, 'GA': 1.05, 'NC': 1.00,
    'NJ': 1.32, 'VA': 1.05, 'WA': 1.18, 'AZ': 1.08, 'MA': 1.22,
    'TN': 0.98, 'IN': 0.95, 'MO': 0.98, 'MD': 1.12, 'WI': 0.95
  };
  
  let profileFactor = 1.0;
  
  // Apply industry factor
  if (profile.industry && industryFactors[profile.industry]) {
    profileFactor *= industryFactors[profile.industry];
  }
  
  // Revenue-based factor
  const revenue = parseInt(profile.revenue) || 0;
  if (revenue > 5000000) profileFactor *= 1.35;
  else if (revenue > 1000000) profileFactor *= 1.18;
  else if (revenue > 500000) profileFactor *= 1.08;
  else if (revenue < 100000) profileFactor *= 0.85;
  
  // Employee count factor
  const employees = parseInt(profile.employees) || 0;
  if (employees > 100) profileFactor *= 1.25;
  else if (employees > 50) profileFactor *= 1.15;
  else if (employees > 10) profileFactor *= 1.05;
  
  // Claims history factor
  if (profile.claims === 'multiple') profileFactor *= 1.55;
  else if (profile.claims === 'single') profileFactor *= 1.22;
  
  // Apply state factor
  const stateFactor = stateFactors[state] || 1.0;
  profileFactor *= stateFactor;
  
  // Apply all factors
  Object.keys(basePremiums).forEach(coverage => {
    basePremiums[coverage] = Math.round(basePremiums[coverage] * profileFactor);
  });
  
  return {
    basic: basePremiums.basic,
    comprehensive: basePremiums.comprehensive,
    premium: basePremiums.premium,
    factors: {
      state: stateFactor,
      industry: profile.industry || 'other',
      profile: profile ? 'applied' : 'none'
    },
    location: { state },
    effectiveDate: '2025-09-26',
    currency: 'USD',
    period: 'monthly'
  };
}