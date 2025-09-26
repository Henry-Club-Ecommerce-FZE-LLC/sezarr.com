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
    // Base rates for different coverage levels (annual premiums)
    const baseRates = {
      basic: 1200,
      standard: 2500,
      premium: 4800,
      comprehensive: 4800
    };

    // State-based multipliers for business insurance
    const stateFactors = {
      'CA': 1.35, 'NY': 1.30, 'FL': 1.25, 'TX': 1.20, 'IL': 1.15,
      'NJ': 1.25, 'PA': 1.10, 'OH': 1.05, 'GA': 1.10, 'NC': 1.05,
      'MI': 1.15, 'VA': 1.05, 'WA': 1.20, 'MA': 1.25, 'IN': 1.00,
      'AZ': 1.10, 'TN': 1.05, 'MO': 1.00, 'MD': 1.15, 'WI': 1.00,
      'MN': 1.05, 'CO': 1.10, 'SC': 1.05, 'AL': 1.00, 'LA': 1.20,
      'KY': 0.95, 'OR': 1.15, 'OK': 1.00, 'CT': 1.20, 'IA': 0.90,
      'MS': 0.95, 'AR': 0.90, 'KS': 0.90, 'UT': 0.95, 'NV': 1.15,
      'NM': 0.95, 'NE': 0.85, 'WV': 0.90, 'ID': 0.85, 'HI': 1.25,
      'ME': 0.95, 'NH': 0.95, 'RI': 1.15, 'MT': 0.85, 'DE': 1.10,
      'SD': 0.85, 'ND': 0.80, 'AK': 1.20, 'VT': 0.90, 'WY': 0.85,
      'DC': 1.30, 'US': 1.00
    };

    const stateFactor = stateFactors[state] || stateFactors['US'];

    // Apply state factor to base rates
    let adjustedRates = {
      basic: Math.round(baseRates.basic * stateFactor),
      standard: Math.round(baseRates.standard * stateFactor),
      premium: Math.round(baseRates.premium * stateFactor),
      comprehensive: Math.round(baseRates.comprehensive * stateFactor)
    };

    const response = {
      rates: adjustedRates,
      timestamp: new Date().toISOString(),
      source: 'business-insurance-api-v2',
      meta: {
        state: state,
        businessProfile: businessProfile,
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
    console.error('Business insurance API error:', error);
    
    return new Response(JSON.stringify({
      error: 'Failed to calculate business insurance rates',
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