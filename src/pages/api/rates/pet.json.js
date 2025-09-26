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
    // Base rates for different coverage levels (monthly premiums)
    const baseRates = {
      basic: 25,
      standard: 45,
      premium: 75,
      comprehensive: 75
    };

    // State-based multipliers for pet insurance (minimal variation, mainly cost of vet care)
    const stateFactors = {
      'NY': 1.25, 'CA': 1.20, 'CT': 1.18, 'MA': 1.15, 'NJ': 1.12,
      'HI': 1.25, 'AK': 1.20, 'MD': 1.10, 'DC': 1.15, 'RI': 1.10,
      'WA': 1.08, 'NH': 1.08, 'VT': 1.05, 'DE': 1.08, 'VA': 1.05,
      'CO': 1.05, 'IL': 1.05, 'FL': 1.03, 'TX': 1.02, 'AZ': 1.02,
      'NV': 1.03, 'OR': 1.05, 'ME': 1.03, 'MN': 1.02, 'PA': 1.00,
      'OH': 1.00, 'GA': 0.98, 'NC': 0.98, 'SC': 0.95, 'TN': 0.95,
      'AL': 0.93, 'KY': 0.93, 'IN': 0.95, 'MI': 0.98, 'WI': 0.97,
      'MO': 0.95, 'IA': 0.90, 'KS': 0.90, 'NE': 0.88, 'OK': 0.90,
      'AR': 0.88, 'LA': 0.90, 'MS': 0.85, 'WV': 0.88, 'UT': 0.93,
      'ID': 0.90, 'MT': 0.88, 'WY': 0.85, 'ND': 0.85, 'SD': 0.85,
      'NM': 0.90, 'US': 1.00
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
      source: 'pet-insurance-api-v2',
      meta: {
        state: state,
        petProfile: petProfile,
        effectiveDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', month: 'long', day: 'numeric' 
        }),
        rateType: 'monthly_premium'
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
    console.error('Pet insurance API error:', error);
    
    return new Response(JSON.stringify({
      error: 'Failed to calculate pet insurance rates',
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