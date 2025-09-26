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
    // Base rates for different coverage levels (annual premiums)
    const baseRates = {
      basic: 850,
      standard: 1250,
      premium: 1850,
      comprehensive: 1850
    };

    // State-based multipliers for homeowners insurance
    const stateFactors = {
      'FL': 2.15, 'LA': 1.95, 'TX': 1.85, 'OK': 1.75, 'MS': 1.65,
      'AL': 1.55, 'SC': 1.45, 'NC': 1.35, 'GA': 1.25, 'TN': 1.15,
      'AR': 1.10, 'KY': 1.05, 'VA': 1.00, 'WV': 0.95, 'OH': 0.90,
      'PA': 0.85, 'NY': 0.95, 'CT': 1.25, 'MA': 1.15, 'RI': 1.20,
      'VT': 0.75, 'NH': 0.80, 'ME': 0.85, 'CA': 1.45, 'NV': 1.25,
      'AZ': 1.15, 'NM': 1.10, 'CO': 1.05, 'WY': 0.85, 'MT': 0.80,
      'ND': 0.75, 'SD': 0.80, 'NE': 0.85, 'KS': 0.90, 'IA': 0.85,
      'MN': 0.95, 'WI': 0.90, 'IL': 1.05, 'IN': 0.95, 'MI': 1.10,
      'MO': 1.05, 'OR': 1.15, 'WA': 1.20, 'ID': 0.85, 'UT': 0.90,
      'AK': 1.35, 'HI': 1.55, 'DC': 1.25, 'US': 1.00
    };

    const stateFactor = stateFactors[state] || stateFactors['US'];

    // Apply state factor to base rates
    let adjustedRates = {
      basic: Math.round(baseRates.basic * stateFactor),
      standard: Math.round(baseRates.standard * stateFactor),
      premium: Math.round(baseRates.premium * stateFactor),
      comprehensive: Math.round(baseRates.comprehensive * stateFactor)
    };

    // ZIP code factor simulation
    if (zipCode) {
      const zipFactor = getZipCodeFactor(zipCode, state);
      adjustedRates.basic = Math.round(adjustedRates.basic * zipFactor);
      adjustedRates.standard = Math.round(adjustedRates.standard * zipFactor);
      adjustedRates.premium = Math.round(adjustedRates.premium * zipFactor);
      adjustedRates.comprehensive = Math.round(adjustedRates.comprehensive * zipFactor);
    }

    const response = {
      rates: adjustedRates,
      timestamp: new Date().toISOString(),
      source: 'home-insurance-api-v2',
      meta: {
        state: state,
        zipCode: zipCode,
        homeProfile: homeProfile,
        effectiveDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        }),
        rateType: 'annual_premium'
      }
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600'
      }
    });

  } catch (error) {
    console.error('Home insurance API error:', error);
    
    return new Response(JSON.stringify({
      error: 'Failed to calculate home insurance rates',
      message: error.message,
      timestamp: new Date().toISOString()
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

function getZipCodeFactor(zipCode, state) {
  const firstDigit = zipCode.charAt(0);
  const zipRiskFactors = {
    '0': 1.10, '1': 1.15, '2': 1.20, '3': 1.05, '4': 1.00,
    '5': 0.95, '6': 0.90, '7': 0.95, '8': 1.00, '9': 1.05
  };

  // Coastal areas have higher risk
  const zipNum = parseInt(zipCode);
  let coastalFactor = 1.0;
  
  if (state === 'FL' || state === 'LA' || state === 'TX' || state === 'NC' || state === 'SC') {
    coastalFactor = 1.25; // Hurricane risk areas
  }

  return (zipRiskFactors[firstDigit] || 1.0) * coastalFactor;
}