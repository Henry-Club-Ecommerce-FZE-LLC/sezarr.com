import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import { S as SITE, $ as $$BaseLayout } from './BaseLayout-BzVaJQ1A.js';
import { $ as $$AdSenseBlock } from './AdSenseBlock-D8Dnm8LT.js';
import { $ as $$FeaturedPosts } from './FeaturedPosts-BFc-QLMB.js';
import { $ as $$ResponsivePicture } from './ResponsivePicture-Cs5E3XXM.js';
import { $ as $$Breadcrumbs } from './Breadcrumbs-CZaPASxT.js';
import { $ as $$FAQ } from './FAQ-B5BWWNUb.js';
import { $ as $$NewsletterCallout } from './NewsletterCallout-nxq2pHPH.js';
import { g as getCollection } from './_astro_content-uyHM1YMY.js';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).filter((post) => post.data.category === "disability");
  const featuredPosts = posts.slice(0, 3);
  const title = "Disability Insurance Guide - Protect Your Income | Sezarr";
  const description = "Complete disability insurance guide. Learn about short-term vs long-term coverage, costs, benefits, and how to choose the best policy to protect your income.";
  const keywords = "disability insurance, income protection, short term disability, long term disability, disability benefits, disability insurance cost";
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Disability Insurance", href: "/disability-insurance/" }
  ];
  const faqs = [
    {
      question: "What is disability insurance and why do I need it?",
      answer: "Disability insurance replaces a portion of your income if you become unable to work due to illness or injury. It's crucial because Social Security disability benefits are limited and difficult to qualify for."
    },
    {
      question: "What's the difference between short-term and long-term disability insurance?",
      answer: "Short-term disability covers you for 3-12 months and typically replaces 60-70% of income. Long-term disability can cover you until retirement age and replaces 40-60% of income after a longer waiting period."
    },
    {
      question: "How much does disability insurance cost?",
      answer: "Individual disability insurance typically costs 1-3% of your annual income. Group coverage through employers is often cheaper but may provide less comprehensive coverage."
    },
    {
      question: "Can I get disability insurance if I have pre-existing conditions?",
      answer: "It depends on the condition and insurer. Some conditions may be excluded, result in higher premiums, or require medical underwriting. It's best to apply while healthy."
    }
  ];
  const categories = [
    {
      title: "Short-Term Disability",
      description: "Coverage for temporary disabilities lasting weeks to months",
      href: "/disability-insurance/short-term/",
      icon: "\u23F1\uFE0F"
    },
    {
      title: "Long-Term Disability",
      description: "Long-lasting income protection until retirement",
      href: "/disability-insurance/long-term/",
      icon: "\u{1F6E1}\uFE0F"
    },
    {
      title: "Group vs Individual",
      description: "Compare employer vs personal disability coverage",
      href: "/disability-insurance/group-vs-individual/",
      icon: "\u{1F465}"
    },
    {
      title: "Disability Calculator",
      description: "Calculate your disability insurance needs",
      href: "/tools/disability-insurance-calculator/",
      icon: "\u{1F9EE}"
    }
  ];
  const siteUrl = SITE.URL;
  const currentUrl = `${siteUrl}/disability-insurance/`;
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "ogImage": "/images/disability-insurance-hero.jpg", "schema": schema }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Hero Section --> <section class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 py-12 md:py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"> <div class="space-y-6"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
Disability Insurance<br> <span class="text-emerald-600 dark:text-emerald-400">Protect Your Income</span> </h1> <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
Your income is your most valuable asset. Learn how disability insurance protects you and your family when you can't work due to illness or injury.
</p> <div class="flex flex-col sm:flex-row gap-4"> <a href="/tools/disability-insurance-calculator/" class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
Calculate Your Needs
</a> <a href="/disability-insurance/guide/" class="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-3 rounded-lg font-semibold transition-colors text-center">
Read Complete Guide
</a> </div> </div> <div class="relative"> ${renderComponent($$result2, "ResponsivePicture", $$ResponsivePicture, { "src": "/images/disability-insurance-hero.jpg", "alt": "Person with disability insurance protection", "width": 600, "height": 400, "class": "w-full h-auto rounded-lg shadow-lg", "priority": true })} </div> </div> </div> </section> <!-- Key Statistics --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Why Disability Insurance Matters
</h2> <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Most people underestimate their risk of disability and the financial impact it would have on their lives.
</p> </div> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"> <div class="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">25%</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Chance of Disability</div> <div class="text-sm text-gray-600 dark:text-gray-300">
A 20-year-old has a 25% chance of becoming disabled before retirement
</div> </div> <div class="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg"> <div class="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">60%</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Income Replacement</div> <div class="text-sm text-gray-600 dark:text-gray-300">
Typical disability insurance replaces 60% of your pre-disability income
</div> </div> <div class="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg"> <div class="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$1,500</div> <div class="text-gray-900 dark:text-white font-semibold mb-2">Average Cost</div> <div class="text-sm text-gray-600 dark:text-gray-300">
Annual premium for $50K income earner with comprehensive coverage
</div> </div> </div> </div> </section> <!-- Categories Grid --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
Explore Disability Insurance Topics
</h2> <p class="text-lg text-gray-600 dark:text-gray-300">
Learn about different types of disability coverage and find the right protection for you.
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ${categories.map((category) => renderTemplate`<a${addAttribute(category.href, "href")} class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 group"> <div class="text-3xl mb-4">${category.icon}</div> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors"> ${category.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm"> ${category.description} </p> </a>`)} </div> </div> </section> <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "middle-content" })} <!-- Featured Posts --> ${featuredPosts.length > 0 && renderTemplate`<section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Latest Disability Insurance Articles
</h2> ${renderComponent($$result2, "FeaturedPosts", $$FeaturedPosts, { "posts": featuredPosts })} </div> </section>`} <!-- FAQ Section --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Frequently Asked Questions
</h2> ${renderComponent($$result2, "FAQ", $$FAQ, { "items": faqs })} </div> </section> <!-- Newsletter Callout --> ${renderComponent($$result2, "NewsletterCallout", $$NewsletterCallout, {})} <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "bottom-content" })} </main> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/disability-insurance/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/disability-insurance/index.astro";
const $$url = "/disability-insurance";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
