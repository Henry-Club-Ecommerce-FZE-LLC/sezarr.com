import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import { $ as $$BaseLayout, S as SITE } from './BaseLayout-BzVaJQ1A.js';
import 'clsx';
/* empty css                        */

const $$LifeInsuranceCalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-900 rounded-xl border shadow-lg p-6 max-w-4xl mx-auto" data-astro-cid-5yoxtvp5> <div class="text-center mb-8" data-astro-cid-5yoxtvp5> <h2 class="text-2xl font-bold text-gray-900 dark:text-white" data-astro-cid-5yoxtvp5>Life Insurance Needs Calculator</h2> <p class="text-gray-600 dark:text-gray-300 mt-2" data-astro-cid-5yoxtvp5>Calculate how much life insurance coverage your family needs</p> </div> <form id="life-calc-form" class="space-y-6" data-astro-cid-5yoxtvp5> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-5yoxtvp5> <!-- Financial Information --> <div class="space-y-4" data-astro-cid-5yoxtvp5> <h3 class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-5yoxtvp5>Current Financial Situation</h3> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>Annual Income</label> <input type="number" id="annual-income" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="75000" min="0" max="1000000" data-astro-cid-5yoxtvp5> </div> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>Current Savings & Investments</label> <input type="number" id="current-savings" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="50000" min="0" max="10000000" data-astro-cid-5yoxtvp5> </div> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>Outstanding Debts (Mortgage, Credit Cards, etc.)</label> <input type="number" id="total-debts" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="250000" min="0" max="10000000" data-astro-cid-5yoxtvp5> </div> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>Monthly Living Expenses</label> <input type="number" id="monthly-expenses" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="4500" min="0" max="50000" data-astro-cid-5yoxtvp5> </div> </div> <!-- Family Information --> <div class="space-y-4" data-astro-cid-5yoxtvp5> <h3 class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-5yoxtvp5>Family Details</h3> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>Your Age</label> <select id="your-age" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-5yoxtvp5> <option value="25" data-astro-cid-5yoxtvp5>20-29</option> <option value="35" selected data-astro-cid-5yoxtvp5>30-39</option> <option value="45" data-astro-cid-5yoxtvp5>40-49</option> <option value="55" data-astro-cid-5yoxtvp5>50-59</option> <option value="65" data-astro-cid-5yoxtvp5>60+</option> </select> </div> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>Spouse's Annual Income</label> <input type="number" id="spouse-income" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="45000" min="0" max="1000000" data-astro-cid-5yoxtvp5> </div> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>Number of Children</label> <select id="num-children" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-5yoxtvp5> <option value="0" data-astro-cid-5yoxtvp5>0</option> <option value="1" data-astro-cid-5yoxtvp5>1</option> <option value="2" selected data-astro-cid-5yoxtvp5>2</option> <option value="3" data-astro-cid-5yoxtvp5>3</option> <option value="4" data-astro-cid-5yoxtvp5>4+</option> </select> </div> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>Years Until Retirement</label> <select id="years-to-retirement" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-5yoxtvp5> <option value="10" data-astro-cid-5yoxtvp5>10 years</option> <option value="15" data-astro-cid-5yoxtvp5>15 years</option> <option value="20" data-astro-cid-5yoxtvp5>20 years</option> <option value="25" selected data-astro-cid-5yoxtvp5>25 years</option> <option value="30" data-astro-cid-5yoxtvp5>30 years</option> <option value="35" data-astro-cid-5yoxtvp5>35+ years</option> </select> </div> <div data-astro-cid-5yoxtvp5> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-5yoxtvp5>College Planning</label> <select id="college-planning" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-5yoxtvp5> <option value="none" data-astro-cid-5yoxtvp5>No college funding needed</option> <option value="partial" data-astro-cid-5yoxtvp5>Partial college funding</option> <option value="full" selected data-astro-cid-5yoxtvp5>Full college funding</option> <option value="premium" data-astro-cid-5yoxtvp5>Premium/Private college funding</option> </select> </div> </div> </div> <div class="text-center" data-astro-cid-5yoxtvp5> <button type="button" id="calculate-life-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors" data-astro-cid-5yoxtvp5>
Calculate Life Insurance Needs
</button> </div> </form> <!-- Results Section --> <div id="life-results" class="hidden mt-8 space-y-6" data-astro-cid-5yoxtvp5> <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6" data-astro-cid-5yoxtvp5> <h3 class="text-xl font-bold text-green-900 dark:text-green-100 mb-4" data-astro-cid-5yoxtvp5>Your Life Insurance Recommendation</h3> <div class="text-center mb-6" data-astro-cid-5yoxtvp5> <div class="text-4xl font-bold text-green-700 dark:text-green-300" id="total-coverage" data-astro-cid-5yoxtvp5>$0</div> <div class="text-sm text-green-600 dark:text-green-400" data-astro-cid-5yoxtvp5>Recommended Total Coverage</div> </div> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-5yoxtvp5> <div class="space-y-3" data-astro-cid-5yoxtvp5> <h4 class="font-semibold text-green-800 dark:text-green-200" data-astro-cid-5yoxtvp5>Coverage Breakdown</h4> <div class="flex justify-between py-2 border-b border-green-200" data-astro-cid-5yoxtvp5> <span class="text-sm" data-astro-cid-5yoxtvp5>Income Replacement</span> <span id="income-replacement" class="font-medium text-green-700" data-astro-cid-5yoxtvp5></span> </div> <div class="flex justify-between py-2 border-b border-green-200" data-astro-cid-5yoxtvp5> <span class="text-sm" data-astro-cid-5yoxtvp5>Debt Coverage</span> <span id="debt-coverage" class="font-medium text-green-700" data-astro-cid-5yoxtvp5></span> </div> <div class="flex justify-between py-2 border-b border-green-200" data-astro-cid-5yoxtvp5> <span class="text-sm" data-astro-cid-5yoxtvp5>Education Funding</span> <span id="education-funding" class="font-medium text-green-700" data-astro-cid-5yoxtvp5></span> </div> <div class="flex justify-between py-2 border-b border-green-200" data-astro-cid-5yoxtvp5> <span class="text-sm" data-astro-cid-5yoxtvp5>Final Expenses</span> <span id="final-expenses" class="font-medium text-green-700" data-astro-cid-5yoxtvp5></span> </div> </div> <div class="space-y-3" data-astro-cid-5yoxtvp5> <h4 class="font-semibold text-green-800 dark:text-green-200" data-astro-cid-5yoxtvp5>Policy Recommendations</h4> <div class="text-sm space-y-2" data-astro-cid-5yoxtvp5> <div class="bg-white dark:bg-green-900/40 p-3 rounded" data-astro-cid-5yoxtvp5> <div class="font-medium" data-astro-cid-5yoxtvp5>Term Life Insurance</div> <div class="text-xs text-gray-600 dark:text-gray-300" id="term-recommendation" data-astro-cid-5yoxtvp5></div> </div> <div class="bg-white dark:bg-green-900/40 p-3 rounded" data-astro-cid-5yoxtvp5> <div class="font-medium" data-astro-cid-5yoxtvp5>Estimated Monthly Premium</div> <div class="text-xs text-gray-600 dark:text-gray-300" id="premium-estimate" data-astro-cid-5yoxtvp5></div> </div> </div> </div> </div> <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg" data-astro-cid-5yoxtvp5> <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2" data-astro-cid-5yoxtvp5>💡 Key Considerations</h4> <div id="life-explanation" class="text-sm text-blue-700 dark:text-blue-300" data-astro-cid-5yoxtvp5></div> </div> </div> <!-- Call to Action --> <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 text-center" data-astro-cid-5yoxtvp5> <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3" data-astro-cid-5yoxtvp5>Ready to Get Life Insurance Quotes?</h4> <p class="text-gray-600 dark:text-gray-300 mb-4" data-astro-cid-5yoxtvp5>Compare rates from top life insurance companies with your recommended coverage amount.</p> <a href="/life-insurance/" class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors mr-4" data-astro-cid-5yoxtvp5>
Compare Life Insurance
</a> <button id="share-life-results" class="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors" data-astro-cid-5yoxtvp5>
Share Results
</button> </div> </div> </div>  `;
}, "C:/Mirza/Websites/Insurance/src/components/calculators/LifeInsuranceCalculator.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = SITE.URL;
  const url = `${siteUrl}/tools/life-insurance-calculator/`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Life Insurance Needs Calculator",
      "description": "Free calculator to determine how much life insurance coverage you need based on income, debts, family size, and future expenses.",
      "url": url,
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Any",
      "permissions": "none",
      "author": {
        "@type": "Organization",
        "name": "Insurance Insights USA"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Calculate Life Insurance Coverage Needs",
      "description": "Step-by-step process using the DIME method to determine optimal life insurance coverage",
      "totalTime": "PT10M",
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Annual income and family financial information"
        },
        {
          "@type": "HowToSupply",
          "name": "Outstanding debts and future expenses"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Calculate Income Replacement",
          "text": "Determine how many years of income your family would need if you passed away."
        },
        {
          "@type": "HowToStep",
          "name": "Add Debt Coverage",
          "text": "Include mortgage, credit cards, and other debts that should be paid off."
        },
        {
          "@type": "HowToStep",
          "name": "Plan for Education Costs",
          "text": "Calculate college funding needs for your children based on your goals."
        },
        {
          "@type": "HowToStep",
          "name": "Include Final Expenses",
          "text": "Add funeral costs and final expenses, typically $10,000-$20,000."
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Life Insurance Needs Calculator - How Much Coverage Do You Need?", "description": "Calculate your life insurance needs with our free DIME method calculator. Determine optimal coverage based on income, debts, children's education, and final expenses.", "url": url, "type": "website", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-6xl px-4 py-10"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
Life Insurance Needs Calculator
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Calculate how much life insurance coverage your family needs using the proven DIME method. 
        Get personalized recommendations based on your income, debts, and family goals.
</p> </div> ${renderComponent($$result2, "LifeInsuranceCalculator", $$LifeInsuranceCalculator, {})} <!-- Educational Content --> <div class="mt-16 prose prose-lg dark:prose-invert mx-auto"> <h2>Understanding Life Insurance Needs</h2> <h3>The DIME Method</h3> <p>Our calculator uses the DIME method, a comprehensive approach to determining life insurance needs:</p> <ul> <li><strong>D</strong>ebts and final expenses</li> <li><strong>I</strong>ncome replacement</li> <li><strong>M</strong>ortgage and major expenses</li> <li><strong>E</strong>ducation funding for children</li> </ul> <h3>Types of Life Insurance</h3> <div class="grid md:grid-cols-2 gap-6 not-prose"> <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"> <h4 class="text-lg font-semibold mb-3">Term Life Insurance</h4> <ul class="text-sm space-y-2"> <li>✓ Most affordable option</li> <li>✓ Coverage for specific period (10, 20, 30 years)</li> <li>✓ Ideal for family protection during working years</li> <li>✓ No cash value component</li> </ul> </div> <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg"> <h4 class="text-lg font-semibold mb-3">Permanent Life Insurance</h4> <ul class="text-sm space-y-2"> <li>✓ Lifetime coverage</li> <li>✓ Builds cash value</li> <li>✓ Higher premiums than term</li> <li>✓ Tax-advantaged savings component</li> </ul> </div> </div> <h3>Factors That Affect Your Needs</h3> <ul> <li><strong>Age and Health:</strong> Younger, healthier individuals pay lower premiums</li> <li><strong>Dependents:</strong> More dependents typically mean more coverage needed</li> <li><strong>Debt Level:</strong> High debt requires more coverage to protect family</li> <li><strong>Spouse's Income:</strong> Higher spouse income may reduce coverage needs</li> <li><strong>Existing Savings:</strong> More savings reduces required coverage</li> </ul> <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg"> <h4 class="text-lg font-semibold mb-3">💡 Expert Tips</h4> <ul class="space-y-2"> <li>Review your coverage every 3-5 years or after major life events</li> <li>Consider inflation when calculating future expenses</li> <li>Don't forget to account for taxes on investment returns</li> <li>Term life insurance is usually the best choice for young families</li> <li>Consider a mix of term and permanent insurance for comprehensive planning</li> </ul> </div> </div> <!-- Related Tools --> <div class="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8"> <h2 class="text-2xl font-bold text-center mb-8">Related Insurance Tools</h2> <div class="grid md:grid-cols-3 gap-6"> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Auto Insurance Calculator</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Calculate optimal auto coverage needs</p> <a href="/tools/auto-insurance-calculator/" class="text-blue-600 hover:text-blue-700 text-sm font-medium">Use Calculator →</a> </div> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Home Insurance Calculator</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Calculate replacement cost and coverage needs</p> <span class="text-sm text-gray-500">Coming Soon</span> </div> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Retirement Planning</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Calculate retirement savings needs</p> <span class="text-sm text-gray-500">Coming Soon</span> </div> </div> </div> </section> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/tools/life-insurance-calculator/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/tools/life-insurance-calculator/index.astro";
const $$url = "/tools/life-insurance-calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
