// Performance-optimized script to prevent long main thread tasks
// Breaks down heavy operations using requestIdleCallback and chunks

(function() {
  'use strict';

  // Performance monitoring
  const perfMarks = new Map();
  
  function mark(name) {
    perfMarks.set(name, performance.now());
  }
  
  function measure(name, startMark) {
    const start = perfMarks.get(startMark);
    if (start) {
      const duration = performance.now() - start;
      console.log(`${name}: ${duration.toFixed(2)}ms`);
      return duration;
    }
  }

  // Chunked execution to prevent long tasks
  function executeInChunks(items, processor, callback, chunkSize = 10) {
    const chunks = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      chunks.push(items.slice(i, i + chunkSize));
    }
    
    let chunkIndex = 0;
    
    function processNextChunk() {
      if (chunkIndex >= chunks.length) {
        if (callback) callback();
        return;
      }
      
      const chunk = chunks[chunkIndex++];
      
      // Process chunk
      requestIdleCallback(function(deadline) {
        while (chunk.length > 0 && deadline.timeRemaining() > 1) {
          processor(chunk.shift());
        }
        
        // If chunk still has items, continue in next idle period
        if (chunk.length > 0) {
          chunks.splice(chunkIndex - 1, 0, chunk);
        }
        
        // Schedule next chunk
        setTimeout(processNextChunk, 0);
      });
    }
    
    processNextChunk();
  }

  // Optimized image lazy loading with intersection observer
  function initLazyImages() {
    mark('lazyImages');
    
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without IntersectionObserver
      document.querySelectorAll('img[data-src]').forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
      return;
    }

    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
          }
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    const images = document.querySelectorAll('img[data-src]');
    executeInChunks(Array.from(images), function(img) {
      imageObserver.observe(img);
    }, function() {
      measure('lazyImages complete', 'lazyImages');
    }, 5);
  }

  // Optimized event delegation
  function initEventDelegation() {
    mark('eventDelegation');
    
    document.addEventListener('click', function(e) {
      const target = e.target.closest('[data-action]');
      if (!target) return;
      
      const action = target.dataset.action;
      
      // Use requestIdleCallback for non-critical actions
      requestIdleCallback(function() {
        switch(action) {
          case 'toggle-menu':
            target.nextElementSibling?.classList.toggle('active');
            break;
          case 'scroll-to-top':
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
          // Add other actions as needed
        }
      });
    }, { passive: true });
    
    measure('eventDelegation', 'eventDelegation');
  }

  // Optimized form handling
  function initForms() {
    mark('forms');
    
    const forms = document.querySelectorAll('form');
    executeInChunks(Array.from(forms), function(form) {
      // Add lightweight validation
      form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
          if (!field.value.trim()) {
            field.classList.add('error');
            isValid = false;
          } else {
            field.classList.remove('error');
          }
        });
        
        if (!isValid) {
          e.preventDefault();
        }
      }, { passive: false });
    }, function() {
      measure('forms complete', 'forms');
    });
  }

  // Performance-friendly scroll handling
  let scrollTimer = null;
  function initScrollOptimizations() {
    mark('scroll');
    
    window.addEventListener('scroll', function() {
      if (scrollTimer) return;
      
      scrollTimer = requestAnimationFrame(function() {
        const scrolled = window.pageYOffset > 50;
        document.body.classList.toggle('scrolled', scrolled);
        scrollTimer = null;
      });
    }, { passive: true });
    
    measure('scroll', 'scroll');
  }

  // Initialize everything after page load in chunks
  function init() {
    mark('init');
    
    const initializers = [
      initLazyImages,
      initEventDelegation,
      initForms,
      initScrollOptimizations
    ];
    
    executeInChunks(initializers, function(init) {
      init();
    }, function() {
      measure('init complete', 'init');
      
      // Report performance
      if (window.gtag) {
        gtag('event', 'performance_optimized', {
          event_category: 'Performance',
          event_label: 'Script Loading Optimized',
          value: Math.round(performance.now())
        });
      }
    }, 1);
  }

  // Wait for page to be interactive before initializing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(init, 0);
    });
  } else {
    setTimeout(init, 0);
  }

})();