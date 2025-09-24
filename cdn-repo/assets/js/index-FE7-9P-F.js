/* empty css                              */
import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout-BQKj_NaX.js';
import { $ as $$ResponsiveImage } from './ResponsiveImage-DIKUfFkG.js';
import { $ as $$AdSenseBlock } from './AdSenseBlock-Be-zcsjf.js';
import { $ as $$NewsletterCallout } from './NewsletterCallout-C1kA8kzK.js';
import { $ as $$FAQ } from './FAQ-BP8WQF8o.js';
import { $ as $$FeaturedPosts } from './FeaturedPosts-V3h4Abvq.js';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Health Insurance Guide 2025 - ACA Plans, Medicare & Coverage Options";
  const description = "Complete health insurance guide for 2025. Understand ACA marketplace plans, Medicare options, HMO vs PPO, deductibles & find the best coverage.";
  const healthInsuranceStats = [
    { label: "Average Annual Premium", value: "$7,739", description: "For individual coverage" },
    { label: "ACA Marketplace Plans", value: "11.4M", description: "Americans enrolled in 2024" },
    { label: "Medicare Beneficiaries", value: "66M+", description: "Total enrollment nationwide" },
    { label: "Preventive Care", value: "100%", description: "Covered by all ACA plans" }
  ];
  const coverageTypes = [
    {
      title: "ACA Marketplace Plans",
      description: "Comprehensive health plans through Healthcare.gov and state exchanges",
      features: ["Bronze, Silver, Gold, Platinum tiers", "Essential health benefits", "Preventive care coverage", "Pre-existing conditions covered", "Premium tax credits available"],
      priceRange: "$200-800/month"
    },
    {
      title: "Medicare Coverage",
      description: "Federal health insurance for seniors 65+ and disabled individuals",
      features: ["Medicare Part A (Hospital)", "Medicare Part B (Medical)", "Medicare Part C (Advantage)", "Medicare Part D (Prescription)", "Medigap supplemental plans"],
      priceRange: "$0-400/month"
    },
    {
      title: "Employer Health Plans",
      description: "Group health insurance provided through your workplace",
      features: ["Lower employee premiums", "Employer contribution", "Group purchasing power", "COBRA continuation rights", "Section 125 tax benefits"],
      priceRange: "$100-500/month"
    },
    {
      title: "Short-Term Health Plans",
      description: "Temporary coverage for gaps between major medical insurance",
      features: ["Quick approval process", "Lower monthly premiums", "Medical underwriting required", "Limited coverage duration", "Bridge coverage option"],
      priceRange: "$50-200/month"
    }
  ];
  const faqs = [
    {
      question: "What is the difference between HMO and PPO health plans?",
      answer: "HMO (Health Maintenance Organization) plans require you to choose a primary care physician and get referrals for specialists, but typically have lower costs. PPO (Preferred Provider Organization) plans offer more flexibility to see specialists directly and use out-of-network providers, but usually cost more."
    },
    {
      question: "How do health insurance deductibles work?",
      answer: "A deductible is the amount you pay out-of-pocket before your insurance begins covering costs. For example, with a $2,000 deductible, you pay the first $2,000 of covered medical expenses, then insurance kicks in. Preventive care is typically covered before meeting your deductible."
    },
    {
      question: "Can I get health insurance if I have pre-existing conditions?",
      answer: "Yes, under the Affordable Care Act (ACA), health insurance companies cannot deny coverage or charge higher premiums based on pre-existing medical conditions. This applies to all ACA-compliant plans sold through marketplaces and directly from insurers."
    },
    {
      question: "What are essential health benefits under the ACA?",
      answer: "The ACA requires all marketplace plans to cover 10 essential health benefits: ambulatory care, emergency services, hospitalization, maternity care, mental health/substance abuse treatment, prescription drugs, rehabilitative services, laboratory services, preventive care, and pediatric services."
    },
    {
      question: "How do I qualify for premium tax credits?",
      answer: "Premium tax credits are available for individuals and families with household incomes between 100% and 400% of the federal poverty level who purchase coverage through the Health Insurance Marketplace and don't have access to affordable employer coverage."
    },
    {
      question: "When can I enroll in health insurance?",
      answer: "You can enroll during Open Enrollment (November 1 - January 15 for most states) or during Special Enrollment Periods triggered by qualifying life events like marriage, birth of a child, loss of coverage, or moving to a new area."
    }
  ];
  return renderTemplate(_a || (_a = __template(["", ' <script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "WebPage",\n  "name": "Health Insurance Guide 2025 - ACA Plans, Medicare & Coverage Options",\n  "description": "Complete health insurance guide for 2025. Understand ACA marketplace plans, Medicare options, HMO vs PPO, deductibles & find the best coverage.",\n  "url": "https://sezarr.com/health-insurance/",\n  "mainEntity": {\n    "@type": "FAQPage",\n    "mainEntity": [\n      {\n        "@type": "Question",\n        "name": "What is the difference between HMO and PPO health plans?",\n        "acceptedAnswer": {\n          "@type": "Answer",\n          "text": "HMO (Health Maintenance Organization) plans require you to choose a primary care physician and get referrals for specialists, but typically have lower costs. PPO (Preferred Provider Organization) plans offer more flexibility to see specialists directly and use out-of-network providers, but usually cost more."\n        }\n      },\n      {\n        "@type": "Question", \n        "name": "How do health insurance deductibles work?",\n        "acceptedAnswer": {\n          "@type": "Answer",\n          "text": "A deductible is the amount you pay out-of-pocket before your insurance begins covering costs. For example, with a $2,000 deductible, you pay the first $2,000 of covered medical expenses, then insurance kicks in."\n        }\n      }\n    ]\n  },\n  "breadcrumb": {\n    "@type": "BreadcrumbList",\n    "itemListElement": [\n      {\n        "@type": "ListItem",\n        "position": 1,\n        "name": "Home",\n        "item": "https://sezarr.com/"\n      },\n      {\n        "@type": "ListItem", \n        "position": 2,\n        "name": "Health Insurance",\n        "item": "https://sezarr.com/health-insurance/"\n      }\n    ]\n  }\n}\n<\/script>'])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950 py-16 lg:py-24"> <div class="container mx-auto px-4"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <div> <div class="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
Health Insurance Guide 2025
</div> <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
Complete <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">Health Coverage</span> Protection
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
Navigate health insurance options with confidence. Understand ACA marketplace plans, Medicare coverage, HMO vs PPO differences, and find the best health insurance for your needs.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/tools/health-insurance-calculator/" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path> </svg>
Calculate Health Costs
</a> <a href="https://www.healthcare.gov" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg>
Visit Healthcare.gov
</a> </div> </div> <div class="relative"> ${renderComponent($$result2, "ResponsiveImage", $$ResponsiveImage, { "src": "/images/health-insurance-hero", "alt": "Health Insurance Coverage - Family protected by comprehensive health insurance", "width": 600, "height": 400, "class": "rounded-2xl shadow-2xl", "priority": true })} <div class="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"> <div class="flex items-center gap-4"> <div class="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center"> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"> <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <div class="font-bold text-gray-900 dark:text-white">ACA Compliant</div> <div class="text-sm text-gray-600 dark:text-gray-300">Essential benefits</div> </div> </div> </div> </div> </div> </div> </section>  <section class="py-16 bg-white dark:bg-gray-900"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
Health Insurance Market Overview
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
Key statistics about health insurance coverage and costs in America
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${healthInsuranceStats.map((stat) => renderTemplate`<div class="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"> <div class="text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2"> ${stat.value} </div> <div class="text-lg font-semibold text-gray-900 dark:text-white mb-1"> ${stat.label} </div> <div class="text-sm text-gray-600 dark:text-gray-300"> ${stat.description} </div> </div>`)} </div> </div> </section>  <section class="py-16 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
Types of Health Insurance Coverage
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
Explore different health insurance options and find the right coverage for your situation
</p> </div> <div class="grid md:grid-cols-2 gap-8"> ${coverageTypes.map((coverage) => renderTemplate`<div class="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"> <div class="flex items-start justify-between mb-6"> <h3 class="text-xl font-bold text-gray-900 dark:text-white"> ${coverage.title} </h3> <span class="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-medium"> ${coverage.priceRange} </span> </div> <p class="text-gray-600 dark:text-gray-300 mb-6"> ${coverage.description} </p> <ul class="space-y-2"> ${coverage.features.map((feature) => renderTemplate`<li class="flex items-center text-gray-700 dark:text-gray-300"> <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> ${feature} </li>`)} </ul> </div>`)} </div> </div> </section>  <section class="py-16 bg-white dark:bg-gray-900"> ${renderComponent($$result2, "FeaturedPosts", $$FeaturedPosts, { "category": "health" })} </section>  <section class="py-8"> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "8421032275", "format": "horizontal" })} </section>  <section class="py-16 bg-gray-50 dark:bg-gray-800"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
Health Insurance FAQ
</h2> <p class="text-lg text-gray-600 dark:text-gray-300">
Common questions about health insurance coverage and enrollment
</p> </div> ${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs })} </div> </div> </section>  ${renderComponent($$result2, "NewsletterCallout", $$NewsletterCallout, {})} ` }));
}, "C:/Mirza/Websites/Insurance/src/pages/health-insurance/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/health-insurance/index.astro";
const $$url = "/health-insurance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
