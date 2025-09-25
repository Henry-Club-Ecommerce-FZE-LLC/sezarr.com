// Enhanced Analytics Integration for Astro
// Safe integration of PowerShell automation analytics features

/**
 * Insurance-specific event tracking
 * Integrates safely with existing Astro setup
 */

// Enhanced Google Analytics 4 for Insurance
export const insuranceAnalytics = {
  // Track insurance-specific user actions
  trackInsuranceEvent(action, category, label, value = null) {
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        custom_parameter_1: this.getInsuranceType(),
        custom_parameter_2: this.getContentCategory()
      });
    }
  },

  // Determine insurance type from URL/content
  getInsuranceType() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('auto')) return 'auto_insurance';
    if (path.includes('health')) return 'health_insurance';
    if (path.includes('life')) return 'life_insurance';
    if (path.includes('homeowners') || path.includes('home')) return 'homeowners_insurance';
    if (path.includes('business')) return 'business_insurance';
    if (path.includes('disability')) return 'disability_insurance';
    if (path.includes('travel')) return 'travel_insurance';
    if (path.includes('pet')) return 'pet_insurance';
    return 'general_insurance';
  },

  // Get content category
  getContentCategory() {
    const path = window.location.pathname;
    if (path.includes('/posts/')) return 'article';
    if (path.includes('/tools/')) return 'calculator';
    if (path.includes('/guides/')) return 'guide';
    if (path.includes('/reviews/')) return 'review';
    return 'page';
  },

  // Initialize insurance-specific tracking
  init() {
    this.setupScrollTracking();
    this.setupFormTracking();
    this.setupEngagementTracking();
    this.setupQuoteButtonTracking();
  },

  // Track scroll depth for insurance content
  setupScrollTracking() {
    let maxScroll = 0;
    const timeCheckpoints = [30, 60, 120, 300]; // seconds
    let timeOnPage = 0;
    const startTime = Date.now();

    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (scrollPercent >= 25 && scrollPercent % 25 === 0) {
          this.trackInsuranceEvent('scroll_depth', 'engagement', `${scrollPercent}%`, scrollPercent);
        }
      }
    });

    // Time on page tracking
    setInterval(() => {
      timeOnPage = Math.floor((Date.now() - startTime) / 1000);
      if (timeCheckpoints.includes(timeOnPage)) {
        this.trackInsuranceEvent('time_on_page', 'engagement', `${timeOnPage}s`, timeOnPage);
      }
    }, 30000);
  },

  // Track quote button clicks
  setupQuoteButtonTracking() {
    document.addEventListener('click', (e) => {
      const element = e.target.closest('a, button');
      if (!element) return;

      const text = element.textContent.toLowerCase();
      const href = element.getAttribute('href') || '';

      // Quote button patterns
      if (text.includes('quote') || text.includes('compare') || text.includes('get rates')) {
        this.trackInsuranceEvent('quote_click', 'lead_generation', this.getInsuranceType(), 1);
      }

      // External insurance company links
      if (href.includes('geico.com') || href.includes('progressive.com') || href.includes('statefarm.com')) {
        this.trackInsuranceEvent('external_link_click', 'referral', href, 1);
      }

      // Calculator usage
      if (href.includes('/tools/') || text.includes('calculator')) {
        this.trackInsuranceEvent('calculator_access', 'tool_usage', this.getInsuranceType(), 1);
      }
    });
  },

  // Track form completions
  setupFormTracking() {
    document.addEventListener('submit', (e) => {
      const form = e.target;
      const formType = form.getAttribute('data-form-type') || 'unknown';
      this.trackInsuranceEvent('form_submit', 'lead_generation', formType, 1);
    });
  },

  // Track reading engagement
  setupEngagementTracking() {
    // Track when user reaches end of article
    if (document.querySelector('article')) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target.matches('article footer, .article-end')) {
            this.trackInsuranceEvent('article_complete', 'engagement', this.getInsuranceType(), 1);
          }
        });
      }, { threshold: 0.5 });

      const articleEnd = document.querySelector('article footer, .article-end');
      if (articleEnd) observer.observe(articleEnd);
    }
  }
};

// Auto-initialize when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => insuranceAnalytics.init());
  } else {
    insuranceAnalytics.init();
  }
}