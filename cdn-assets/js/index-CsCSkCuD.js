/* empty css                              */
import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout-BQKj_NaX.js';
import 'clsx';
import { $ as $$Breadcrumbs } from './Breadcrumbs-BzCmubR1.js';
import { $ as $$FAQ } from './FAQ-BP8WQF8o.js';
import { $ as $$AffiliateDisclosure } from './AffiliateDisclosure-DGrqgPQs.js';
import { $ as $$NewsletterCallout } from './NewsletterCallout-C1kA8kzK.js';

const $$Astro = createAstro("https://sezarr.com");
const $$DisabilityInsuranceCalculator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DisabilityInsuranceCalculator;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 ${className}`, "class")}> <div class="mb-6"> <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
Disability Insurance Calculator
</h3> <p class="text-gray-600 dark:text-gray-300">
Calculate how much disability insurance coverage you need to protect your income.
</p> </div> <form id="disability-calculator" class="space-y-6"> <!-- Current Income --> <div> <label for="annual-income" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Annual Income ($)
</label> <input type="number" id="annual-income" name="annual-income" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white" placeholder="75000" min="20000" max="500000" step="1000" required> </div> <!-- Age --> <div> <label for="age" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Current Age
</label> <input type="number" id="age" name="age" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white" placeholder="35" min="18" max="65" required> </div> <!-- Gender --> <div> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Gender
</label> <div class="flex gap-4"> <label class="flex items-center"> <input type="radio" name="gender" value="male" class="mr-2 text-emerald-600 focus:ring-emerald-500" required> <span class="text-gray-700 dark:text-gray-300">Male</span> </label> <label class="flex items-center"> <input type="radio" name="gender" value="female" class="mr-2 text-emerald-600 focus:ring-emerald-500"> <span class="text-gray-700 dark:text-gray-300">Female</span> </label> </div> </div> <!-- Occupation --> <div> <label for="occupation" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Occupation Class
</label> <select id="occupation" name="occupation" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white" required> <option value="">Select your occupation class</option> <option value="professional">Professional/Office Worker (Class 1-2)</option> <option value="skilled">Skilled Trades (Class 3-4)</option> <option value="physical">Physical Labor (Class 5-6)</option> </select> </div> <!-- Current Coverage --> <div> <label for="current-coverage" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Existing Disability Coverage ($ per month)
</label> <input type="number" id="current-coverage" name="current-coverage" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white" placeholder="0" min="0" max="20000" step="100"> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Include group coverage and Social Security disability estimates</p> </div> <!-- Monthly Expenses --> <div> <label for="monthly-expenses" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
Essential Monthly Expenses ($)
</label> <input type="number" id="monthly-expenses" name="monthly-expenses" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white" placeholder="4500" min="1000" max="20000" step="100" required> <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">Mortgage, utilities, food, transportation, insurance, etc.</p> </div> <!-- Calculate Button --> <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
Calculate My Disability Insurance Needs
</button> </form> <!-- Results Section --> <div id="results" class="hidden mt-8 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"> <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Disability Insurance Analysis</h4> <div class="grid md:grid-cols-2 gap-6"> <div class="space-y-4"> <div> <div class="text-sm text-gray-600 dark:text-gray-300">Recommended Coverage</div> <div id="recommended-coverage" class="text-2xl font-bold text-emerald-600 dark:text-emerald-400"></div> </div> <div> <div class="text-sm text-gray-600 dark:text-gray-300">Coverage Gap</div> <div id="coverage-gap" class="text-xl font-semibold text-red-600 dark:text-red-400"></div> </div> <div> <div class="text-sm text-gray-600 dark:text-gray-300">Estimated Annual Premium</div> <div id="estimated-premium" class="text-xl font-semibold text-gray-900 dark:text-white"></div> </div> </div> <div class="space-y-4"> <div> <div class="text-sm text-gray-600 dark:text-gray-300">Income Replacement Ratio</div> <div id="replacement-ratio" class="text-xl font-semibold text-gray-900 dark:text-white"></div> </div> <div> <div class="text-sm text-gray-600 dark:text-gray-300">Premium as % of Income</div> <div id="premium-percentage" class="text-xl font-semibold text-gray-900 dark:text-white"></div> </div> </div> </div> <div id="recommendations" class="mt-6 space-y-3"> <h5 class="font-semibold text-gray-900 dark:text-white">Recommendations:</h5> <ul id="recommendation-list" class="space-y-2 text-sm text-gray-700 dark:text-gray-300"> <!-- Recommendations will be populated by JavaScript --> </ul> </div> <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-md"> <p class="text-sm text-yellow-800 dark:text-yellow-200"> <strong>Disclaimer:</strong> This calculator provides estimates for educational purposes only. 
        Actual coverage needs and premiums may vary. Consult with a licensed insurance professional for personalized advice.
</p> </div> </div> </div> `;
}, "C:/Mirza/Websites/Insurance/src/components/calculators/DisabilityInsuranceCalculator.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Disability Insurance Calculator - Calculate Your Coverage Needs";
  const description = "Free disability insurance calculator to determine how much coverage you need. Calculate premiums, coverage gaps, and get personalized recommendations for income protection.";
  const keywords = "disability insurance calculator, coverage calculator, disability benefits, income protection, premium calculator";
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/" },
    { label: "Disability Insurance Calculator", href: "/tools/disability-insurance-calculator/" }
  ];
  const faqs = [
    {
      question: "How much of my income should disability insurance replace?",
      answer: "Most experts recommend replacing 60-70% of your pre-tax income. This amount, combined with the fact that benefits are often tax-free, should cover most of your essential expenses during a disability."
    },
    {
      question: "What factors affect my disability insurance premiums?",
      answer: "Key factors include your age, gender, occupation, health status, benefit amount, waiting period, and benefit period. Younger, healthier individuals in low-risk occupations typically pay less."
    },
    {
      question: "Should I get short-term or long-term disability insurance?",
      answer: "Ideally, you should have both. Short-term covers immediate needs (first 3-12 months), while long-term provides protection for extended disabilities. Many people start with long-term and add short-term later."
    },
    {
      question: "Can I get disability insurance if I have health conditions?",
      answer: "It depends on the condition and severity. Some conditions may be excluded, result in higher premiums, or prevent coverage entirely. It's always best to apply while you're healthy."
    },
    {
      question: "How accurate is this disability insurance calculator?",
      answer: "This calculator provides reasonable estimates based on industry averages and standard formulas. However, actual premiums and coverage needs vary by insurer and individual circumstances. Always get professional quotes for accurate pricing."
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "ogImage": "/images/disability-calculator-tool.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Hero Section --> <section class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 py-12"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
Disability Insurance Calculator
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
Calculate how much disability insurance coverage you need to protect your income and lifestyle. 
          Get personalized recommendations and premium estimates in minutes.
</p> <div class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md inline-block"> <div class="text-sm text-gray-600 dark:text-gray-300">Quick Fact:</div> <div class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">1 in 4</div> <div class="text-sm text-gray-600 dark:text-gray-300">people will become disabled during their career</div> </div> </div> </section> <!-- Calculator Section --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "DisabilityInsuranceCalculator", $$DisabilityInsuranceCalculator, {})} </div> </section> <!-- Understanding the Results --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Understanding Your Results
</h2> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Coverage Amount</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
The recommended coverage is calculated based on 60-70% of your income, which is the standard 
              replacement ratio that balances adequate protection with affordable premiums.
