
// Standalone debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Standalone renderResults function
function renderResults(results, listElement, resultsElement) {
  if (!results || results.length === 0) {
    resultsElement.classList.add('opacity-0', 'invisible');
    return;
  }

  const html = results.slice(0, 5).map(item => `
    <a href="${item.url}" class="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700">
      <div class="font-medium text-gray-900 dark:text-gray-100">${item.title}</div>
      ${item.description ? `<div class="text-sm text-gray-500 dark:text-gray-400">${item.description}</div>` : ''}
    </a>
  `).join('');

  if (listElement.children.length > 10) {
    // For large lists, replace content instead of innerHTML for better performance
    const temp = document.createElement('div');
    temp.innerHTML = `<div id="${listElement.id}" class="${listElement.className}">
      ${html}
    </div>`;
    listElement.replaceWith(temp.firstElementChild);
  } else {
    listElement.innerHTML = html;
  }
  
  resultsElement.classList.remove('opacity-0', 'invisible');
}

let searchData = [];
let navSearch = document.getElementById('nav-search');
let navResults = document.getElementById('nav-search-results');
let navList = document.getElementById('nav-search-list');
let mobileSearch = document.getElementById('mobile-search');
let mobileResults = document.getElementById('mobile-search-results');
let mobileList = document.getElementById('mobile-search-list');

const performSearch = debounce((query) => {
  if (!query || query.length < 2) {
    navResults.classList.add('opacity-0', 'invisible');
    mobileResults.classList.add('opacity-0', 'invisible');
    return;
  }
  
  const searchTerm = query.toLowerCase();
  const results = searchData
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm)
    )
    .sort((a, b) => {
      // Prioritize title matches
      const aTitleMatch = a.title.toLowerCase().includes(searchTerm);
      const bTitleMatch = b.title.toLowerCase().includes(searchTerm);
      if (aTitleMatch && !bTitleMatch) return -1;
      if (!aTitleMatch && bTitleMatch) return 1;
      return 0;
    });
  
  renderResults(results, navList, navResults);
  renderResults(results, mobileList, mobileResults);
}, 150);

// Load search data
const loadSearchData = async () => {
  try {
    const response = await fetch('/search-data.json');
    searchData = await response.json();
  } catch (error) {
    console.error('Failed to load search data:', error);
  }
};

// Initialize search when DOM is ready
const initSearch = () => {
  // Desktop search
  navSearch?.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });
  
  navSearch?.addEventListener('focus', () => {
    if (navSearch.value.length >= 2) {
      performSearch(navSearch.value);
    }
  });
  
  // Mobile search  
  mobileSearch?.addEventListener('input', (e) => {
    performSearch(e.target.value);
  });
  
  mobileSearch?.addEventListener('focus', () => {
    if (mobileSearch.value.length >= 2) {
      performSearch(mobileSearch.value);
    }
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!navSearch?.contains(e.target) && !navResults?.contains(e.target)) {
      navResults?.classList.add('opacity-0', 'invisible');
    }
    if (!mobileSearch?.contains(e.target) && !mobileResults?.contains(e.target)) {
      mobileResults?.classList.add('opacity-0', 'invisible');
    }
  });
  
  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navResults?.classList.add('opacity-0', 'invisible');
      mobileResults?.classList.add('opacity-0', 'invisible');
    }
  });

  // Load search data
  loadSearchData();
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSearch);
} else {
  initSearch();
}