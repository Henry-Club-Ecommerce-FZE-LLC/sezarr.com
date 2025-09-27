// Quick test script to debug the calculator
console.log('Test script loaded');

// Test if the form exists
setTimeout(() => {
  const form = document.getElementById('autoInsuranceCalculator');
  const companySection = document.getElementById('companyQuotesSection');
  const companyContainer = document.getElementById('companyQuotes');
  
  console.log('Form found:', !!form);
  console.log('Company section found:', !!companySection);
  console.log('Company container found:', !!companyContainer);
  
  if (form) {
    // Add a test submit handler
    form.addEventListener('submit', function(e) {
      console.log('FORM SUBMITTED - TEST HANDLER TRIGGERED');
      
      // Show company section immediately for testing
      if (companySection) {
        companySection.classList.remove('hidden');
        console.log('Company section shown');
      }
      
      // Add test content
      if (companyContainer) {
        companyContainer.innerHTML = `
          <div style="background: yellow; padding: 20px; border: 2px solid red;">
            <h3>TEST: Company Rates Should Show Here</h3>
            <p>If you see this, the JavaScript is working but there's an issue with the main calculator logic.</p>
          </div>
        `;
        console.log('Test content added to company container');
      }
    });
  }
}, 1000);