export async function get({ request }) {
  // Extract query parameters
  const url = new URL(request.url);
  const state = url.searchParams.get('state') || 'US';
  const zipCode = url.searchParams.get('zipCode');
  const insuranceType = url.searchParams.get('type') || 'auto';
  
  // Get rates with state adjustments
  const rates = await getRatesForState(state, zipCode, insuranceType);
  
  // Return as JSON
  return new Response(JSON.stringify({
    rates,
    timestamp: new Date().toISOString(),
    source: 'insurance-api-v1',
    meta: {
      state,
      zipCode,
      type: insuranceType,
      effectiveDate: 'September 25, 2025'
    }
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    },
  });
}

/**
 * Get insurance rates for a specific state with adjustments
 */
async function getRatesForState(state, zipCode, type) {
  // Base rates from national averages - 2025 data
  const baseRates = {
    auto: {
      basic: {
        liability: 925,
        collision: 650,
        comprehensive: 380,
        personalInjury: 240,
        uninsuredMotorist: 195
      },
      standard: {
        liability: 1150,
        collision: 750,
        comprehensive: 450,
        personalInjury: 290,
        uninsuredMotorist: 220
      },
      premium: {
        liability: 1450,
        collision: 900,
        comprehensive: 520,
        personalInjury: 340,
        uninsuredMotorist: 250
      }
    },
    home: {
      basic: {
        dwelling: 1200,
        personalProperty: 480,
        liability: 300,
        medicalPayments: 50
      },
      standard: {
        dwelling: 1500,
        personalProperty: 600,
        liability: 400,
        medicalPayments: 75
      },
      premium: {
        dwelling: 2000,
        personalProperty: 800,
        liability: 500,
        medicalPayments: 100
      }
    },
    business: {
      basic: {
        generalLiability: 500,
        propertyInsurance: 600,
        workersComp: 1200,
      },
      standard: {
        generalLiability: 750,
        propertyInsurance: 900,
        workersComp: 1500,
        professionalLiability: 800
      },
      premium: {
        generalLiability: 1200,
        propertyInsurance: 1400,
        workersComp: 2000,
        professionalLiability: 1200,
        cyberLiability: 500
      }
    }
  };

  // State adjustment factors
  const stateFactors = getStateFactors();
  const stateFactor = stateFactors[state] || 1.0;
  
  // Zip code factors if provided
  let zipFactor = 1.0;
  if (zipCode) {
    zipFactor = await getZipCodeFactor(zipCode, state);
  }
  
  // Apply factors to rates
  const selectedRates = baseRates[type] || baseRates.auto;
  const adjustedRates = {};
  
  // Apply to each coverage level
  for (const [coverageLevel, rates] of Object.entries(selectedRates)) {
    adjustedRates[coverageLevel] = {};
    
    for (const [coverage, rate] of Object.entries(rates)) {
      adjustedRates[coverageLevel][coverage] = Math.round(rate * stateFactor * zipFactor);
    }
    
    // Add total for each level
    adjustedRates[coverageLevel].totalAnnual = Object.values(adjustedRates[coverageLevel])
      .reduce((sum, rate) => sum + rate, 0);
      
    adjustedRates[coverageLevel].totalMonthly = Math.round(adjustedRates[coverageLevel].totalAnnual / 12);
  }
  
  return {
    rates: adjustedRates,
    factors: {
      state: stateFactor,
      zip: zipFactor
    }
  };
}

/**
 * Get state-specific rate factors based on 2025 insurance cost data
 */
function getStateFactors() {
  return {
    // High-cost states
    'FL': 1.45, // Florida - highest due to weather, fraud
    'LA': 1.42, // Louisiana - high due to weather, litigation
    'NY': 1.38, // New York - high due to density, costs
    'MI': 1.35, // Michigan - high due to no-fault laws
    'NV': 1.32, // Nevada - high due to uninsured drivers
    'NJ': 1.30, // New Jersey - high due to density
    'CA': 1.28, // California - high due to regulations, costs
    'CT': 1.25, // Connecticut - high due to costs
    'RI': 1.23, // Rhode Island - high due to density
    'MA': 1.20, // Massachusetts - moderate-high
    
    // Moderate-cost states
    'TX': 1.15, 'GA': 1.12, 'AZ': 1.10, 'SC': 1.08, 'NC': 1.05,
    'TN': 1.02, 'AL': 1.00, 'KY': 0.98, 'VA': 0.96, 'PA': 0.95,
    'MD': 0.94, 'DE': 0.92, 'WV': 0.90, 'IN': 0.88, 'OH': 0.87,
    'IL': 0.86, 'MO': 0.85, 'AR': 0.84, 'MS': 0.83, 'OK': 0.82,
    'KS': 0.81, 'NE': 0.80, 'WI': 0.79, 'MN': 0.78, 'IA': 0.77,
    'SD': 0.76, 'ND': 0.75,
    
    // Low-cost states
    'NH': 0.74, 'VT': 0.73, 'ME': 0.72, 'ID': 0.71, 'MT': 0.70,
    'WY': 0.69, 'UT': 0.68, 'NM': 0.67, 'CO': 0.85, 'WA': 0.90,
    'OR': 0.88, 'AK': 1.15, 'HI': 1.25,
    
    // Default US average
    'US': 1.00
  };
}

/**
 * Get zip code factor based on location data
 */
async function getZipCodeFactor(zipCode, state) {
  // In a production system, this would query a database or service
  // For now, simulate based on first digit (urban vs rural)
  
  const firstDigit = parseInt(zipCode.charAt(0));
  
  // Urban zip ranges by state
  const urbanZipRanges = {
    'CA': [9, 8], // LA, SF areas
    'NY': [1, 0], // NYC area
    'FL': [3], // Miami area
    'TX': [7, 6], // Houston, Dallas areas
    'IL': [6], // Chicago area
  };

  const stateUrbanRanges = urbanZipRanges[state] || [];
  const isUrban = stateUrbanRanges.includes(firstDigit);
  
  // Urban areas typically have higher rates
  const baseFactor = isUrban ? 1.15 : 0.95;
  
  // Add some randomness to simulate real-world variation
  const randomVariation = 1.0 + ((Math.random() * 0.1) - 0.05);
  
  return baseFactor * randomVariation;
}