/* empty css                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import { S as SITE, $ as $$BaseLayout } from './BaseLayout-BQKj_NaX.js';
import { $ as $$AdSenseBlock } from './AdSenseBlock-Be-zcsjf.js';
import { $ as $$FeaturedPosts } from './FeaturedPosts-V3h4Abvq.js';
import { $ as $$ResponsivePicture } from './ResponsivePicture-De5xvzV7.js';
import { $ as $$Breadcrumbs } from './Breadcrumbs-BzCmubR1.js';
import { $ as $$FAQ } from './FAQ-BP8WQF8o.js';
import { $ as $$NewsletterCallout } from './NewsletterCallout-C1kA8kzK.js';
import { g as getCollection } from './_astro_content-g0nzSzKf.js';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).filter((post) => post.data.category === "travel");
  const featuredPosts = posts.slice(0, 3);
  const title = "Travel Insurance Guide - Protect Your Adventures | Sezarr";
  const description = "Complete travel insurance guide for 2025. Compare policies, understand coverage, and find the best protection for international and domestic travel.";
  const keywords = "travel insurance, trip insurance, international travel coverage, trip cancellation insurance, medical travel insurance, travel protection";
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Travel Insurance", href: "/travel-insurance/" }
  ];
  const faqs = [
    {
      question: "Do I need travel insurance for domestic trips?",
      answer: "While not required, travel insurance can be valuable for domestic trips if you have non-refundable bookings, pre-existing medical conditions, or are traveling to remote areas with limited medical facilities."
    },
    {
      question: "What does travel insurance typically cover?",
      answer: "Most travel insurance covers trip cancellation/interruption, medical emergencies, emergency evacuation, lost luggage, travel delays, and accidental death & dismemberment."
    },
    {
      question: "When should I buy travel insurance?",
      answer: "Purchase travel insurance as soon as you make your first trip payment. Some benefits like pre-existing medical condition coverage require purchase within 10-21 days of initial deposit."
    },
    {
      question: "Does travel insurance cover COVID-19?",
      answer: "Many policies now include COVID-19 coverage for trip cancellation if you test positive before travel, medical treatment, and quarantine expenses. Coverage varies by provider."
    },
    {
      question: "How much does travel insurance cost?",
      answer: "Travel insurance typically costs 4-10% of your total trip cost. Basic coverage starts around $50-100 for short domestic trips, while comprehensive international coverage can range from $200-800+ for expensive trips."
    }
  ];
  const coverageTypes = [
    {
      title: "Trip Cancellation",
      description: "Reimburses non-refundable trip costs if you cancel for covered reasons",
      href: "/travel-insurance/trip-cancellation/",
      icon: "\u2708\uFE0F"
    },
    {
      title: "Medical Coverage",
      description: "Emergency medical treatment and evacuation while traveling",
      href: "/travel-insurance/medical-coverage/",
      icon: "\u{1F3E5}"
    },
    {
      title: "Baggage Protection",
      description: "Coverage for lost, stolen, or delayed luggage and personal items",
      href: "/travel-insurance/baggage-protection/",
      icon: "\u{1F9F3}"
    },
    {
      title: "Travel Delay",
      description: "Compensation for additional expenses due to covered delays",
      href: "/travel-insurance/travel-delay/",
      icon: "\u23F0"
    },
    {
      title: "Emergency Evacuation",
      description: "Transportation to nearest adequate medical facility",
      href: "/travel-insurance/emergency-evacuation/",
      icon: "\u{1F681}"
    },
    {
      title: "Travel Calculator",
      description: "Calculate your travel insurance needs and compare costs",
      href: "/tools/travel-insurance-calculator/",
      icon: "\u{1F9EE}"
    }
  ];
  const destinations = [
    {
      title: "Europe Travel",
      description: "Insurance requirements and recommendations for European destinations",
      href: "/travel-insurance/europe/",
      icon: "\u{1F3F0}",
      highlights: ["Schengen visa requirements", "EHIC alternatives", "Winter sports coverage"]
    },
    {
      title: "Asia Pacific",
      description: "Coverage needs for Asia-Pacific travel including adventure activities",
      href: "/travel-insurance/asia-pacific/",
      icon: "\u{1F3D4}\uFE0F",
      highlights: ["Monsoon season protection", "Adventure sports", "Medical evacuation"]
    },
    {
      title: "Caribbean",
      description: "Hurricane season and tropical travel insurance considerations",
      href: "/travel-insurance/caribbean/",
      icon: "\u{1F3D6}\uFE0F",
      highlights: ["Hurricane coverage", "Water sports", "Resort protection"]
    },
    {
      title: "Cruise Insurance",
      description: "Specialized coverage for cruise vacations and ocean travel",
      href: "/travel-insurance/cruise/",
      icon: "\u{1F6A2}",
      highlights: ["Port changes", "Cabin confinement", "Shore excursions"]
    }
  ];
  const tripTypes = [
    {
      title: "Business Travel",
      description: "Professional travel coverage and corporate policies",
      href: "/travel-insurance/business-travel/",
      icon: "\u{1F4BC}"
    },
    {
      title: "Family Vacations",
      description: "Multi-generational coverage and child-specific benefits",
      href: "/travel-insurance/family-travel/",
      icon: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}"
    },
    {
      title: "Adventure Travel",
      description: "High-risk activities and extreme sports coverage",
      href: "/travel-insurance/adventure-travel/",
      icon: "\u{1F3C4}\u200D\u2642\uFE0F"
    },
    {
      title: "Senior Travel",
      description: "Age-specific coverage and medical considerations for 65+ travelers",
      href: "/travel-insurance/senior-travel/",
      icon: "\u{1F474}"
    }
  ];
  const siteUrl = SITE.URL;
  const currentUrl = `${siteUrl}/travel-insurance/`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      "url": currentUrl,
      "name": title,
      "description": description,
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": `${siteUrl}/#website`
      },
      "breadcrumb": {
        "@id": `${currentUrl}#breadcrumb`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${currentUrl}#breadcrumb`,
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": index === breadcrumbItems.length - 1 ? void 0 : `${siteUrl}${item.href}`
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "ogImage": "/images/travel-insurance-hero.jpg", "schema": schema }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Hero Section --> <section class="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"> <div class="space-y-6"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
Travel Insurance<br> <span class="text-purple-600 dark:text-purple-400">Protect Your Adventures</span> </h1> <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
From weekend getaways to international expeditions, ensure your travels are protected with comprehensive coverage tailored to your destination and activities.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/tools/travel-insurance-calculator/" class="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
Calculate Coverage
</a> <a href="/travel-insurance/guide/" class="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-8 py-3 rounded-lg font-semibold transition-colors text-center">
Read Complete Guide
</a> </div> </div> <div class="relative"> ${renderComponent($$result2, "ResponsivePicture", $$ResponsivePicture, { "src": "/images/travel-insurance-hero.jpg", "alt": "Travelers with luggage at airport protected by travel insurance", "width": 600, "height": 400, "class": "w-full h-auto rounded-lg shadow-lg", "priority": true })} </div> </div> </div> </section> <!-- Key Statistics --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Why Travel Insurance Matters
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Travel disruptions happen more often than you think. Protect your investment and peace of mind.
</p> </div> <div class="grid md:grid-cols-4 gap-8"> <div class="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg"> <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">1 in 6</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Trip Disruptions</div> <div class="text-sm text-gray-600 dark:text-gray-300">
Travelers experience some form of trip disruption
</div> </div> <div class="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg"> <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$50K+</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Medical Evacuation</div> <div class="text-sm text-gray-600 dark:text-gray-300">
Average cost of emergency medical evacuation abroad
</div> </div> <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg"> <div class="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">24%</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Flight Delays</div> <div class="text-sm text-gray-600 dark:text-gray-300">
Percentage of flights delayed in 2024
</div> </div> <div class="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg"> <div class="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">$3,000</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Average Trip Cost</div> <div class="text-sm text-gray-600 dark:text-gray-300">
For international family vacation that could be at risk
</div> </div> </div> </div> </section> <!-- Coverage Types --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Essential Travel Insurance Coverage
</h2> <p class="text-lg text-gray-600 dark:text-gray-300">
Understand what's covered and choose the right protection for your trip.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${coverageTypes.map((coverage) => renderTemplate`<a${addAttribute(coverage.href, "href")} class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 group"> <div class="text-3xl mb-4">${coverage.icon}</div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"> ${coverage.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm"> ${coverage.description} </p> </a>`)} </div> </div> </section> <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "middle-content" })} <!-- Destination-Specific Guides --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Destination-Specific Travel Insurance
</h2> <p class="text-lg text-gray-600 dark:text-gray-300">
Get tailored advice for your travel destination and understand unique coverage needs.
</p> </div> <div class="grid md:grid-cols-2 gap-8"> ${destinations.map((destination) => renderTemplate`<a${addAttribute(destination.href, "href")} class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-600 group hover:scale-[1.02]"> <div class="flex items-start space-x-4"> <div class="text-5xl flex-shrink-0">${destination.icon}</div> <div class="flex-1"> <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"> ${destination.title} </h3> <p class="text-gray-600 dark:text-gray-300 mb-4"> ${destination.description} </p> <div class="space-y-2"> ${destination.highlights.map((highlight) => renderTemplate`<div class="flex items-center text-sm text-gray-500 dark:text-gray-400"> <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span> ${highlight} </div>`)} </div> </div> </div> </a>`)} </div> </div> </section> <!-- Trip Types --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Insurance by Trip Type
</h2> <p class="text-lg text-gray-600 dark:text-gray-300">
Find coverage solutions tailored to your specific travel style and activities.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${tripTypes.map((tripType) => renderTemplate`<a${addAttribute(tripType.href, "href")} class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-700 group hover:scale-105"> <div class="text-4xl mb-4 text-center">${tripType.icon}</div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"> ${tripType.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm text-center"> ${tripType.description} </p> </a>`)} </div> </div> </section> <!-- Featured Posts --> ${featuredPosts.length > 0 && renderTemplate`<section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Latest Travel Insurance Articles
</h2> ${renderComponent($$result2, "FeaturedPosts", $$FeaturedPosts, { "posts": featuredPosts })} </div> </section>`} <!-- FAQ Section --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Frequently Asked Questions
</h2> ${renderComponent($$result2, "FAQ", $$FAQ, { "items": faqs })} </div> </section> <!-- Newsletter Callout --> ${renderComponent($$result2, "NewsletterCallout", $$NewsletterCallout, {})} <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "bottom-content" })} </main> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/travel-insurance/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/travel-insurance/index.astro";
const $$url = "/travel-insurance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
