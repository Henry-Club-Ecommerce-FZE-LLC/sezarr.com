// Auto Insurance Calculator JavaScript
// Handles state dropdown, form submission, rate calculations, and analytics

// Function to handle state change and update placeholder with example zip code
function handleStateChange() {
  const stateCode = document.getElementById('state').value;
  const zipInput = document.getElementById('zipCode');
  
  if (!stateCode) {
    zipInput.placeholder = "5-digit ZIP";
    return;
  }
  
  // Example zip codes for each state to use as placeholders
  const zipCodesByState = {
    'AL': '35213', // Birmingham
    'AK': '99501', // Anchorage
    'AZ': '85012', // Phoenix
    'AR': '72201', // Little Rock
    'CA': '90210', // Beverly Hills
    'CO': '80202', // Denver
    'CT': '06103', // Hartford
    'DE': '19801', // Wilmington
    'FL': '32801', // Orlando
    'GA': '30309', // Atlanta
    'HI': '96813', // Honolulu
    'ID': '83702', // Boise
    'IL': '60601', // Chicago
    'IN': '46204', // Indianapolis
    'IA': '50309', // Des Moines
    'KS': '66603', // Topeka
    'KY': '40202', // Louisville
    'LA': '70112', // New Orleans
    'ME': '04101', // Portland
    'MD': '21201', // Baltimore
    'MA': '02108', // Boston
    'MI': '48226', // Detroit
    'MN': '55401', // Minneapolis
    'MS': '39201', // Jackson
    'MO': '63101', // St. Louis
    'MT': '59101', // Billings
    'NE': '68102', // Omaha
    'NV': '89101', // Las Vegas
    'NH': '03101', // Manchester
    'NJ': '07102', // Newark
    'NM': '87101', // Albuquerque
    'NY': '10001', // New York
    'NC': '27601', // Raleigh
    'ND': '58102', // Fargo
    'OH': '43215', // Columbus
    'OK': '73102', // Oklahoma City
    'OR': '97201', // Portland
    'PA': '19107', // Philadelphia
    'RI': '02903', // Providence
    'SC': '29201', // Columbia
    'SD': '57101', // Sioux Falls
    'TN': '37203', // Nashville
    'TX': '75201', // Dallas
    'UT': '84101', // Salt Lake City
    'VT': '05401', // Burlington
    'VA': '23219', // Richmond
    'WA': '98101', // Seattle
    'WV': '25301', // Charleston
    'WI': '53202', // Milwaukee
    'WY': '82001'  // Cheyenne
  };
  
  const exampleZip = zipCodesByState[stateCode] || "12345";
  zipInput.placeholder = `e.g., ${exampleZip}`;
}

// Initialize states dropdown when page loads
document.addEventListener('DOMContentLoaded', () => {
  try {
    // Hardcoded states list since API endpoints don't work in static site
    const states = [
      { name: "Alabama", code: "AL" },
      { name: "Alaska", code: "AK" },
      { name: "Arizona", code: "AZ" },
      { name: "Arkansas", code: "AR" },
      { name: "California", code: "CA" },
      { name: "Colorado", code: "CO" },
      { name: "Connecticut", code: "CT" },
      { name: "Delaware", code: "DE" },
      { name: "Florida", code: "FL" },
      { name: "Georgia", code: "GA" },
      { name: "Hawaii", code: "HI" },
      { name: "Idaho", code: "ID" },
      { name: "Illinois", code: "IL" },
      { name: "Indiana", code: "IN" },
      { name: "Iowa", code: "IA" },
      { name: "Kansas", code: "KS" },
      { name: "Kentucky", code: "KY" },
      { name: "Louisiana", code: "LA" },
      { name: "Maine", code: "ME" },
      { name: "Maryland", code: "MD" },
      { name: "Massachusetts", code: "MA" },
      { name: "Michigan", code: "MI" },
      { name: "Minnesota", code: "MN" },
      { name: "Mississippi", code: "MS" },
      { name: "Missouri", code: "MO" },
      { name: "Montana", code: "MT" },
      { name: "Nebraska", code: "NE" },
      { name: "Nevada", code: "NV" },
      { name: "New Hampshire", code: "NH" },
      { name: "New Jersey", code: "NJ" },
      { name: "New Mexico", code: "NM" },
      { name: "New York", code: "NY" },
      { name: "North Carolina", code: "NC" },
      { name: "North Dakota", code: "ND" },
      { name: "Ohio", code: "OH" },
      { name: "Oklahoma", code: "OK" },
      { name: "Oregon", code: "OR" },
      { name: "Pennsylvania", code: "PA" },
      { name: "Rhode Island", code: "RI" },
      { name: "South Carolina", code: "SC" },
      { name: "South Dakota", code: "SD" },
      { name: "Tennessee", code: "TN" },
      { name: "Texas", code: "TX" },
      { name: "Utah", code: "UT" },
      { name: "Vermont", code: "VT" },
      { name: "Virginia", code: "VA" },
      { name: "Washington", code: "WA" },
      { name: "West Virginia", code: "WV" },
      { name: "Wisconsin", code: "WI" },
      { name: "Wyoming", code: "WY" }
    ];

    const stateSelect = document.getElementById('state');
    if (stateSelect) {
      stateSelect.innerHTML = '<option value="">Select State</option>';
      
      states.forEach(state => {
        const option = document.createElement('option');
        option.value = state.code;
        option.textContent = state.name;
        stateSelect.appendChild(option);
      });

      // Add event listener for state change
      stateSelect.addEventListener('change', handleStateChange);
    }

    console.log('States dropdown populated successfully');
  } catch (error) {
    console.error('Error initializing states dropdown:', error);
  }

  // Initialize tab functionality
  initializeTabs();
});

