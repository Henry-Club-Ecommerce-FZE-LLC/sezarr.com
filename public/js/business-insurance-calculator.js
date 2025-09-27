// Business Insurance Calculator
document.addEventListener('DOMContentLoaded', function() {

// Use requestIdleCallback for non-critical setup if available
function setupBusinessInsuranceCalculator() {
    // Only run calculator JS if both form and resultDiv exist
    const form = document.getElementById('business-insurance-calculator');
    const resultDiv = document.getElementById('calculator-results');
    if (!form || !resultDiv) {
        // Defensive: do not run calculator JS if not on calculator page
        return;
    }
    // Initialize event handlers with robust null check
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            industry: formData.get('industry'),
            businessSize: formData.get('businessSize'),
            annualRevenue: parseFloat(formData.get('annualRevenue')) || 0,
            employees: parseInt(formData.get('employees')) || 0,
            propertyValue: parseFloat(formData.get('propertyValue')) || 0,
            coverageLevel: formData.get('coverageLevel'),
            deductible: parseInt(formData.get('deductible')) || 1000,
            publicFacing: formData.get('publicFacing') === 'on',
            handlesData: formData.get('handlesData') === 'on',
            professionalServices: formData.get('professionalServices') === 'on',
            ownsVehicles: formData.get('ownsVehicles') === 'on'
        };

        // Use requestIdleCallback to break up long tasks if available
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => calculateAndDisplayResults(data));
        } else {
            setTimeout(() => calculateAndDisplayResults(data), 0);
        }
    }

    function calculateAndDisplayResults(data) {
        // Base rate calculations
        const baseRates = {
            retail: 1000,
            restaurant: 1200,
            construction: 1500,
            professional: 800,
            healthcare: 2000,
            manufacturing: 1800,
            technology: 900,
            'real-estate': 1100,
            education: 1000,
            other: 1200
        };

        const baseRate = baseRates[data.industry] || 1200;

        // Size multipliers
        const sizeMultipliers = {
            'sole-proprietor': 0.5,
            'small': 1.0,
            'medium': 2.0,
            'large': 3.5
        };

        const sizeMultiplier = sizeMultipliers[data.businessSize] || 1.0;

        // Coverage level multipliers
        const coverageMultipliers = {
            basic: 0.8,
            standard: 1.0,
            comprehensive: 1.4
        };

        const coverageMultiplier = coverageMultipliers[data.coverageLevel] || 1.0;

        // Deductible adjustments
        const deductibleMultipliers = {
            500: 1.2,
            1000: 1.0,
            2500: 0.85,
            5000: 0.7
        };

        const deductibleMultiplier = deductibleMultipliers[data.deductible] || 1.0;

        // Calculate individual coverage costs
        const generalLiability = baseRate * sizeMultiplier * coverageMultiplier * deductibleMultiplier;
        const propertyInsurance = data.propertyValue * 0.005 * coverageMultiplier;
        const workersComp = data.employees * 600 * coverageMultiplier;
        const professionalLiability = data.professionalServices ? baseRate * 0.4 * coverageMultiplier : 0;
        const cyberLiability = data.handlesData ? baseRate * 0.3 * coverageMultiplier : 0;
        const commercialAuto = data.ownsVehicles ? baseRate * 0.25 * coverageMultiplier : 0;

        // Risk factors additional costs
        let riskFactorCost = 0;
        if (data.publicFacing) riskFactorCost += baseRate * 0.2;
        if (data.handlesData) riskFactorCost += baseRate * 0.15;
        if (data.professionalServices) riskFactorCost += baseRate * 0.25;
        if (data.ownsVehicles) riskFactorCost += baseRate * 0.15;

        // Calculate total cost
        const totalCost = generalLiability + propertyInsurance + workersComp + 
                         professionalLiability + cyberLiability + commercialAuto + 
                         riskFactorCost;

        // Format currency
        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount);
        };


        // Show results
        // Only update DOM if hidden
        if (resultDiv.classList.contains('hidden')) {
            resultDiv.classList.remove('hidden');
        }
        
        // Update total cost display
        const totalCostElement = document.getElementById('total-cost');
        if (totalCostElement) {
            totalCostElement.textContent = formatCurrency(totalCost);
        }

        // Update coverage breakdown
        const coverageBreakdown = document.getElementById('coverage-breakdown');
        if (coverageBreakdown) {
            coverageBreakdown.innerHTML = `
                <div class="grid gap-2">
                    <div class="flex justify-between items-center">
                        <span>General Liability Insurance</span>
                        <span class="font-semibold">${formatCurrency(generalLiability)}</span>
                    </div>
                    ${data.propertyValue > 0 ? `
                        <div class="flex justify-between items-center">
                            <span>Property Insurance</span>
                            <span class="font-semibold">${formatCurrency(propertyInsurance)}</span>
                        </div>
                    ` : ''}
                    ${data.employees > 0 ? `
                        <div class="flex justify-between items-center">
                            <span>Workers Compensation</span>
                            <span class="font-semibold">${formatCurrency(workersComp)}</span>
                        </div>
                    ` : ''}
                    ${professionalLiability > 0 ? `
                        <div class="flex justify-between items-center">
                            <span>Professional Liability</span>
                            <span class="font-semibold">${formatCurrency(professionalLiability)}</span>
                        </div>
                    ` : ''}
                    ${cyberLiability > 0 ? `
                        <div class="flex justify-between items-center">
                            <span>Cyber Liability</span>
                            <span class="font-semibold">${formatCurrency(cyberLiability)}</span>
                        </div>
                    ` : ''}
                    ${commercialAuto > 0 ? `
                        <div class="flex justify-between items-center">
                            <span>Commercial Auto</span>
                            <span class="font-semibold">${formatCurrency(commercialAuto)}</span>
                        </div>
                    ` : ''}
                </div>
            ';
        }
        // Update risk analysis (already present below)
    }

    if ('requestIdleCallback' in window) {
        requestIdleCallback(setupBusinessInsuranceCalculator);
    } else {
        setupBusinessInsuranceCalculator();
    }
});


