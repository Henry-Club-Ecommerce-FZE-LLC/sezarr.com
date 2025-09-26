/**
 * Client-side rate fetcher for live insurance rate updates
 * Handles API calls, caching, and fallbacks in the browser
 */

class ClientRateFetcher {
  constructor() {
    this.cache = new Map();
    this.cacheExpiry = 6 * 60 * 60 * 1000; // 6 hours for client cache
    this.rateLimiter = new Map(); // Simple rate limiting
    this.baseUrl = window.location.origin;
  }

  /**
   * Get live auto insurance rates with location
   */
  async getAutoRates(state = 'US', zipCode = null, driverProfile = {}) {
    const cacheKey = `auto_${state}_${zipCode}_${JSON.stringify(driverProfile)}`;
    
    // Check cache first
    if (this.isRateLimited(cacheKey)) {
      console.warn('Rate limited, using cached data');
      return this.getCachedData(cacheKey);
    }

    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheExpiry) {
        return cached.data;
      }
    }

    try {
      // Try to fetch from our API endpoint
      const rates = await this.fetchFromAPI('auto', { state, zipCode, driverProfile });
      
      if (rates) {
        this.cache.set(cacheKey, {
          data: rates,
          timestamp: Date.now()
        });
        this.updateRateLimit(cacheKey);
        return rates;
      }
    } catch (error) {
      console.warn('API fetch failed, using fallback:', error.message);
    }

    // Use client-side fallback calculation
    return this.calculateFallbackRates('auto', state, zipCode, driverProfile);
  }

  /**
   * Get homeowners insurance rates
   */
  async getHomeRates(state = 'US', zipCode = null, homeProfile = {}) {
    const cacheKey = `home_${state}_${zipCode}_${JSON.stringify(homeProfile)}`;
    
    // Check cache first
    if (this.isRateLimited(cacheKey)) {
      console.warn('Rate limited, using cached data');
      return this.getCachedData(cacheKey);
    }

    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheExpiry) {
        return cached.data;
      }
    }

    try {
      const rates = await this.fetchFromAPI('home', { state, zipCode, homeProfile });
      if (rates) {
        this.cache.set(cacheKey, {
          data: rates,
          timestamp: Date.now()
        });
        this.updateRateLimit(cacheKey);
        return rates;
      }
    } catch (error) {
      console.warn('API fetch failed, using fallback:', error.message);
    }

    return this.calculateFallbackRates('home', state, zipCode, homeProfile);
  }

  /**
   * Get life insurance rates
   */
  async getLifeRates(state = 'US', profile = {}) {
    const cacheKey = `life_${state}_${JSON.stringify(profile)}`;
    
    if (this.isRateLimited(cacheKey)) {
      console.warn('Rate limited, using cached data');
      return this.getCachedData(cacheKey);
    }

    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheExpiry) {
        return cached.data;
      }
    }

    try {
      const rates = await this.fetchFromAPI('life', { state, profile });
      if (rates) {
        this.cache.set(cacheKey, {
          data: rates,
          timestamp: Date.now()
        });
        this.updateRateLimit(cacheKey);
        return rates;
      }
    } catch (error) {
      console.warn('API fetch failed, using fallback:', error.message);
    }

    return this.calculateFallbackRates('life', state, null, profile);
  }

  /**
   * Get pet insurance rates
   */
  async getPetRates(state = 'US', petProfile = {}) {
    const cacheKey = `pet_${state}_${JSON.stringify(petProfile)}`;
    
    if (this.isRateLimited(cacheKey)) {
      console.warn('Rate limited, using cached data');
      return this.getCachedData(cacheKey);
    }

    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheExpiry) {
        return cached.data;
      }
    }

    try {
      const rates = await this.fetchFromAPI('pet', { state, petProfile });
      if (rates) {
        this.cache.set(cacheKey, {
          data: rates,
          timestamp: Date.now()
        });
        this.updateRateLimit(cacheKey);
        return rates;
      }
    } catch (error) {
      console.warn('API fetch failed, using fallback:', error.message);
    }

    return this.calculateFallbackRates('pet', state, null, petProfile);
  }

  /**
   * Get business insurance rates
   */
  async getBusinessRates(state = 'US', businessProfile = {}) {
    const cacheKey = `business_${state}_${JSON.stringify(businessProfile)}`;
    
    if (this.isRateLimited(cacheKey)) {
      console.warn('Rate limited, using cached data');
      return this.getCachedData(cacheKey);
    }

    if (this.cache.has(cacheKey)) {
      const cached = this.cache.get(cacheKey);
      if (Date.now() - cached.timestamp < this.cacheExpiry) {
        return cached.data;
      }
    }

    try {
      const rates = await this.fetchFromAPI('business', { state, businessProfile });
      if (rates) {
        this.cache.set(cacheKey, {
          data: rates,
          timestamp: Date.now()
        });
        this.updateRateLimit(cacheKey);
        return rates;
      }
    } catch (error) {
      console.warn('API fetch failed, using fallback:', error.message);
    }

    return this.calculateFallbackRates('business', state, null, businessProfile);
  }

  /**
   * Fetch rates from our backend API (static files in production)
   */
  async fetchFromAPI(type, params) {
    try {
      // For static site, the API endpoints are pre-generated files with .json extension
      // Make a simple GET request to the static endpoint
      const response = await fetch(`${this.baseUrl}/api/rates/${type}.json`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`API responded with ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      // For static files, we get pre-computed rates that we can adjust based on params
      if (data && data.rates) {
        const adjustedRates = this.adjustStaticRates(data.rates, params);
        // Add metadata about the fetch
        return {
          ...adjustedRates,
          _metadata: {
            isLiveData: true,
            fetchTimestamp: new Date().toISOString(),
            source: 'API',
            lastUpdated: data.lastUpdated || new Date().toISOString(),
            dataAge: data.dataAge || 'Current'
          }
        };
      }
      
      // Add metadata for raw data too
      return {
        ...data,
        _metadata: {
          isLiveData: true,
          fetchTimestamp: new Date().toISOString(),
          source: 'API',
          lastUpdated: data.lastUpdated || new Date().toISOString(),
          dataAge: data.dataAge || 'Current'
        }
      };
    } catch (error) {
      console.warn(`Failed to fetch from static API endpoint /api/rates/${type}.json:`, error.message);
      throw error;
    }
  }

  /**
   * Adjust pre-computed static rates based on user parameters
   */
  adjustStaticRates(rates, params) {
    // Apply adjustments based on actual user parameters
    let adjustedRates = { ...rates };
    
    // Apply state factor if different from default
    if (params.state && params.state !== 'US') {
      const stateFactors = this.getStateFactors();
      const stateFactor = stateFactors[params.state] || 1.0;
      
      if (adjustedRates.basic) adjustedRates.basic = Math.round(adjustedRates.basic * stateFactor);
      if (adjustedRates.standard) adjustedRates.standard = Math.round(adjustedRates.standard * stateFactor);
      if (adjustedRates.premium) adjustedRates.premium = Math.round(adjustedRates.premium * stateFactor);
    }
    
    // Apply profile-based adjustments for auto insurance
    if (params.driverProfile) {
      const profileFactor = this.calculateDriverProfileFactor(params.driverProfile);
      
      if (adjustedRates.basic) adjustedRates.basic = Math.round(adjustedRates.basic * profileFactor);
      if (adjustedRates.standard) adjustedRates.standard = Math.round(adjustedRates.standard * profileFactor);
      if (adjustedRates.premium) adjustedRates.premium = Math.round(adjustedRates.premium * profileFactor);
    }
    
    return adjustedRates;
  }

  /**
   * Client-side fallback rate calculation
   */
  calculateFallbackRates(type, state, zipCode, profile = {}) {
    const baseRates = this.getBaseRates(type);
    const stateFactors = this.getStateFactors();
    const stateFactor = stateFactors[state] || 1.0;
    
    let adjustedRates = {};
    
    // Apply state factor
    for (const [coverage, rate] of Object.entries(baseRates)) {
      if (typeof rate === 'object') {
        adjustedRates[coverage] = {};
        for (const [subCoverage, subRate] of Object.entries(rate)) {
          adjustedRates[coverage][subCoverage] = Math.round(subRate * stateFactor);
        }
      } else {
        adjustedRates[coverage] = Math.round(rate * stateFactor);
      }
    }

    // Apply zip code factor
    if (zipCode) {
      const zipFactor = this.getZipCodeFactor(zipCode, state);
      adjustedRates = this.applyFactorToRates(adjustedRates, zipFactor);
    }

    // Apply profile factors based on insurance type
    if (Object.keys(profile).length > 0) {
      let profileFactor = 1.0;
      
      switch (type) {
        case 'auto':
          profileFactor = this.calculateDriverProfileFactor(profile);
          break;
        case 'home':
          profileFactor = this.calculateHomeProfileFactor(profile);
          break;
        case 'life':
          profileFactor = this.calculateLifeProfileFactor(profile);
          break;
        case 'pet':
          profileFactor = this.calculatePetProfileFactor(profile);
          break;
        case 'business':
          profileFactor = this.calculateBusinessProfileFactor(profile);
          break;
        default:
          profileFactor = 1.0;
      }
      
      adjustedRates = this.applyFactorToRates(adjustedRates, profileFactor);
    }

    return {
      ...adjustedRates,
      _metadata: {
        isLiveData: false,
        fetchTimestamp: new Date().toISOString(),
        source: 'Fallback Calculation',
        lastUpdated: new Date().toISOString(),
        dataAge: 'Estimated (API unavailable)'
      },
      state,
      zipCode,
      profile,
      type,
      factors: {
        state: stateFactor,
        zipCode: zipCode ? this.getZipCodeFactor(zipCode, state) : 1.0,
        profile: Object.keys(profile).length > 0 ? this.calculateProfileFactor(type, profile) : 1.0
      }
    };
  }

  /**
   * Calculate driver profile factor for personalized rates
   */
  calculateDriverProfileFactor(profile) {
    let factor = 1.0;

    // Age factor
    if (profile.age) {
      if (profile.age < 25) factor *= 1.6; // Young drivers pay more
      else if (profile.age < 30) factor *= 1.3;
      else if (profile.age < 65) factor *= 0.9; // Experienced drivers pay less
      else factor *= 1.1; // Senior drivers pay slightly more
    }

    // Gender factor (where legal)
    if (profile.gender === 'male' && profile.age < 30) {
      factor *= 1.15; // Young males typically pay more
    }

    // Marital status
    if (profile.maritalStatus === 'married') {
      factor *= 0.92; // Married drivers often get discounts
    }

    // Credit score factor (where legal)
    if (profile.creditScore) {
      if (profile.creditScore >= 750) factor *= 0.85;
      else if (profile.creditScore >= 650) factor *= 0.95;
      else if (profile.creditScore < 550) factor *= 1.25;
    }

    // Driving record
    if (profile.accidents) {
      factor *= Math.pow(1.2, profile.accidents); // 20% increase per accident
    }
    if (profile.violations) {
      factor *= Math.pow(1.15, profile.violations); // 15% increase per violation
    }

    // Vehicle factors
    if (profile.vehicleAge) {
      if (profile.vehicleAge > 10) factor *= 0.9; // Older cars cheaper to insure
      else if (profile.vehicleAge < 3) factor *= 1.1; // Newer cars more expensive
    }

    if (profile.vehicleValue) {
      if (profile.vehicleValue > 50000) factor *= 1.3; // Luxury cars more expensive
      else if (profile.vehicleValue < 10000) factor *= 0.8; // Cheaper cars less expensive
    }

    // Annual mileage
    if (profile.annualMileage) {
      if (profile.annualMileage > 20000) factor *= 1.2; // High mileage increases risk
      else if (profile.annualMileage < 7500) factor *= 0.9; // Low mileage decreases risk
    }

    return Math.max(0.3, Math.min(3.0, factor)); // Cap between 30% and 300% of base rate
  }

  /**
   * Calculate home insurance profile factor
   */
  calculateHomeProfileFactor(profile) {
    let factor = 1.0;

    // Home value
    if (profile.homeValue) {
      if (profile.homeValue > 500000) factor *= 1.4; // High-value homes cost more
      else if (profile.homeValue > 300000) factor *= 1.2;
      else if (profile.homeValue < 150000) factor *= 0.8; // Lower value homes cost less
    }

    // Home age
    if (profile.homeAge === 'new') factor *= 0.8; // New homes get discounts
    else if (profile.homeAge === 'old') factor *= 1.3; // Older homes cost more

    // Security features
    if (profile.security === 'premium') factor *= 0.7; // Full monitoring discount
    else if (profile.security === 'advanced') factor *= 0.8; // Security system discount
    else if (profile.security === 'basic') factor *= 0.9; // Smoke detectors discount

    // Claims history
    if (profile.claims === 'none') factor *= 0.85; // No claims discount
    else if (profile.claims === 'few') factor *= 1.15; // Some claims increase
    else if (profile.claims === 'many') factor *= 1.5; // Multiple claims penalty

    // Deductible
    if (profile.deductible >= 5000) factor *= 0.8; // High deductible discount
    else if (profile.deductible >= 2500) factor *= 0.9;
    else if (profile.deductible <= 500) factor *= 1.1; // Low deductible increase

    return Math.max(0.4, Math.min(2.5, factor));
  }

  /**
   * Calculate life insurance profile factor
   */
  calculateLifeProfileFactor(profile) {
    let factor = 1.0;

    // Age factor
    if (profile.age) {
      if (profile.age < 30) factor *= 0.7; // Young adults get best rates
      else if (profile.age < 40) factor *= 0.9;
      else if (profile.age < 50) factor *= 1.1;
      else if (profile.age < 60) factor *= 1.5;
      else factor *= 2.5; // Older applicants pay much more
    }

    // Health status
    if (profile.health === 'excellent') factor *= 0.8;
    else if (profile.health === 'good') factor *= 1.0;
    else if (profile.health === 'fair') factor *= 1.3;
    else if (profile.health === 'poor') factor *= 2.0;

    // Smoker status
    if (profile.smoker === 'yes') factor *= 2.0; // Smokers pay double

    // Gender
    if (profile.gender === 'female') factor *= 0.95; // Women typically live longer

    // Coverage amount
    if (profile.coverageAmount > 1000000) factor *= 1.1; // Large policies cost more per $1000

    return Math.max(0.5, Math.min(4.0, factor));
  }

  /**
   * Calculate pet insurance profile factor
   */
  calculatePetProfileFactor(profile) {
    let factor = 1.0;

    // Pet type
    if (profile.petType === 'dog') factor *= 1.1; // Dogs typically cost more
    else if (profile.petType === 'cat') factor *= 0.9;

    // Pet age
    if (profile.petAge < 2) factor *= 0.8; // Young pets get discounts
    else if (profile.petAge < 7) factor *= 1.0;
    else factor *= 1.4; // Senior pets cost more

    // Breed factors (simplified)
    if (profile.breed && profile.breed.includes('large')) factor *= 1.2;
    if (profile.breed && profile.breed.includes('small')) factor *= 0.9;

    // Deductible
    if (profile.deductible >= 1000) factor *= 0.8;
    else if (profile.deductible >= 500) factor *= 0.9;
    else if (profile.deductible <= 100) factor *= 1.2;

    // Reimbursement level
    if (profile.reimbursement >= 90) factor *= 1.2;
    else if (profile.reimbursement >= 80) factor *= 1.1;
    else if (profile.reimbursement <= 70) factor *= 0.9;

    return Math.max(0.6, Math.min(2.0, factor));
  }

  /**
   * Calculate business insurance profile factor
   */
  calculateBusinessProfileFactor(profile) {
    let factor = 1.0;

    // Business size (by revenue)
    if (profile.revenue > 10000000) factor *= 1.5; // Large businesses pay more
    else if (profile.revenue > 1000000) factor *= 1.2;
    else if (profile.revenue < 100000) factor *= 0.8; // Small businesses pay less

    // Industry risk
    if (profile.industry === 'construction') factor *= 1.8; // High risk
    else if (profile.industry === 'manufacturing') factor *= 1.4;
    else if (profile.industry === 'retail') factor *= 1.1;
    else if (profile.industry === 'professional') factor *= 0.9; // Low risk
    else if (profile.industry === 'technology') factor *= 0.8;

    // Employee count
    if (profile.employees > 100) factor *= 1.3;
    else if (profile.employees > 25) factor *= 1.1;
    else if (profile.employees < 5) factor *= 0.9;

    // Claims history
    if (profile.claims === 'none') factor *= 0.8;
    else if (profile.claims === 'few') factor *= 1.1;
    else if (profile.claims === 'many') factor *= 1.4;

    return Math.max(0.5, Math.min(3.0, factor));
  }

  /**
   * Generic profile factor calculator (fallback)
   */
  calculateProfileFactor(type, profile) {
    switch (type) {
      case 'auto':
        return this.calculateDriverProfileFactor(profile);
      case 'home':
        return this.calculateHomeProfileFactor(profile);
      case 'life':
        return this.calculateLifeProfileFactor(profile);
      case 'pet':
        return this.calculatePetProfileFactor(profile);
      case 'business':
        return this.calculateBusinessProfileFactor(profile);
      default:
        return 1.0;
    }
  }

  /**
   * Apply factor to all rates in the structure
   */
  applyFactorToRates(rates, factor) {
    const adjusted = {};
    for (const [coverage, rate] of Object.entries(rates)) {
      if (typeof rate === 'object') {
        adjusted[coverage] = {};
        for (const [subCoverage, subRate] of Object.entries(rate)) {
          adjusted[coverage][subCoverage] = Math.round(subRate * factor);
        }
      } else {
        adjusted[coverage] = Math.round(rate * factor);
      }
    }
    return adjusted;
  }

  /**
   * Get base rates for different insurance types
   */
  getBaseRates(type) {
    const rates = {
      auto: {
        liability: {
          bodilyInjury: 850,
          propertyDamage: 420,
          perAccident: 1100
        },
        comprehensive: 380,
        collision: 650,
        pip: 240,
        uninsuredMotorist: 190,
        underinsuredMotorist: 160
      },
      home: {
        dwelling: 1200,
        personalProperty: 480,
        liability: 300,
        medicalPayments: 50,
        additionalLiving: 240
      },
      business: {
        generalLiability: 500,
        professionalLiability: 800,
        propertyInsurance: 600,
        workersComp: 1200,
        cyberLiability: 300
      },
      life: {
        termLife: 360,          // Annual premium per $100k coverage
        wholeLife: 1200,        // Annual premium per $100k coverage
        universal: 800          // Annual premium per $100k coverage
      },
      pet: {
        accidentOnly: 180,      // Annual premium
        accidentIllness: 480,   // Annual premium
        comprehensive: 720      // Annual premium with wellness
      },
      health: {
        bronze: 4800,           // Annual premium
        silver: 6000,           // Annual premium
        gold: 7200,            // Annual premium
        platinum: 8400         // Annual premium
      },
      disability: {
        shortTerm: 600,        // Annual premium per $10k coverage
        longTerm: 1200         // Annual premium per $10k coverage
      },
      travel: {
        domestic: 45,          // Per trip
        international: 85,     // Per trip
        annual: 180           // Annual coverage
      }
    };

    return rates[type] || rates.auto;
  }

  /**
   * Get state factors for rate adjustments
   */
  getStateFactors() {
    return {
      'FL': 1.45, 'LA': 1.42, 'NY': 1.38, 'MI': 1.35, 'NV': 1.32,
      'NJ': 1.30, 'CA': 1.28, 'CT': 1.25, 'RI': 1.23, 'MA': 1.20,
      'TX': 1.15, 'GA': 1.12, 'AZ': 1.10, 'SC': 1.08, 'NC': 1.05,
      'TN': 1.02, 'AL': 1.00, 'KY': 0.98, 'VA': 0.96, 'PA': 0.95,
      'MD': 0.94, 'DE': 0.92, 'WV': 0.90, 'IN': 0.88, 'OH': 0.87,
      'IL': 0.86, 'MO': 0.85, 'AR': 0.84, 'MS': 0.83, 'OK': 0.82,
      'KS': 0.81, 'NE': 0.80, 'WI': 0.79, 'MN': 0.78, 'IA': 0.77,
      'SD': 0.76, 'ND': 0.75, 'NH': 0.74, 'VT': 0.73, 'ME': 0.72,
      'ID': 0.71, 'MT': 0.70, 'WY': 0.69, 'UT': 0.68, 'NM': 0.67,
      'CO': 0.85, 'WA': 0.90, 'OR': 0.88, 'AK': 1.15, 'HI': 1.25,
      'US': 1.00
    };
  }

  /**
   * Get zip code factor
   */
  getZipCodeFactor(zipCode, state) {
    const firstDigit = parseInt(zipCode.charAt(0));
    const urbanZipRanges = {
      'CA': [9, 8], 'NY': [1, 0], 'FL': [3], 'TX': [7, 6], 'IL': [6]
    };

    const stateUrbanRanges = urbanZipRanges[state] || [];
    const isUrban = stateUrbanRanges.includes(firstDigit);
    
    return isUrban ? 1.15 : 0.95;
  }

  /**
   * Simple rate limiting to prevent API abuse
   */
  isRateLimited(key) {
    const now = Date.now();
    const lastCall = this.rateLimiter.get(key);
    return lastCall && (now - lastCall < 60000); // 1 minute limit
  }

  /**
   * Update rate limiter
   */
  updateRateLimit(key) {
    this.rateLimiter.set(key, Date.now());
  }

  /**
   * Get cached data
   */
  getCachedData(key) {
    return this.cache.get(key)?.data || null;
  }

  /**
   * Clear cache
   */
  clearCache() {
    this.cache.clear();
    this.rateLimiter.clear();
  }

  /**
   * Force refresh rates
   */
  async forceRefresh(type, params) {
    const cacheKey = `${type}_${JSON.stringify(params)}`;
    this.cache.delete(cacheKey);
    this.rateLimiter.delete(cacheKey);
    
    if (type === 'auto') {
      return await this.getAutoRates(params.state, params.zipCode, params.driverProfile);
    }
    
    return null;
  }
}

// Initialize global rate fetcher
window.rateFetcher = new ClientRateFetcher();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ClientRateFetcher;
}