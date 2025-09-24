// Performance Optimization Script for Sezarr Insurance
(function() {
  'use strict';

  // Critical performance optimizations
  const PerformanceOptimizer = {
    init() {
      this.registerServiceWorker();
      this.preloadCriticalResources();
      this.optimizeImages();
      this.initIntersectionObserver();
      this.addPerformanceMetrics();
    },

    // Register enhanced service worker
    async registerServiceWorker() {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service worker registered successfully');
          
          // Send preload message
          if (registration.active) {
            registration.active.postMessage({
              type: 'PRELOAD_PAGES',
              urls: [
                '/auto-insurance/',
                '/health-insurance/', 
                '/homeowners-insurance/',
                '/tools/'
              ]
            });
          }
        } catch (error) {
          console.log('Service worker registration failed:', error);
        }
      }
    },

    // Preload critical resources
    preloadCriticalResources() {
      const criticalResources = [
        { href: '/assets/critical.css', as: 'style' },
        { href: '/favicon.svg', as: 'image' },
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
        document.head.appendChild(link);
      });
    },

    // Optimize image loading
    optimizeImages() {
      // Add loading="lazy" to images below the fold
      const images = document.querySelectorAll('img:not([loading])');
      images.forEach((img, index) => {
        // First few images load eagerly, rest lazy
        img.loading = index < 3 ? 'eager' : 'lazy';
        img.decoding = 'async';
      });

      // Add intersection observer for better lazy loading
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
              }
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    },

    // Initialize intersection observer for below-fold content
    initIntersectionObserver() {
      if ('IntersectionObserver' in window) {
        const contentObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            }
          });
        }, { 
          rootMargin: '50px',
          threshold: 0.1 
        });

        // Observe below-fold content
        document.querySelectorAll('.below-fold').forEach(el => {
          contentObserver.observe(el);
        });
      } else {
        // Fallback for older browsers
        document.querySelectorAll('.below-fold').forEach(el => {
          el.classList.add('animate-in');
        });
      }
    },

    // Add performance metrics tracking
    addPerformanceMetrics() {
      // Web Vitals tracking (simplified)
      if ('PerformanceObserver' in window) {
        // Largest Contentful Paint
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }).observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        new PerformanceObserver((list) => {
          let cumulativeScore = 0;
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              cumulativeScore += entry.value;
            }
          }
          console.log('CLS:', cumulativeScore);
        }).observe({ entryTypes: ['layout-shift'] });
      }

      // Basic timing metrics
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          const paint = performance.getEntriesByType('paint');
          
          console.log('Performance Metrics:', {
            domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
            firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
            firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime
          });
        }, 0);
      });
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => PerformanceOptimizer.init());
  } else {
    PerformanceOptimizer.init();
  }

  // Mark content as loaded for CSS transitions
  window.addEventListener('load', () => {
    document.documentElement.classList.add('loaded');
  });

})();