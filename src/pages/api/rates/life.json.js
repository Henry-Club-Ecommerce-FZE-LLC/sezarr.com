export async function GET({ request, params }) {
  const url = new URL(request.url);
  const state = url.searchParams.get('state') || 'US';
  
  // Parse life insurance profile from query parameters
  const profile = {};
  for (const [key, value] of url.searchParams.entries()) {
    if (key !== 'state') {
      profile[key] = value;
    }
  }

  try {
    // Base rates for different coverage levels (annual premiums per $100k coverage)
    const baseRates = {
      basic: 45,
      standard: 65,
      premium: 95,
      comprehensive: 95
    };

    // State-based multipliers for life insurance (minimal variation)
    const stateFactors = {
      'NY': 1.05, 'CA': 1.03, 'FL': 1.02, 'TX': 1.00, 'IL': 1.02,
      'PA': 1.01, 'OH': 1.00, 'GA': 0.99, 'NC': 0.99, 'MI': 1.01,
      'NJ': 1.04, 'VA': 1.00, 'WA': 1.02, 'AZ': 1.00, 'MA': 1.03,
      'TN': 0.98, 'IN': 0.99, 'MO': 0.98, 'MD': 1.02, 'WI': 0.99,
      'CO': 1.01, 'MN': 1.00, 'SC': 0.98, 'AL': 0.97, 'LA': 0.98,
      'KY': 0.97, 'OR': 1.01, 'OK': 0.97, 'CT': 1.04, 'UT': 0.99,
      'IA': 0.96, 'NV': 1.01, 'AR': 0.96, 'MS': 0.95, 'KS': 0.96,
      'NM': 0.98, 'NE': 0.95, 'ID': 0.97, 'WV': 0.95, 'HI': 1.06,
      'NH': 1.01, 'ME': 0.99, 'RI': 1.03, 'MT': 0.96, 'DE': 1.02,
      'SD': 0.94, 'ND': 0.93, 'AK': 1.08, 'VT': 0.98, 'WY': 0.95,
      'DC': 1.05, 'US': 1.00
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
      source: 'life-insurance-api-v2',
      meta: {
        state: state,
        profile: profile,
        effectiveDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        }),
        rateType: 'annual_premium_per_100k'
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
    console.error('Life insurance API error:', error);
    
    return new Response(JSON.stringify({
      error: 'Failed to calculate life insurance rates',
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