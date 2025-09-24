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
  const posts = (await getCollection("posts")).filter((post) => post.data.category === "business");
  const featuredPosts = posts.slice(0, 3);
  const title = "Business Insurance Guide - Protect Your Business | Sezarr";
  const description = "Complete business insurance guide. Learn about general liability, property insurance, workers' comp, and professional liability for small businesses and enterprises.";
  const keywords = "business insurance, commercial insurance, general liability, professional liability, workers compensation, business property insurance";
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Business Insurance", href: "/business-insurance/" }
  ];
  const faqs = [
    {
      question: "What types of business insurance do I need?",
      answer: "Most businesses need general liability insurance as a foundation. Depending on your business, you may also need professional liability, property insurance, workers' compensation, and cyber liability insurance."
    },
    {
      question: "How much does business insurance cost?",
      answer: "Costs vary widely based on industry, business size, and coverage needs. Small businesses typically pay $500-$3,000 annually for general liability, while comprehensive coverage packages can range from $1,500-$10,000+."
    },
    {
      question: "Is business insurance required by law?",
      answer: "Requirements vary by state and business type. Workers' compensation is required in most states if you have employees. Professional liability may be required for certain licensed professions."
    },
    {
      question: "Can I get business insurance if I work from home?",
      answer: "Yes, home-based businesses can get business insurance. Your homeowner's policy typically doesn't cover business activities, so separate business coverage is important."
    }
  ];
  const categories = [
    {
      title: "General Liability",
      description: "Protection against third-party injury and property damage claims",
      href: "/business-insurance/general-liability/",
      icon: "\u{1F6E1}\uFE0F"
    },
    {
      title: "Professional Liability",
      description: "Errors & omissions coverage for service-based businesses",
      href: "/business-insurance/professional-liability/",
      icon: "\u2696\uFE0F"
    },
    {
      title: "Property Insurance",
      description: "Coverage for business buildings, equipment, and inventory",
      href: "/business-insurance/property/",
      icon: "\u{1F3E2}"
    },
    {
      title: "Workers' Compensation",
      description: "Medical and wage benefits for work-related employee injuries",
      href: "/business-insurance/workers-comp/",
      icon: "\u{1F3E5}"
    },
    {
      title: "Cyber Liability",
      description: "Protection against data breaches and cyber attacks",
      href: "/business-insurance/cyber-liability/",
      icon: "\u{1F510}"
    },
    {
      title: "Business Calculator",
      description: "Calculate your business insurance needs and costs",
      href: "/tools/business-insurance-calculator/",
      icon: "\u{1F9EE}"
    }
  ];
  const businessTypes = [
    {
      title: "Small Business",
      description: "Insurance solutions for businesses with 1-50 employees",
      href: "/business-insurance/small-business/",
      icon: "\u{1F3EA}"
    },
    {
      title: "Contractors",
      description: "Specialized coverage for construction and trade contractors",
      href: "/business-insurance/contractors/",
      icon: "\u{1F528}"
    },
    {
      title: "Professional Services",
      description: "Coverage for consultants, lawyers, accountants, and other professionals",
      href: "/business-insurance/professional-services/",
      icon: "\u{1F4BC}"
    },
    {
      title: "Restaurants",
      description: "Comprehensive coverage for food service businesses",
      href: "/business-insurance/restaurants/",
      icon: "\u{1F37D}\uFE0F"
    }
  ];
  const siteUrl = SITE.URL;
  const currentUrl = `${siteUrl}/business-insurance/`;
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "ogImage": "/images/business-insurance-hero.jpg", "schema": schema }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Hero Section --> <section class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"> <div class="space-y-6"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
Business Insurance<br> <span class="text-blue-600 dark:text-blue-400">Protect Your Success</span> </h1> <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
From startups to established enterprises, protect your business with comprehensive insurance coverage tailored to your industry and risks.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/tools/business-insurance-calculator/" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
Calculate Your Coverage
</a> <a href="/business-insurance/guide/" class="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-lg font-semibold transition-colors text-center">
Read Complete Guide
</a> </div> </div> <div class="relative"> ${renderComponent($$result2, "ResponsivePicture", $$ResponsivePicture, { "src": "/images/business-insurance-hero.jpg", "alt": "Business professionals with insurance protection", "width": 600, "height": 400, "class": "w-full h-auto rounded-lg shadow-lg", "priority": true })} </div> </div> </div> </section> <!-- Key Statistics --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Why Business Insurance Matters
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Every business faces unique risks. Proper insurance coverage protects your investment and ensures business continuity.
</p> </div> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg"> <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Business Lawsuits</div> <div class="text-sm text-gray-600 dark:text-gray-300">
Percentage of small businesses that face lawsuits annually
</div> </div> <div class="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg"> <div class="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">75%</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Inadequate Coverage</div> <div class="text-sm text-gray-600 dark:text-gray-300">
Small businesses are underinsured for their actual risks
</div> </div> <div class="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg"> <div class="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$15K</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Average Claim</div> <div class="text-sm text-gray-600 dark:text-gray-300">
Typical general liability claim amount for small businesses
</div> </div> </div> </div> </section> <!-- Coverage Types --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Essential Business Insurance Types
</h2> <p class="text-lg text-gray-600 dark:text-gray-300">
Explore the different types of coverage every business should consider.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${categories.map((category) => renderTemplate`<a${addAttribute(category.href, "href")} class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 group"> <div class="text-3xl mb-4">${category.icon}</div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> ${category.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm"> ${category.description} </p> </a>`)} </div> </div> </section> <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "middle-content" })} <!-- Business Types --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Insurance by Business Type
</h2> <p class="text-lg text-gray-600 dark:text-gray-300">
Find coverage solutions tailored to your specific industry and business model.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${businessTypes.map((businessType) => renderTemplate`<a${addAttribute(businessType.href, "href")} class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 dark:border-gray-600 group hover:scale-105"> <div class="text-4xl mb-4 text-center">${businessType.icon}</div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"> ${businessType.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm text-center"> ${businessType.description} </p> </a>`)} </div> </div> </section> <!-- Featured Posts --> ${featuredPosts.length > 0 && renderTemplate`<section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Latest Business Insurance Articles
</h2> ${renderComponent($$result2, "FeaturedPosts", $$FeaturedPosts, { "posts": featuredPosts })} </div> </section>`} <!-- FAQ Section --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Frequently Asked Questions
</h2> ${renderComponent($$result2, "FAQ", $$FAQ, { "items": faqs })} </div> </section> <!-- Newsletter Callout --> ${renderComponent($$result2, "NewsletterCallout", $$NewsletterCallout, {})} <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "bottom-content" })} </main> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/business-insurance/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/business-insurance/index.astro";
const $$url = "/business-insurance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
