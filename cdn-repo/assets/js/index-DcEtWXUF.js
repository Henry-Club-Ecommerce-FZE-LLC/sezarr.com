/* empty css                              */
import { b as createAstro, c as createComponent, a as renderTemplate, u as unescapeHTML, r as renderComponent, m as maybeRenderHead } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import { S as SITE, $ as $$BaseLayout } from './BaseLayout-BQKj_NaX.js';
import { $ as $$ResponsiveImage } from './ResponsiveImage-DIKUfFkG.js';
import { $ as $$AdSenseBlock } from './AdSenseBlock-Be-zcsjf.js';
import { $ as $$NewsletterCallout } from './NewsletterCallout-C1kA8kzK.js';
import { $ as $$FAQ } from './FAQ-BP8WQF8o.js';
import { $ as $$FeaturedPosts } from './FeaturedPosts-V3h4Abvq.js';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://sezarr.com");
const $$InsuranceServiceSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InsuranceServiceSchema;
  const {
    serviceType,
    serviceName,
    description,
    url,
    averageCost,
    coverageAreas = ["United States"],
    provider = SITE.NAME
  } = Astro2.props;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": url,
    "provider": {
      "@type": "Organization",
      "@id": `${SITE.URL}/#organization`,
      "name": provider
    },
    "serviceType": serviceType,
    "areaServed": coverageAreas.map((area) => ({
      "@type": "Place",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Information`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${serviceName} Guidance`,
            "description": `Expert ${serviceName.toLowerCase()} advice and comparison tools`
          },
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": (/* @__PURE__ */ new Date()).toISOString(),
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "0",
            "priceCurrency": "USD",
            "valueAddedTaxIncluded": false
          }
        }
      ]
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Insurance Consumers",
      "geographicArea": {
        "@type": "Country",
        "name": "United States"
      }
    },
    "category": "Financial Services",
    "additionalType": "https://schema.org/InsuranceAgency"
  };
  if (averageCost) {
    serviceSchema.offers = {
      "@type": "AggregateOffer",
      "lowPrice": averageCost.includes("-") ? averageCost.split("-")[0].replace(/[^0-9.]/g, "") : averageCost.replace(/[^0-9.]/g, ""),
      "highPrice": averageCost.includes("-") ? averageCost.split("-")[1]?.replace(/[^0-9.]/g, "") : averageCost.replace(/[^0-9.]/g, ""),
      "priceCurrency": "USD",
      "offerCount": "100+",
      "availability": "https://schema.org/InStock"
    };
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(serviceSchema)));
}, "C:/Mirza/Websites/Insurance/src/components/schemas/InsuranceServiceSchema.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Auto Insurance Guide 2025 - Coverage, Rates & Best Providers";
  const description = "Complete auto insurance guide for 2025. Compare coverage options, find the best rates, understand requirements & save money on car insurance.";
  const siteUrl = SITE.URL;
  const pageUrl = `${siteUrl}/auto-insurance/`;
  const categorySchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": "Auto Insurance - Coverage, Rates & Savings Guide | Sezarr",
      "description": "Find the best auto insurance coverage at affordable rates. Compare providers, understand coverage types, and discover money-saving discounts.",
      "inLanguage": "en-US",
      "isPartOf": {
        "@id": `${siteUrl}/#website`
      },
      "about": {
        "@type": "Thing",
        "name": "Auto Insurance"
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "Auto Insurance Information",
        "description": "Comprehensive auto insurance guidance and tools",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Auto Insurance Comparison",
            "description": "Compare auto insurance rates and coverage from top providers"
          },
          {
            "@type": "Service",
            "name": "Auto Insurance Calculator",
            "description": "Calculate your auto insurance needs and estimated costs"
          },
          {
            "@type": "Article",
            "name": "Auto Insurance Coverage Guide",
            "description": "Understanding different types of auto insurance coverage"
          }
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Auto Insurance",
            "item": pageUrl
          }
        ]
      },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".stats-grid"]
      }
    }
  ];
  const pageFAQSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": pageUrl,
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the minimum car insurance required by law?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most states require liability insurance with minimum coverage limits. Typical requirements include $25,000-$50,000 for bodily injury per person, $50,000-$100,000 per accident, and $10,000-$25,000 for property damage."
          }
        },
        {
          "@type": "Question",
          "name": "How can I lower my auto insurance premiums?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reduce premiums by maintaining a clean driving record, bundling policies, taking defensive driving courses, increasing deductibles, qualifying for discounts, and comparing quotes from multiple insurers annually."
          }
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Auto Insurance",
          "item": pageUrl
        }
      ]
    }
  };
  const autoInsuranceStats = [
    { label: "Average Annual Cost", value: "$1,592", description: "National average premium" },
    { label: "Potential Savings", value: "$537", description: "By comparing quotes" },
    { label: "Coverage Requirements", value: "50 States", description: "Have mandatory insurance" },
    { label: "Market Competition", value: "100+", description: "Major insurance providers" }
  ];
  const coverageTypes = [
    {
      title: "Liability Coverage",
      description: "Required protection for injuries and damages to others",
      features: ["Bodily injury liability", "Property damage liability", "State minimum requirements", "Legal protection", "Court costs coverage"],
      priceRange: "$25-75/month"
    },
    {
      title: "Full Coverage",
      description: "Comprehensive protection including collision and comprehensive",
      features: ["Collision coverage", "Comprehensive coverage", "Liability coverage", "Medical payments", "Uninsured motorist"],
      priceRange: "$100-200/month"
    },
    {
      title: "Additional Protection",
      description: "Enhanced coverage options for complete peace of mind",
      features: ["Gap insurance", "Roadside assistance", "Rental car coverage", "Personal injury protection", "New car replacement"],
      priceRange: "$15-40/month"
    },
    {
      title: "Usage-Based Insurance",
      description: "Pay-per-mile and safe driving discount programs",
      features: ["Telematics monitoring", "Safe driver rewards", "Low mileage discounts", "Real-time feedback", "Personalized rates"],
      priceRange: "10-30% savings"
    }
  ];
  const faqs = [
    {
      question: "What is the minimum car insurance required by law?",
      answer: "Most states require liability insurance with minimum coverage limits. Typical requirements include $25,000-$50,000 for bodily injury per person, $50,000-$100,000 per accident, and $10,000-$25,000 for property damage. Some states also require personal injury protection (PIP) or uninsured motorist coverage."
    },
    {
      question: "How can I lower my auto insurance premiums?",
      answer: "You can reduce premiums by maintaining a clean driving record, bundling policies, taking defensive driving courses, increasing deductibles, qualifying for discounts (good student, military, etc.), and comparing quotes from multiple insurers annually."
    },
    {
      question: "What's the difference between collision and comprehensive coverage?",
      answer: "Collision coverage pays for damage to your car from accidents with other vehicles or objects. Comprehensive coverage protects against non-collision events like theft, vandalism, weather damage, fire, and animal strikes."
    },
    {
      question: "Do I need full coverage if my car is paid off?",
      answer: "While not legally required, full coverage is recommended even for paid-off vehicles. It protects your investment and provides financial security. The decision depends on your car's value, your savings, and risk tolerance."
    },
    {
      question: "How often should I shop for auto insurance?",
      answer: "Compare auto insurance quotes at least annually, and whenever you have major life changes like moving, getting married, adding drivers, or buying a new car. Rates and discounts change frequently, so regular comparison can save money."
    },
    {
      question: "What factors affect my auto insurance rates?",
      answer: "Key factors include your driving record, age, location, vehicle type, credit score, coverage limits, deductibles, and mileage. Insurance companies also consider claims history, marital status, and occupation when calculating premiums."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "schema": categorySchema, "image": "/images/auto-insurance-hero.jpg", "url": pageUrl, "type": "website", "category": "Auto Insurance", "tags": ["auto insurance", "car insurance", "vehicle coverage", "insurance rates", "insurance comparison"] }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", "  ", '<section class="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950 py-16 lg:py-24"> <div class="container mx-auto px-4"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <div> <div class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"></path> </svg>\nAuto Insurance Guide 2025\n</div> <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">\nSmart <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Auto Insurance</span> Protection\n</h1> <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">\nComprehensive auto insurance guide for 2025. Compare coverage options, find the best rates, understand state requirements, and save money on car insurance with expert insights.\n</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/tools/auto-insurance-calculator/" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path> </svg>\nCalculate Insurance Cost\n</a> <a href="/auto/complete-auto-insurance-guide-2025/" class="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path> </svg>\nRead Complete Guide\n</a> </div> </div> <div class="relative"> ', ' <div class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"> <div class="flex items-center gap-4"> <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path> </svg> </div> <div> <div class="font-bold text-gray-900 dark:text-white">50 State Coverage</div> <div class="text-sm text-gray-600 dark:text-gray-300">Legal compliance</div> </div> </div> </div> </div> </div> </div> </section>  <section class="py-16 bg-white dark:bg-gray-900"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">\nAuto Insurance Market Insights\n</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">\nUnderstanding the auto insurance landscape and what it means for your budget\n</p> </div> <div class="stats-grid grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ', ' </div> </div> </section>  <section class="py-16 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">\nTypes of Auto Insurance Coverage\n</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">\nChoose the right protection level for your vehicle and financial situation\n</p> </div> <div class="grid md:grid-cols-2 gap-8"> ', ' </div> </div> </section>  <section class="py-16 bg-white dark:bg-gray-900"> ', ' </section>  <section class="py-8"> ', ' </section>  <section class="py-16 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">\nAuto Insurance FAQ\n</h2> <p class="text-lg text-gray-600 dark:text-gray-300">\nCommon questions about car insurance coverage and rates\n</p> </div> ', " </div> </div> </section>  ", '  <script type="application/ld+json">', "<\/script> "])), renderComponent($$result2, "InsuranceServiceSchema", $$InsuranceServiceSchema, { "serviceType": "Auto Insurance", "serviceName": "Auto Insurance Guidance", "description": "Comprehensive auto insurance information, comparisons, and tools to help you find the best coverage at affordable rates.", "url": pageUrl, "averageCost": "$500-2000 annually", "coverageAreas": ["United States"] }), maybeRenderHead(), renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "src": "/images/auto-insurance-hero", "alt": "Auto Insurance Coverage - Cars protected by comprehensive insurance policies", "width": 600, "height": 400, "class": "rounded-2xl shadow-2xl", "priority": true }), autoInsuranceStats.map((stat) => renderTemplate`<div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl min-h-[200px] flex flex-col justify-center"> <div class="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"> ${stat.value} </div> <div class="text-lg font-semibold text-gray-900 dark:text-white mb-1"> ${stat.label} </div> <div class="text-sm text-gray-600 dark:text-gray-300"> ${stat.description} </div> </div>`), coverageTypes.map((coverage) => renderTemplate`<div class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 min-h-[380px] flex flex-col"> <div class="flex items-start justify-between mb-6"> <h3 class="text-xl font-bold text-gray-900 dark:text-white"> ${coverage.title} </h3> <span class="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"> ${coverage.priceRange} </span> </div> <div class="flex-grow"> <p class="text-gray-600 dark:text-gray-300 mb-6"> ${coverage.description} </p> <ul class="space-y-2"> ${coverage.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-700 dark:text-gray-300"> <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${feature} </li>`)} </ul> </div> </div>`), renderComponent($$result2, "FeaturedPosts", $$FeaturedPosts, { "category": "auto" }), renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "8421032275", "format": "horizontal" }), renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs }), renderComponent($$result2, "NewsletterCallout", $$NewsletterCallout, {}), unescapeHTML(JSON.stringify(pageFAQSchema))) })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/auto-insurance/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/auto-insurance/index.astro";
const $$url = "/auto-insurance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