</p> <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2"> <li>• Most insurers limit total benefits to 60-80% of income</li> <li>• Benefits are often tax-free if you pay premiums</li> <li>• Consider your essential expenses when choosing coverage</li> </ul> </div> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Premium Estimates</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Premium estimates are based on industry averages and may vary significantly between insurers. 
              Actual rates depend on detailed underwriting and policy features.
</p> <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2"> <li>• Premiums typically range from 1-3% of income</li> <li>• Longer waiting periods reduce costs</li> <li>• Group coverage is usually cheaper than individual</li> </ul> </div> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Coverage Gap</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
The coverage gap shows how much additional protection you need beyond your current coverage 
              (including group benefits and Social Security estimates).
</p> <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2"> <li>• Social Security disability is limited and hard to qualify for</li> <li>• Group coverage may not be sufficient for higher earners</li> <li>• Individual policies fill gaps in employer coverage</li> </ul> </div> <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Next Steps</h3> <p class="text-gray-600 dark:text-gray-300 mb-4">
Use these results as a starting point for discussions with insurance professionals. 
              Get quotes from multiple insurers to find the best coverage and rates.
</p> <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2"> <li>• Compare quotes from 3-5 different insurers</li> <li>• Review policy definitions and exclusions</li> <li>• Consider working with an independent agent</li> </ul> </div> </div> </div> </section> <!-- Important Considerations --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Important Considerations
</h2> <div class="space-y-6"> <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"> <h3 class="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
Own-Occupation vs Any-Occupation
</h3> <p class="text-blue-800 dark:text-blue-200">
Own-occupation policies pay if you can't perform your specific job, even if you could work elsewhere. 
              Any-occupation policies only pay if you can't work in any suitable job. Own-occupation is more expensive but provides better protection.
</p> </div> <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg"> <h3 class="text-lg font-semibold text-green-900 dark:text-green-300 mb-3">
Benefit Period Options
</h3> <p class="text-green-800 dark:text-green-200">
You can choose benefit periods from 2 years to age 65-67. Longer benefit periods cost more but provide 
              protection against long-term disabilities. Most disabilities are short-term, but the financial impact of 
              long-term disabilities is much greater.
</p> </div> <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg"> <h3 class="text-lg font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
Waiting Period (Elimination Period)
</h3> <p class="text-yellow-800 dark:text-yellow-200">
The waiting period is how long you must be disabled before benefits begin. Common options are 30, 60, 90, 
              180, or 365 days. Longer waiting periods significantly reduce premiums but require you to have enough 
              savings to bridge the gap.
</p> </div> </div> </div> </section> <!-- Affiliate Disclosure --> ${renderComponent($$result2, "AffiliateDisclosure", $$AffiliateDisclosure, {})} <!-- FAQ Section --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Frequently Asked Questions
</h2> ${renderComponent($$result2, "FAQ", $$FAQ, { "items": faqs })} </div> </section> <!-- Newsletter Callout --> ${renderComponent($$result2, "NewsletterCallout", $$NewsletterCallout, {})} </main> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/tools/disability-insurance-calculator/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/tools/disability-insurance-calculator/index.astro";
const $$url = "/tools/disability-insurance-calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
