// Progressive Loading Module
const ProgressiveLoading = {
  init() {
    this.setupLazyLoading();
    this.setupDynamicContent();
  },
  
  setupLazyLoading() {
    // Set up intersection observer for images and iframes
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            if (element.dataset.src) {
              if (element.tagName === 'IMG') {
                this.loadImage(element);
              } else if (element.tagName === 'IFRAME') {
                this.loadIframe(element);
              }
              observer.unobserve(element);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );
    
    // Observe all lazy-loaded elements
    document.querySelectorAll('[data-src]').forEach(element => {
      observer.observe(element);
    });
  },
  
  setupDynamicContent() {
    // Set up intersection observer for dynamic content sections
    const contentObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            if (section.dataset.dynamic) {
              this.loadDynamicContent(section);
              observer.unobserve(section);
            }
          }
        });
      },
      {
        rootMargin: '100px 0px',
        threshold: 0
      }
    );
    
    // Observe all dynamic content sections
    document.querySelectorAll('[data-dynamic]').forEach(section => {
      contentObserver.observe(section);
    });
  },
  
  loadImage(img) {
    // Create a temporary image to preload
    const tempImage = new Image();
    tempImage.onload = () => {
      img.src = img.dataset.src;
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.classList.add('loaded');
    };
    tempImage.src = img.dataset.src;
  },
  
  loadIframe(iframe) {
    iframe.src = iframe.dataset.src;
    iframe.classList.add('loaded');
  },
  
  async loadDynamicContent(section) {
    const url = section.dataset.dynamic;
    if (!url) return;
    
    try {
      const response = await fetch(url);
      const html = await response.text();
      
      // Use requestAnimationFrame for smooth insertion
      requestAnimationFrame(() => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        
        // Replace section content
        while (section.firstChild) {
          section.removeChild(section.firstChild);
        }
        while (temp.firstChild) {
          section.appendChild(temp.firstChild);
        }
        
        // Initialize any dynamic content
        this.setupLazyLoading();
        this.initializeInteractiveElements(section);
      });
    } catch (error) {
      console.error('Error loading dynamic content:', error);
    }
  },
  
  initializeInteractiveElements(container) {
    // Initialize interactive elements within the container
    container.querySelectorAll('[data-interactive]').forEach(element => {
      const handler = element.dataset.handler;
      const event = element.dataset.event || 'click';
      
      if (handler && typeof window[handler] === 'function') {
        element.addEventListener(event, window[handler]);
      }
    });
  }
};

// Export the module
export default ProgressiveLoading;