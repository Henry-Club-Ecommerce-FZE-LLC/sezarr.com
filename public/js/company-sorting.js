// Insurance Company Sorting Functionality
document.addEventListener('DOMContentLoaded', function() {
  console.log('Company sorting script loaded');
  
  const sortSelect = document.getElementById('sort-companies-select');
  const filterSelect = document.getElementById('filter-coverage-select');
  const companiesGrid = document.getElementById('companies-grid');

  if (sortSelect && filterSelect && companiesGrid) {
    console.log('Found all required elements for sorting');
    
    const companiesData = [
      { name: 'State Farm', dataCompany: 'state-farm', financial: 'A++', established: 1922, market: 1 },
      { name: 'GEICO', dataCompany: 'geico', financial: 'A++', established: 1936, market: 2 },
      { name: 'Progressive', dataCompany: 'progressive', financial: 'A+', established: 1937, market: 3 },
      { name: 'Allstate', dataCompany: 'allstate', financial: 'A+', established: 1931, market: 4 },
      { name: 'USAA', dataCompany: 'usaa', financial: 'A++', established: 1922, market: 5 },
      { name: 'Farmers Insurance', dataCompany: 'farmers-insurance', financial: 'A', established: 1928, market: 6 }
    ];

    function sortCompaniesBy(criteria) {
      console.log('Sorting by:', criteria);
      
      const companyCards = Array.from(companiesGrid.querySelectorAll('.company-card'));
      
      companyCards.sort((a, b) => {
        const dataCompanyA = a.dataset.company;
        const dataCompanyB = b.dataset.company;
        
        const companyA = companiesData.find(c => c.dataCompany === dataCompanyA);
        const companyB = companiesData.find(c => c.dataCompany === dataCompanyB);
        
        if (!companyA || !companyB) {
          console.warn('Company data not found for:', dataCompanyA, dataCompanyB);
          return 0;
        }

        switch (criteria) {
          case 'name':
            return companyA.name.localeCompare(companyB.name);
          case 'financial':
            const ratingOrder = { 'A++': 3, 'A+': 2, 'A': 1 };
            return (ratingOrder[companyB.financial] || 0) - (ratingOrder[companyA.financial] || 0);
          case 'established':
            return companyA.established - companyB.established;
          case 'market':
            return companyA.market - companyB.market;
          default:
            return 0;
        }
      });

      // Reorder the DOM elements
      companyCards.forEach(card => {
        companiesGrid.appendChild(card);
      });
      
      console.log('Companies reordered successfully');
    }

    function sortAndFilter() {
      const sortValue = sortSelect.value;
      const filterValue = filterSelect.value;
      
      console.log('Sort and filter called:', sortValue, filterValue);
      
      sortCompaniesBy(sortValue);
      // Filter functionality can be added here later if needed
    }

    // Add event listeners
    sortSelect.addEventListener('change', sortAndFilter);
    filterSelect.addEventListener('change', sortAndFilter);
    
    // Initial sort on page load
    sortAndFilter();
    
    console.log('Company sorting initialized successfully');
  } else {
    console.warn('Sort or filter elements not found:', {
      sortSelect: !!sortSelect,
      filterSelect: !!filterSelect, 
      companiesGrid: !!companiesGrid
    });
  }
});