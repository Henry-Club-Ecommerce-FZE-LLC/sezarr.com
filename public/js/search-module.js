// Search module
const SearchModule = {
  searchData: [],
  elements: null,
  initialized: false,
  
  init(data) {
    if (this.initialized) return;
    this.searchData = data;
    this.elements = this.getElements();
    if (!this.validateElements()) return;
    
    this.bindEvents();
    this.initialized = true;
  },
  
  getElements() {
    return {
      navSearch: document.getElementById('nav-search'),
      navResults: document.getElementById('nav-search-results'),
      navList: document.getElementById('nav-search-list'),
      mobileSearch: document.getElementById('mobile-search'),
      mobileResults: document.getElementById('mobile-search-results'),
      mobileList: document.getElementById('mobile-search-list')
    };
  },
  
  validateElements() {
    return Object.values(this.elements).every(el => el);
  },
  
  debounce(func, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  },
  
  renderResults(items, listElement, resultsElement) {
    if (items.length === 0) {
      resultsElement.classList.add('opacity-0', 'invisible');
      return;
    }
    
    const html = items.slice(0, 5).map(item => `
      <a href="/posts/${item.slug}/" class="flex items-start px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-b border-gray-100 dark:border-gray-600 last:border-b-0 transition-colors">
        <div class="flex-1">
          <div class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">${item.title}</div>
          <div class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">${item.description}</div>
          <div class="text-xs text-blue-600 dark:text-blue-400 mt-1 capitalize">${item.category} Insurance</div>
        </div>
      </a>
    `).join('');
    
    if (items.length > 5) {
      listElement.innerHTML = html + `
        <div class="px-4 py-2 text-center">
          <a href="/search/?q=${encodeURIComponent(this.elements.navSearch.value || this.elements.mobileSearch.value)}" class="text-blue-600 dark:text-blue-400 text-sm hover:underline">
            View all ${items.length} results →
          </a>
        </div>
      `;
    } else {
      listElement.innerHTML = html;
    }
    
    resultsElement.classList.remove('opacity-0', 'invisible');
  },
  
  performSearch(query) {
    const { navResults, navList, mobileResults, mobileList } = this.elements;
    
    if (!query || query.length < 2) {
      navResults.classList.add('opacity-0', 'invisible');
      mobileResults.classList.add('opacity-0', 'invisible');
      return;
    }
    
    const searchTerm = query.toLowerCase();
    const results = this.searchData
      .filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
      )
      .sort((a, b) => {
        const aTitleMatch = a.title.toLowerCase().includes(searchTerm);
        const bTitleMatch = b.title.toLowerCase().includes(searchTerm);
        if (aTitleMatch && !bTitleMatch) return -1;
        if (!aTitleMatch && bTitleMatch) return 1;
        return 0;
      });
    
    window.requestAnimationFrame(() => {
      this.renderResults(results, navList, navResults);
      this.renderResults(results, mobileList, mobileResults);
    });
  },
  
  bindEvents() {
    const { navSearch, navResults, mobileSearch, mobileResults } = this.elements;
    const debouncedSearch = this.debounce(this.performSearch.bind(this), 150);
    
    // Desktop search
    navSearch.addEventListener('input', e => debouncedSearch(e.target.value));
    navSearch.addEventListener('focus', () => {
      if (navSearch.value.length >= 2) {
        debouncedSearch(navSearch.value);
      }
    });
    
    // Mobile search
    mobileSearch.addEventListener('input', e => debouncedSearch(e.target.value));
    mobileSearch.addEventListener('focus', () => {
      if (mobileSearch.value.length >= 2) {
        debouncedSearch(mobileSearch.value);
      }
    });
    
    // Close dropdowns on outside click
    document.addEventListener('click', e => {
      if (!navSearch.contains(e.target) && !navResults.contains(e.target)) {
        navResults.classList.add('opacity-0', 'invisible');
      }
      if (!mobileSearch.contains(e.target) && !mobileResults.contains(e.target)) {
        mobileResults.classList.add('opacity-0', 'invisible');
      }
    });
    
    // Close on escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        navResults.classList.add('opacity-0', 'invisible');
        mobileResults.classList.add('opacity-0', 'invisible');
      }
    });
  }
};

export default SearchModule;