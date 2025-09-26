export async function GET({ request, params }) {
  const url = new URL(request.url);
  const state = url.searchParams.get('state') || 'US';
  const zipCode = url.searchParams.get('zipCode') || '';
  
  // Parse driver profile from query parameters
  const driverProfile = {};
  for (const [key, value] of url.searchParams.entries()) {
    if (key !== 'state' && key !== 'zipCode') {
      driverProfile[key] = value;
    }
  }

  console.log('Auto insurance API called:', { state, zipCode, driverProfile });

  try {
    // Base rates for different coverage levels (monthly premiums)
    const baseRates = {
      basic: 85,
      standard: 125,
      premium: 185
    };

    // State-based multipliers (representative of actual market variations)
    const stateFactors = {
      'AL': 0.92, 'AK': 1.15, 'AZ': 1.08, 'AR': 0.88, 'CA': 1.25,
      'CO': 1.05, 'CT': 1.12, 'DE': 1.18, 'FL': 1.22, 'GA': 1.02,
      'HI': 1.08, 'ID': 0.85, 'IL': 1.15, 'IN': 0.92, 'IA': 0.85,
      'KS': 0.88, 'KY': 0.95, 'LA': 1.28, 'ME': 0.90, 'MD': 1.20,
      'MA': 1.18, 'MI': 1.35, 'MN': 1.05, 'MS': 0.85, 'MO': 0.95,
      'MT': 0.88, 'NE': 0.85, 'NV': 1.15, 'NH': 0.95, 'NJ': 1.45,
      'NM': 0.92, 'NY': 1.35, 'NC': 0.95, 'ND': 0.85, 'OH': 0.95,
      'OK': 0.88, 'OR': 1.08, 'PA': 1.12, 'RI': 1.25, 'SC': 0.98,
      'SD': 0.85, 'TN': 0.92, 'TX': 1.10, 'UT': 0.95, 'VT': 0.90,
      'VA': 1.05, 'WA': 1.12, 'WV': 0.95, 'WI': 0.95, 'WY': 0.88,
      'DC': 1.40, 'US': 1.00
    };

    const stateFactor = stateFactors[state] || stateFactors['US'];

    // Apply state factor to base rates
    let adjustedRates = {
      basic: Math.round(baseRates.basic * stateFactor),
      standard: Math.round(baseRates.standard * stateFactor),
      premium: Math.round(baseRates.premium * stateFactor),
      comprehensive: Math.round(baseRates.premium * stateFactor)
    };

    // ZIP code factor simulation (simplified - real implementations use complex geographic data)
    if (zipCode) {
      const zipFactor = getZipCodeFactor(zipCode, state);
      adjustedRates.basic = Math.round(adjustedRates.basic * zipFactor);
      adjustedRates.standard = Math.round(adjustedRates.standard * zipFactor);
      adjustedRates.premium = Math.round(adjustedRates.premium * zipFactor);
      adjustedRates.comprehensive = Math.round(adjustedRates.comprehensive * zipFactor);
    }

    // Driver profile adjustments
    if (driverProfile && Object.keys(driverProfile).length > 0) {
      const profileFactor = calculateDriverProfileFactor(driverProfile);
      adjustedRates.basic = Math.round(adjustedRates.basic * profileFactor);
      adjustedRates.standard = Math.round(adjustedRates.standard * profileFactor);
      adjustedRates.premium = Math.round(adjustedRates.premium * profileFactor);
      adjustedRates.comprehensive = Math.round(adjustedRates.comprehensive * profileFactor);
    }

    // Prepare comprehensive response
    const response = {
      rates: adjustedRates,
      timestamp: new Date().toISOString(),
      source: 'auto-insurance-api-v2',
      meta: {
        state: state,
        zipCode: zipCode,
        driverProfile: driverProfile,
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
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'public, max-age=3600'
      }
    });

  } catch (error) {
    console.error('Auto insurance API error:', error);
    
    return new Response(JSON.stringify({
      error: 'Failed to calculate auto insurance rates',
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

// Helper function to calculate ZIP code factor
function getZipCodeFactor(zipCode, state) {
  // Simplified ZIP code risk assessment
  // In production, this would use comprehensive geographic and demographic data
  const firstDigit = zipCode.charAt(0);
  
  // Basic ZIP code risk patterns (simplified)
  const zipRiskFactors = {
    '0': 1.15, '1': 1.20, '2': 1.25, '3': 1.10, '4': 1.05,
    '5': 0.95, '6': 0.90, '7': 0.95, '8': 1.00, '9': 1.05
  };

  // Urban vs rural adjustment based on ZIP patterns
  const zipNum = parseInt(zipCode);
  let urbanFactor = 1.0;
  
  // Major metropolitan area ZIP codes (simplified examples)
  if ((zipNum >= 10001 && zipNum <= 14999) || // NYC area
      (zipNum >= 90001 && zipNum <= 96199) || // LA area  
      (zipNum >= 60001 && zipNum <= 60999) || // Chicago area
      (zipNum >= 77001 && zipNum <= 77999) || // Houston area
      (zipNum >= 75001 && zipNum <= 75999)) { // Dallas area
    urbanFactor = 1.15; // Higher rates in major metros
  }

  return (zipRiskFactors[firstDigit] || 1.0) * urbanFactor;
}

// Helper function to calculate driver profile risk factor
function calculateDriverProfileFactor(profile) {
  let factor = 1.0;

  // Age factor
  const age = parseInt(profile.age);
  if (age) {
    if (age < 25) factor *= 1.35;
    else if (age < 30) factor *= 1.15;
    else if (age < 50) factor *= 0.95;
    else if (age < 65) factor *= 0.90;
    else factor *= 1.05;
  }

  // Gender factor (where legally allowed)
  if (profile.gender === 'male' && age && age < 25) {
    factor *= 1.10;
  }

  // Marital status
  if (profile.maritalStatus === 'married') {
    factor *= 0.95;
  }

  // Driving record
  switch (profile.drivingRecord) {
    case 'clean': factor *= 0.90; break;
    case 'minor': factor *= 1.15; break;
    case 'major': factor *= 1.45; break;
    case 'accident': factor *= 1.35; break;
    case 'dui': factor *= 1.75; break;
    default: break;
  }

  // Credit score
  switch (profile.creditScore) {
    case 'excellent': factor *= 0.85; break;
    case 'good': factor *= 0.95; break;
    case 'fair': factor *= 1.10; break;
    case 'poor': factor *= 1.25; break;
    case 'no-credit': factor *= 1.15; break;
    default: break;
  }

  // Vehicle type
  switch (profile.vehicleType) {
    case 'sedan': factor *= 0.95; break;
    case 'suv': factor *= 1.05; break;
    case 'truck': factor *= 1.10; break;
    case 'sports': factor *= 1.45; break;
    case 'luxury': factor *= 1.25; break;
    case 'convertible': factor *= 1.35; break;
    case 'electric': factor *= 0.90; break;
    case 'hybrid': factor *= 0.95; break;
    default: break;
  }

  // Vehicle age
  const vehicleYear = parseInt(profile.vehicleYear);
  const currentYear = new Date().getFullYear();
  if (vehicleYear) {
    const vehicleAge = currentYear - vehicleYear;
    if (vehicleAge > 10) factor *= 0.85;
    else if (vehicleAge < 2) factor *= 1.15;
  }

  // Annual mileage
  switch (profile.annualMileage) {
    case 'low': factor *= 0.90; break;
    case 'average': factor *= 1.00; break;
    case 'high': factor *= 1.15; break;
    case 'very-high': factor *= 1.30; break;
    default: break;
  }

  // Usage type
  switch (profile.vehicleUse) {
    case 'personal': factor *= 1.00; break;
    case 'commute': factor *= 1.10; break;
    case 'business': factor *= 1.25; break;
    case 'rideshare': factor *= 1.45; break;
    default: break;
  }

  return Math.max(0.5, Math.min(3.0, factor)); // Cap the factor between 0.5 and 3.0
}