// Initialize coverage tab functionality
function initializeTabs() {
  const tabs = document.querySelectorAll('[data-coverage]');
  const panels = document.querySelectorAll('.coverage-panel');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetCoverage = tab.getAttribute('data-coverage');
      
      // Update tab styles
      tabs.forEach(t => {
        t.className = t.className.replace('active-tab', 'inactive-tab');
      });
      tab.className = tab.className.replace('inactive-tab', 'active-tab');
      
      // Show/hide panels
      panels.forEach(panel => {
        if (panel.id === `${targetCoverage}Coverage`) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
      
      const targetPanel = document.getElementById(`${targetCoverage}Coverage`);
      if (targetPanel) {
        targetPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });
}

// Enhanced premium calculation with comprehensive factors
function calculateComprehensiveRate(driverProfile) {
  // Base rate calculation - starts around $1,200-$2,400 annually
  let baseRate = 1600; // Starting point
  let rateMultiplier = 1.0;

  // Age factor
  if (driverProfile.age < 25) {
    rateMultiplier *= 1.5;
  } else if (driverProfile.age >= 25 && driverProfile.age <= 65) {
    rateMultiplier *= 0.85;
  } else {
    rateMultiplier *= 1.1;
  }

  // Gender factor (where legally allowed)
  if (driverProfile.gender === 'male' && driverProfile.age < 30) {
    rateMultiplier *= 1.15;
  }

  // Marital status
  if (driverProfile.maritalStatus === 'married') {
    rateMultiplier *= 0.9;
  }

  // State factor (approximate state cost differences)
  const stateMultipliers = {
    'FL': 1.3, 'LA': 1.25, 'MI': 1.4, 'NY': 1.35, 'CA': 1.2,
    'TX': 1.1, 'NJ': 1.3, 'NV': 1.15, 'DE': 1.2, 'CT': 1.25,
    'MT': 0.7, 'VT': 0.75, 'ME': 0.8, 'ND': 0.7, 'SD': 0.75
  };
  rateMultiplier *= (stateMultipliers[driverProfile.state] || 1.0);

  // Coverage level
  const coverageMultipliers = {
    'state-minimum': 0.6,
    '25-50-25': 0.8,
    '50-100-50': 1.0,
    '100-300-100': 1.3,
    '250-500-250': 1.6,
    '500-500-500': 2.0
  };
  rateMultiplier *= (coverageMultipliers[driverProfile.coverage] || 1.0);

  // Vehicle factors
  if (driverProfile.vehicleMake) {
    const luxuryBrands = ['bmw', 'mercedes', 'audi', 'lexus'];
    if (luxuryBrands.includes(driverProfile.vehicleMake.toLowerCase())) {
      rateMultiplier *= 1.2;
    }
    if (driverProfile.vehicleMake.toLowerCase() === 'tesla') {
      rateMultiplier *= 1.3;
    }
  }

  // Vehicle age
  const currentYear = new Date().getFullYear();
  const vehicleAge = currentYear - (driverProfile.vehicleYear || currentYear);
  if (vehicleAge > 10) {
    rateMultiplier *= 0.85;
  } else if (vehicleAge < 2) {
    rateMultiplier *= 1.2;
  }

  const finalRate = Math.round(baseRate * rateMultiplier);

  // Generate company-specific quotes
  const companies = [
    { name: 'GEICO', multiplier: 0.85, market_position: 'budget' },
    { name: 'Progressive', multiplier: 0.92, market_position: 'competitive' },
    { name: 'State Farm', multiplier: 0.98, market_position: 'standard' },
    { name: 'Allstate', multiplier: 1.05, market_position: 'premium' },
    { name: 'Farmers', multiplier: 1.02, market_position: 'standard' },
    { name: 'Liberty Mutual', multiplier: 1.08, market_position: 'premium' },
    { name: 'USAA', multiplier: 0.80, market_position: 'military' },
    { name: 'Nationwide', multiplier: 1.00, market_position: 'standard' }
  ];

  const quotes = companies.map(company => {
    const annual = Math.round(finalRate * company.multiplier);
    return {
      company: company.name,
      annual: annual,
      monthly: Math.round(annual / 12),
      market_position: company.market_position
    };
  }).sort((a, b) => a.annual - b.annual);

  return {
    baseAnnual: finalRate,
    quotes: quotes,
    source: 'comprehensive_calculation',
    lastUpdated: new Date().toISOString()
  };
}

// Display comprehensive results with multiple coverage levels and company quotes
function displayComprehensiveResults(ratesData) {
  console.log('--- displayComprehensiveResults START ---');
  console.log('Received ratesData:', JSON.stringify(ratesData, null, 2));

  const resultsContainer = document.getElementById('calculatorResults');
  if (!resultsContainer) {
    console.error('Results container not found');
    return;
  }

  resultsContainer.classList.remove('hidden', 'opacity-50');
  
  // Use baseAnnual from API, or fallback to first company quote, or fallback to 1600
  let baseAnnual = 1600;
  if (ratesData && ratesData.baseAnnual && ratesData.baseAnnual > 0) {
    baseAnnual = ratesData.baseAnnual;
     console.log(`Using baseAnnual from ratesData: ${baseAnnual}`);
  } else if (ratesData && ratesData.quotes && ratesData.quotes.length > 0 && ratesData.quotes[0].annual > 0) {
    baseAnnual = ratesData.quotes[0].annual;
    console.log(`Fell back to first quote's annual value: ${baseAnnual}`);
  } else {
    console.log(`Fell back to default baseAnnual: ${baseAnnual}`);
  }

  // Coverage level calculations
  const basicAnnual = Math.round(baseAnnual * 0.75);
  const standardAnnual = baseAnnual;
  const premiumAnnual = Math.round(baseAnnual * 1.35);

  console.log(`Calculated annual premiums: Basic=${basicAnnual}, Standard=${standardAnnual}, Premium=${premiumAnnual}`);

  // Update coverage displays
  document.getElementById('basicPremium').textContent = `$${basicAnnual.toLocaleString()}/year`;
  document.getElementById('basicMonthly').textContent = `$${Math.round(basicAnnual / 12).toLocaleString()}/month`;
  document.getElementById('basicLiability').textContent = `$${Math.round(basicAnnual * 0.45).toLocaleString()}/year`;
  document.getElementById('basicCollision').textContent = `$${Math.round(basicAnnual * 0.25).toLocaleString()}/year`;
  document.getElementById('basicComprehensive').textContent = `$${Math.round(basicAnnual * 0.20).toLocaleString()}/year`;
  document.getElementById('basicPip').textContent = `$${Math.round(basicAnnual * 0.06).toLocaleString()}/year`;
  document.getElementById('basicUninsured').textContent = `$${Math.round(basicAnnual * 0.04).toLocaleString()}/year`;

  document.getElementById('standardPremium').textContent = `$${standardAnnual.toLocaleString()}/year`;
  document.getElementById('standardMonthly').textContent = `$${Math.round(standardAnnual / 12).toLocaleString()}/month`;
  document.getElementById('standardLiability').textContent = `$${Math.round(standardAnnual * 0.42).toLocaleString()}/year`;
  document.getElementById('standardCollision').textContent = `$${Math.round(standardAnnual * 0.28).toLocaleString()}/year`;
  document.getElementById('standardComprehensive').textContent = `$${Math.round(standardAnnual * 0.22).toLocaleString()}/year`;
  document.getElementById('standardPip').textContent = `$${Math.round(standardAnnual * 0.05).toLocaleString()}/year`;
  document.getElementById('standardUninsured').textContent = `$${Math.round(standardAnnual * 0.03).toLocaleString()}/year`;

  document.getElementById('premiumPremium').textContent = `$${premiumAnnual.toLocaleString()}/year`;
  document.getElementById('premiumMonthly').textContent = `$${Math.round(premiumAnnual / 12).toLocaleString()}/month`;
  document.getElementById('premiumLiability').textContent = `$${Math.round(premiumAnnual * 0.38).toLocaleString()}/year`;
  document.getElementById('premiumCollision').textContent = `$${Math.round(premiumAnnual * 0.30).toLocaleString()}/year`;
  document.getElementById('premiumComprehensive').textContent = `$${Math.round(premiumAnnual * 0.24).toLocaleString()}/year`;
  document.getElementById('premiumPip').textContent = `$${Math.round(premiumAnnual * 0.05).toLocaleString()}/year`;
  document.getElementById('premiumUninsured').textContent = `$${Math.round(premiumAnnual * 0.03).toLocaleString()}/year`;

  // Show and populate company quotes section
  const companyQuotesSection = document.getElementById('companyQuotesSection');
  if (companyQuotesSection) {
    console.log('Showing company quotes section');
    companyQuotesSection.classList.remove('hidden');
  } else {
    console.error('Company quotes section not found');
  }

  // Display company quotes
  if (ratesData.quotes && ratesData.quotes.length > 0) {
    console.log('Displaying company quotes from ratesData.');
    displayCompanyQuotes(ratesData.quotes);
  } else {
    console.log('No company quotes in ratesData, generating default quotes.');
    // Generate default quotes if none provided
    generateDefaultQuotes(baseAnnual);
  }
  console.log('--- displayComprehensiveResults END ---');
}

// Display company quotes comparison
function displayCompanyQuotes(quotes) {
  console.log('displayCompanyQuotes called with quotes:', quotes);
  
  const companyQuotesContainer = document.getElementById('companyQuotes');
  if (!companyQuotesContainer) {
    console.error('Company quotes container not found');
    return;
  }
  
  console.log('Company quotes container found:', companyQuotesContainer);

  const sortedQuotes = quotes.sort((a, b) => a.annual - b.annual);
  
  const quotesHtml = sortedQuotes.map((quote, index) => {
    const isLowest = index === 0;
    const savingsText = isLowest ? 'Lowest Rate' : `$${(quote.annual - sortedQuotes[0].annual).toLocaleString()} more than lowest`;
    const companyInfo = getCompanyInfo(quote.company);
    
    return `
      <div class="border border-gray-200 dark:border-gray-600 rounded-lg p-4 ${isLowest ? 'ring-2 ring-green-500 bg-green-50 dark:bg-green-900/20' : 'bg-white dark:bg-gray-700'} transition-all hover:shadow-md">
        <div class="flex items-start justify-between">
          <div class="flex items-center">
            <div class="w-12 h-12 rounded-full ${companyInfo.bgColor} flex items-center justify-center mr-3">
              <span class="text-white font-bold text-sm">${quote.company.substring(0, 2)}</span>
            </div>
            <div>
              <h5 class="font-semibold text-lg text-gray-900 dark:text-gray-100">${quote.company}</h5>
              <p class="text-sm text-gray-600 dark:text-gray-400">${companyInfo.description}</p>
            </div>
          </div>
          <div class="text-right">
            ${isLowest ? '<div class="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium mb-1">BEST RATE</div>' : ''}
            <div class="text-2xl font-bold text-gray-900 dark:text-gray-100">$${quote.annual.toLocaleString()}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">$${quote.monthly.toLocaleString()}/month</div>
          </div>
        </div>
        
        <div class="mt-3 flex items-center justify-between text-sm">
          <span class="text-gray-600 dark:text-gray-400">${savingsText}</span>
          <div class="flex items-center space-x-2">
            ${companyInfo.features.map(feature => `<span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">${feature}</span>`).join('')}
          </div>
        </div>
        
        <!-- "Get Quote" button is intentionally removed here -->
      </div>
    `;
  }).join('');
  
  const finalHtml = `
    <div class="space-y-4">
      ${quotesHtml}
    </div>
    <div class="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
      <p>Rates shown are estimates based on your profile. Actual rates may vary. Click to get personalized quotes.</p>
    </div>
  `;
  
  companyQuotesContainer.innerHTML = finalHtml;
  console.log('Company quotes HTML set successfully');
}

// Generate default company quotes when none are provided
function generateDefaultQuotes(baseAnnual) {
  console.log('generateDefaultQuotes called with baseAnnual:', baseAnnual);
  
  const companies = [
    { name: 'GEICO', multiplier: 0.85 },
    { name: 'Progressive', multiplier: 0.92 },
    { name: 'State Farm', multiplier: 0.98 },
    { name: 'Allstate', multiplier: 1.05 },
    { name: 'USAA', multiplier: 0.80 }
  ];

  const quotes = companies.map(company => {
    const annual = Math.round(baseAnnual * company.multiplier);
    return {
      company: company.name,
      annual: annual,
      monthly: Math.round(annual / 12)
    };
  });

  console.log('Generated default quotes:', quotes);
  displayCompanyQuotes(quotes);
}

// Get company-specific information
function getCompanyInfo(companyName) {
  const companyData = {
    'GEICO': {
      bgColor: 'bg-green-600',
      description: 'Government Employees Insurance Co.',
      features: ['Online', '24/7 Service']
    },
    'Progressive': {
      bgColor: 'bg-blue-600', 
      description: 'Name Your Price Tool',
      features: ['Snapshot', 'Bundle & Save']
    },
    'State Farm': {
      bgColor: 'bg-red-600',
      description: 'Good Neighbor Service',
      features: ['Local Agent', 'Drive Safe']
    },
    'Allstate': {
      bgColor: 'bg-blue-700',
      description: 'You\'re in Good Hands',
      features: ['Drivewise', 'Claim-free Bonus']
    },
    'Farmers': {
      bgColor: 'bg-green-700',
      description: 'Get a Quote, Get a Plan',
      features: ['Smart Ride', 'Signal App']
    },
    'Liberty Mutual': {
      bgColor: 'bg-yellow-600',
      description: 'Only Pay for What You Need',
      features: ['RightTrack', 'Accident Forgiveness']
    },
    'USAA': {
      bgColor: 'bg-blue-900',
      description: 'Military & Veterans Only',
      features: ['Military Exclusive', 'Top Rated']
    },
    'Nationwide': {
      bgColor: 'bg-blue-800',
      description: 'On Your Side',
      features: ['SmartRide', 'Vanishing Deductible']
    }
  };
  
  return companyData[companyName] || {
    bgColor: 'bg-gray-600',
    description: 'Auto Insurance Company',
    features: ['Coverage', 'Service']
  };
}

// Track company click for analytics
function trackCompanyClick(companyName) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'company_quote_click', {
      event_category: 'calculator',
      event_label: companyName,
      value: 1
    });
  }
  
  alert(`Redirecting to ${companyName} for personalized quote...`);
}

// Display enhanced rate factors
function displayEnhancedRateFactors(formData) {
  const factorsEl = document.getElementById('rateFactors');
  if (!factorsEl) return;

  const factors = [];
  
  if (formData.age < 25) {
    factors.push(`Young driver (age ${formData.age}) - Higher risk category`);
  } else if (formData.age >= 65) {
    factors.push(`Senior driver (age ${formData.age}) - Slightly higher rates`);
  } else {
    factors.push(`Experienced driver (age ${formData.age}) - Preferred rates`);
  }

  if (formData.maritalStatus === 'married') {
    factors.push('Married status - Typically reduces rates by 5-10%');
  }

  if (formData.state) {
    const highCostStates = ['FL', 'LA', 'MI', 'NY', 'CA', 'NJ'];
    const lowCostStates = ['MT', 'VT', 'ME', 'ND', 'SD'];
    
    if (highCostStates.includes(formData.state)) {
      factors.push(`${formData.state} - Higher cost state for auto insurance`);
    } else if (lowCostStates.includes(formData.state)) {
      factors.push(`${formData.state} - Lower cost state for auto insurance`);
    }
  }

  if (formData.vehicleMake) {
    const luxuryBrands = ['bmw', 'mercedes', 'audi', 'lexus'];
    if (luxuryBrands.includes(formData.vehicleMake.toLowerCase())) {
      factors.push(`${formData.vehicleMake} - Luxury vehicle increases premiums`);
    }
    if (formData.vehicleMake.toLowerCase() === 'tesla') {
      factors.push('Tesla - Electric vehicle with higher repair costs');
    }
  }

  if (formData.drivingRecord === 'clean') {
    factors.push('Clean driving record - Significant discount applied');
  } else if (formData.drivingRecord === 'accident') {
    factors.push('At-fault accident history - Rate increase applied');
  }

  if (formData.creditScore === 'excellent') {
    factors.push('Excellent credit - Best available rates');
  } else if (formData.creditScore === 'poor') {
    factors.push('Poor credit - Higher rates may apply');
  }

  factorsEl.innerHTML = factors.map(factor => `<li>${factor}</li>`).join('');
}

// Form submission handler - DIRECT APPROACH FOR IMMEDIATE FIX
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, setting up form handler');
  
  const form = document.getElementById('autoInsuranceCalculator');
  if (!form) {
    console.error('Form not found!');
    return;
  }
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    console.log('--- Form submitted - LIVE API HANDLER START ---');

    // Collect form data
    const formData = collectFormData();
    console.log('Collected form data:', JSON.stringify(formData, null, 2));

    // Show loading spinner in company quotes section
    const companySection = document.getElementById('companyQuotesSection');
    if (companySection) {
      companySection.classList.remove('hidden');
      const companyQuotesContainer = document.getElementById('companyQuotes');
      if (companyQuotesContainer) {
        companyQuotesContainer.innerHTML = `<div class="text-center text-gray-500 dark:text-gray-400 py-8"><div class="animate-spin w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div><p>Loading live company rates...</p></div>`;
      }
    }

    // Fetch live rates from API
    let ratesData = null;
    try {
      const params = new URLSearchParams({
        state: formData.state,
        zipCode: formData.zipCode,
        age: formData.age,
        gender: formData.gender,
        maritalStatus: formData.maritalStatus,
        coverage: formData.coverage,
        vehicleMake: formData.vehicleMake,
        vehicleYear: formData.vehicleYear
      });
      const apiUrl = `/api/rates/auto.json?${params.toString()}`;
      console.log(`Fetching live rates from: ${apiUrl}`);
      const response = await fetch(apiUrl);
      if (response.ok) {
        ratesData = await response.json();
        console.log('API response OK. Received data:', JSON.stringify(ratesData, null, 2));
      } else {
        console.error(`API error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.error('API fetch failed:', err);
    }

    // Fallback to local calculation if API fails
    if (!ratesData || !ratesData.quotes || ratesData.quotes.length === 0) {
      console.log('API failed or returned no quotes. Falling back to local calculation.');
      ratesData = calculateComprehensiveRate(formData);
      console.log('Fallback calculation result:', JSON.stringify(ratesData, null, 2));
    }

    // Show results container
    const resultsContainer = document.getElementById('calculatorResults');
    if (resultsContainer) {
      resultsContainer.classList.remove('hidden');
    }

    // Display results and company quotes
    displayComprehensiveResults(ratesData);
    console.log('--- Form submitted - LIVE API HANDLER END ---');
  });
});

// Collect form data
function collectFormData() {
  const formElements = [
    'age', 'gender', 'maritalStatus', 'state', 'zipCode', 'coverage', 
    'deductible', 'vehicleMake', 'vehicleYear', 'vehicleType', 'annualMileage',
    'vehicleUse', 'parkingLocation', 'drivingExperience', 'insuranceStatus',
    'creditScore', 'drivingRecord', 'education', 'occupation'
  ];

  const data = {};
  for (const fieldName of formElements) {
    const element = document.getElementById(fieldName);
    if (element) {
      data[fieldName] = element.value;
    }
  }

  // Convert numeric fields
  if (data.age) data.age = parseInt(data.age);
  if (data.vehicleYear) data.vehicleYear = parseInt(data.vehicleYear);

  return data;
}