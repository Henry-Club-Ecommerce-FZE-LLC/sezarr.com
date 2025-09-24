// Enhanced theme handling script to ensure proper dark mode across the site
document.addEventListener('DOMContentLoaded', () => {
  // Run theme check on each page load to ensure consistency
  function applyTheme() {
    const theme = localStorage.getItem('theme') || 
                 (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply theme
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update all toggles
    document.querySelectorAll('[id="theme-toggle"]').forEach(toggle => {
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
  }
  
  // Listen for theme changes from localStorage in other tabs/windows
  window.addEventListener('storage', event => {
    if (event.key === 'theme') {
      applyTheme();
    }
  });
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (!localStorage.getItem('theme')) {
      // Only apply if user hasn't set a preference
      if (event.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  });
  
  // Ensure theme is always in sync
  applyTheme();
});