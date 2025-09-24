// Enhanced theme handling script optimized for all devices and scenarios
(function() {
  'use strict';
  
  // Cache DOM references and frequently used values
  const html = document.documentElement;
  const darkModeQuery = matchMedia('(prefers-color-scheme: dark)');
  
  // Get current theme with fallback logic
  function getCurrentTheme() {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    // Auto-detect from system preference if no stored theme
    return darkModeQuery.matches ? 'dark' : 'light';
  }
  
  // Apply theme with proper DOM manipulation
  function applyTheme(theme) {
    const isDark = theme === 'dark';
    
    // Update HTML class with proper class management
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light'); 
      html.classList.remove('dark');
    }
    
    // Ensure h-full class is preserved
    if (!html.classList.contains('h-full')) {
      html.classList.add('h-full');
    }
    
    // Update all theme toggle buttons
    const toggles = document.querySelectorAll('#theme-toggle, [data-theme-toggle]');
    toggles.forEach(toggle => {
      toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
    
    // Store the applied theme
    localStorage.setItem('theme', theme);
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: theme, isDark: isDark }
    }));
  }
  
  // Toggle theme function
  function toggleTheme() {
    const current = getCurrentTheme();
    const newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  }
  
  // Initialize theme on load (check if already initialized by early script)
  function initTheme() {
    // If early script already initialized, just update UI elements
    if (window.themeReady && window.initialTheme) {
      applyTheme(window.initialTheme);
    } else {
      // Fallback initialization
      const theme = getCurrentTheme();
      applyTheme(theme);
    }
  }
  
  // Set up theme toggle handlers - simplified approach
  function setupThemeToggles() {
    // Use event delegation for reliability
    document.addEventListener('click', function(event) {
      // Check if clicked element or parent is a theme toggle
      const toggle = event.target.closest('#theme-toggle, [data-theme-toggle]');
      if (toggle) {
        event.preventDefault();
        event.stopPropagation();
        toggleTheme();
      }
    });
  }
  
  // Listen for system theme changes
  darkModeQuery.addEventListener('change', function(event) {
    // Only auto-switch if user hasn't manually set a preference
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      const newTheme = event.matches ? 'dark' : 'light';
      applyTheme(newTheme);
    }
  });
  
  // Listen for storage changes (cross-tab theme sync)
  window.addEventListener('storage', function(event) {
    if (event.key === 'theme' && event.newValue) {
      applyTheme(event.newValue);
    }
  });
  
  // Handle page visibility changes (mobile switching)
  document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
      // Re-apply theme when page becomes visible (handles mobile switching)
      const theme = getCurrentTheme();
      applyTheme(theme);
    }
  });
  
  // Initialize everything
  function init() {
    initTheme();
    setupThemeToggles();
  }
  
  // Run initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Expose theme functions globally for debugging/external use
  window.themeManager = {
    getCurrentTheme: getCurrentTheme,
    applyTheme: applyTheme,
    toggleTheme: toggleTheme
  };
  
})();