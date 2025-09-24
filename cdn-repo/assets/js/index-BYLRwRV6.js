/* empty css                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import { S as SITE, $ as $$BaseLayout } from './BaseLayout-BQKj_NaX.js';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = SITE.URL;
  const url = `${siteUrl}/tools/`;
  const tools = [
    {
      title: "Auto Insurance Needs Calculator",
      description: "Get personalized coverage recommendations based on your vehicle value, income, and assets. Avoid being underinsured or overpaying.",
      href: "/tools/auto-insurance-calculator/",
      category: "Auto Insurance",
      difficulty: "Easy",
      time: "5 minutes",
      icon: "\u{1F697}"
    },
    {
      title: "Life Insurance Calculator",
      description: "Calculate how much life insurance coverage you need based on your family's financial needs and goals.",
      href: "/tools/life-insurance-calculator/",
      category: "Life Insurance",
      difficulty: "Easy",
      time: "10 minutes",
      icon: "\u{1F6E1}\uFE0F"
    },
    {
      title: "Claims Probability Calculator",
      description: "Estimate your likelihood of filing an insurance claim based on your risk factors and get personalized recommendations.",
      href: "/tools/claims-probability-calculator/",
      category: "Risk Assessment",
      difficulty: "Easy",
      time: "5 minutes",
      icon: "\u{1F4CA}"
    },
    {
      title: "Home Insurance Replacement Cost Calculator",
      description: "Determine the replacement cost of your home and optimal coverage limits for homeowners insurance.",
      href: "#",
      category: "Homeowners Insurance",
      difficulty: "Medium",
      time: "15 minutes",
      icon: "\u{1F3E0}",
      status: "Coming Soon"
    },
    {
      title: "Health Insurance Out-of-Pocket Estimator",
      description: "Compare health plans by estimating your total out-of-pocket costs including premiums, deductibles, and copays.",
      href: "#",
      category: "Health Insurance",
      difficulty: "Medium",
      time: "15 minutes",
      icon: "\u2764\uFE0F",
      status: "Coming Soon"
    },
    {
      title: "Insurance Premium Estimator",
      description: "Get rough estimates for insurance premiums across all types based on your location and risk factors.",
      href: "#",
      category: "General",
      difficulty: "Easy",
      time: "5 minutes",
      icon: "\u{1F4B0}",
      status: "Coming Soon"
    },
    {
      title: "Claims Probability Calculator",
      description: "Understand your likelihood of filing claims based on demographics, location, and historical data.",
      href: "#",
      category: "General",
      difficulty: "Advanced",
      time: "10 minutes",
      icon: "\u{1F4CA}",
      status: "Coming Soon"
    }
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insurance Calculators and Tools",
    "description": "Free insurance calculators and tools to help you determine coverage needs, compare options, and make informed decisions.",
    "url": url,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": tools.filter((t) => !t.status).map((tool, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": tool.title,
        "description": tool.description,
        "url": `${siteUrl}${tool.href}`,
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Any"
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Free Insurance Calculators & Tools - Coverage Calculators", "description": "Free insurance calculators and tools. Calculate auto, life, home, and health insurance needs. Get personalized coverage recommendations.", "url": url, "type": "website", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-6xl px-4 py-10"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
Insurance Calculators & Tools
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Free, expert-designed calculators to help you determine the right insurance coverage for your needs and budget.
</p> </div> <!-- Featured Tool --> <div class="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8"> <div class="text-center"> <div class="text-4xl mb-4">🚗</div> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">Auto Insurance Needs Calculator</h2> <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
Our most popular tool! Get personalized coverage recommendations based on your vehicle value, income, and assets. Takes just 5 minutes.
</p> <a href="/tools/auto-insurance-calculator/" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
Try the Calculator
</a> </div> </div> <!-- All Tools Grid --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${tools.map((tool) => renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"> <div class="flex items-start justify-between mb-4"> <div class="text-2xl">${tool.icon}</div> ${tool.status && renderTemplate`<span class="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"> ${tool.status} </span>`} </div> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2"> ${tool.title} </h3> <p class="text-gray-600 dark:text-gray-300 text-sm mb-4"> ${tool.description} </p> <div class="flex items-center justify-between text-xs text-gray-500 mb-4"> <span class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"> ${tool.category} </span> <span>${tool.time}</span> <span${addAttribute(`px-2 py-1 rounded ${tool.difficulty === "Easy" ? "bg-green-100 text-green-800" : tool.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`, "class")}> ${tool.difficulty} </span> </div> ${tool.status ? renderTemplate`<button class="w-full py-2 px-4 bg-gray-100 text-gray-500 rounded-lg cursor-not-allowed" disabled> ${tool.status} </button>` : renderTemplate`<a${addAttribute(tool.href, "href")} class="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
Use Calculator
</a>`} </div>`)} </div> <!-- Why Use Our Calculators --> <div class="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8"> <h2 class="text-2xl font-bold text-center mb-8">Why Use Our Insurance Calculators?</h2> <div class="grid md:grid-cols-3 gap-8"> <div class="text-center"> <div class="text-3xl mb-4">🎯</div> <h3 class="font-semibold mb-2">Personalized Results</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Get recommendations tailored to your specific financial situation, not one-size-fits-all advice.
</p> </div> <div class="text-center"> <div class="text-3xl mb-4">🧮</div> <h3 class="font-semibold mb-2">Expert-Designed</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Created by licensed insurance professionals using industry best practices and current data.
</p> </div> <div class="text-center"> <div class="text-3xl mb-4">🔒</div> <h3 class="font-semibold mb-2">Privacy Protected</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Your information stays on your device. We don't collect or store your personal financial data.
</p> </div> </div> </div> <!-- Newsletter CTA --> <div class="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8"> <h3 class="text-xl font-bold mb-3">Get Notified About New Tools</h3> <p class="text-gray-600 dark:text-gray-300 mb-6">
Be the first to know when we launch new calculators and insurance tools.
</p> <a href="mailto:subscribe@example.com?subject=Subscribe%20to%20Tool%20Updates&body=Please%20notify%20me%20when%20new%20insurance%20calculators%20are%20available." class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
Subscribe for Updates
</a> </div> </section> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/tools/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/tools/index.astro";
const $$url = "/tools";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
