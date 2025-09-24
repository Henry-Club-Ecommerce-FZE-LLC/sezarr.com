import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import { $ as $$BaseLayout, S as SITE } from './BaseLayout-BzVaJQ1A.js';
import 'clsx';
/* empty css                        */

const $$AutoInsuranceCalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-900 rounded-xl border shadow-lg p-6 max-w-4xl mx-auto" data-astro-cid-lokkd7n7> <div class="text-center mb-8" data-astro-cid-lokkd7n7> <h2 class="text-2xl font-bold text-gray-900 dark:text-white" data-astro-cid-lokkd7n7>Auto Insurance Needs Calculator</h2> <p class="text-gray-600 dark:text-gray-300 mt-2" data-astro-cid-lokkd7n7>Get personalized coverage recommendations based on your situation</p> </div> <form id="auto-calc-form" class="space-y-6" data-astro-cid-lokkd7n7> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-lokkd7n7> <!-- Vehicle Information --> <div class="space-y-4" data-astro-cid-lokkd7n7> <h3 class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-lokkd7n7>Vehicle Information</h3> <div data-astro-cid-lokkd7n7> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-lokkd7n7>Vehicle Value</label> <input type="number" id="vehicle-value" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="25000" min="1000" max="200000" data-astro-cid-lokkd7n7> </div> <div data-astro-cid-lokkd7n7> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-lokkd7n7>Vehicle Age</label> <select id="vehicle-age" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-lokkd7n7> <option value="new" data-astro-cid-lokkd7n7>0-2 years (New)</option> <option value="recent" data-astro-cid-lokkd7n7>3-5 years</option> <option value="older" data-astro-cid-lokkd7n7>6-10 years</option> <option value="old" data-astro-cid-lokkd7n7>10+ years</option> </select> </div> <div data-astro-cid-lokkd7n7> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-lokkd7n7>Loan Status</label> <select id="loan-status" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-lokkd7n7> <option value="owned" data-astro-cid-lokkd7n7>Paid off</option> <option value="financed" data-astro-cid-lokkd7n7>Financed/Leased</option> </select> </div> </div> <!-- Personal Information --> <div class="space-y-4" data-astro-cid-lokkd7n7> <h3 class="text-lg font-semibold text-gray-900 dark:text-white" data-astro-cid-lokkd7n7>Your Situation</h3> <div data-astro-cid-lokkd7n7> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-lokkd7n7>Net Worth (Assets - Debts)</label> <select id="net-worth" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-lokkd7n7> <option value="low" data-astro-cid-lokkd7n7>Under $50,000</option> <option value="medium" data-astro-cid-lokkd7n7>$50,000 - $250,000</option> <option value="high" data-astro-cid-lokkd7n7>$250,000 - $500,000</option> <option value="very-high" data-astro-cid-lokkd7n7>Over $500,000</option> </select> </div> <div data-astro-cid-lokkd7n7> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-lokkd7n7>Annual Income</label> <select id="income" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-lokkd7n7> <option value="low" data-astro-cid-lokkd7n7>Under $40,000</option> <option value="medium" data-astro-cid-lokkd7n7>$40,000 - $80,000</option> <option value="high" data-astro-cid-lokkd7n7>$80,000 - $150,000</option> <option value="very-high" data-astro-cid-lokkd7n7>Over $150,000</option> </select> </div> <div data-astro-cid-lokkd7n7> <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-lokkd7n7>State</label> <select id="state" class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" data-astro-cid-lokkd7n7> <option value="CA" data-astro-cid-lokkd7n7>California</option> <option value="TX" data-astro-cid-lokkd7n7>Texas</option> <option value="FL" data-astro-cid-lokkd7n7>Florida</option> <option value="NY" data-astro-cid-lokkd7n7>New York</option> <option value="other" data-astro-cid-lokkd7n7>Other State</option> </select> </div> </div> </div> <div class="text-center" data-astro-cid-lokkd7n7> <button type="button" id="calculate-btn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors" data-astro-cid-lokkd7n7>
Calculate My Coverage Needs
</button> </div> </form> <!-- Results Section --> <div id="results" class="hidden mt-8 space-y-6" data-astro-cid-lokkd7n7> <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6" data-astro-cid-lokkd7n7> <h3 class="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4" data-astro-cid-lokkd7n7>Your Recommended Coverage</h3> <div class="grid md:grid-cols-2 gap-6" data-astro-cid-lokkd7n7> <div class="space-y-3" data-astro-cid-lokkd7n7> <div class="flex justify-between py-2 border-b border-blue-200" data-astro-cid-lokkd7n7> <span class="font-medium" data-astro-cid-lokkd7n7>Liability (Per Person)</span> <span id="liability-person" class="font-bold text-blue-700" data-astro-cid-lokkd7n7></span> </div> <div class="flex justify-between py-2 border-b border-blue-200" data-astro-cid-lokkd7n7> <span class="font-medium" data-astro-cid-lokkd7n7>Liability (Per Accident)</span> <span id="liability-accident" class="font-bold text-blue-700" data-astro-cid-lokkd7n7></span> </div> <div class="flex justify-between py-2 border-b border-blue-200" data-astro-cid-lokkd7n7> <span class="font-medium" data-astro-cid-lokkd7n7>Property Damage</span> <span id="property-damage" class="font-bold text-blue-700" data-astro-cid-lokkd7n7></span> </div> </div> <div class="space-y-3" data-astro-cid-lokkd7n7> <div class="flex justify-between py-2 border-b border-blue-200" data-astro-cid-lokkd7n7> <span class="font-medium" data-astro-cid-lokkd7n7>Comprehensive Deductible</span> <span id="comp-deductible" class="font-bold text-blue-700" data-astro-cid-lokkd7n7></span> </div> <div class="flex justify-between py-2 border-b border-blue-200" data-astro-cid-lokkd7n7> <span class="font-medium" data-astro-cid-lokkd7n7>Collision Deductible</span> <span id="collision-deductible" class="font-bold text-blue-700" data-astro-cid-lokkd7n7></span> </div> <div class="flex justify-between py-2 border-b border-blue-200" data-astro-cid-lokkd7n7> <span class="font-medium" data-astro-cid-lokkd7n7>Full Coverage Needed?</span> <span id="full-coverage" class="font-bold text-blue-700" data-astro-cid-lokkd7n7></span> </div> </div> </div> <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg" data-astro-cid-lokkd7n7> <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2" data-astro-cid-lokkd7n7>💡 Why These Recommendations?</h4> <div id="explanation" class="text-sm text-yellow-700 dark:text-yellow-300" data-astro-cid-lokkd7n7></div> </div> </div> <!-- Call to Action --> <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 text-center" data-astro-cid-lokkd7n7> <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3" data-astro-cid-lokkd7n7>Ready to Get Quotes?</h4> <p class="text-gray-600 dark:text-gray-300 mb-4" data-astro-cid-lokkd7n7>Compare rates from top insurers with your recommended coverage levels.</p> <a href="/posts/compare-auto-insurance-rates/" class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors mr-4" data-astro-cid-lokkd7n7>
Compare Quotes Guide
</a> <button id="share-results" class="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors" data-astro-cid-lokkd7n7>
Share Results
</button> </div> </div> </div>  `;
}, "C:/Mirza/Websites/Insurance/src/components/calculators/AutoInsuranceCalculator.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = SITE.URL;
  const url = `${siteUrl}/tools/auto-insurance-calculator/`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Auto Insurance Needs Calculator",
      "description": "Free calculator to determine optimal auto insurance coverage levels based on your financial situation and vehicle details.",
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
      "name": "How to Calculate Auto Insurance Coverage Needs",
      "description": "Step-by-step process to determine the right auto insurance coverage for your situation",
      "totalTime": "PT5M",
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Vehicle information (value, age, loan status)"
        },
        {
          "@type": "HowToSupply",
          "name": "Financial details (income, net worth)"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Enter Vehicle Details",
          "text": "Input your vehicle's current value, age, and whether it's financed or owned outright."
        },
        {
          "@type": "HowToStep",
          "name": "Provide Financial Information",
          "text": "Enter your annual income and estimated net worth to determine appropriate liability limits."
        },
        {
          "@type": "HowToStep",
          "name": "Review Recommendations",
          "text": "Get personalized coverage recommendations with explanations for each suggested limit."
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Auto Insurance Needs Calculator - Free Coverage Calculator", "description": "Calculate your optimal auto insurance coverage levels. Free calculator considers your vehicle value, income, and assets to recommend liability, comprehensive, and collision coverage.", "url": url, "type": "website", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-6xl px-4 py-10"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
Auto Insurance Needs Calculator
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Get personalized auto insurance coverage recommendations based on your vehicle, income, and assets. 
        Avoid being underinsured or overpaying for unnecessary coverage.
</p> </div> ${renderComponent($$result2, "AutoInsuranceCalculator", $$AutoInsuranceCalculator, {})} <!-- Educational Content --> <div class="mt-16 prose prose-lg dark:prose-invert mx-auto"> <h2>Understanding Auto Insurance Coverage</h2> <h3>Liability Coverage</h3> <p>Liability insurance protects you when you're at fault in an accident. It covers:</p> <ul> <li><strong>Bodily Injury Per Person:</strong> Maximum paid for one person's injuries</li> <li><strong>Bodily Injury Per Accident:</strong> Maximum paid for all injuries in one accident</li> <li><strong>Property Damage:</strong> Maximum paid for damage to others' property</li> </ul> <h3>Full Coverage Components</h3> <ul> <li><strong>Comprehensive:</strong> Covers theft, vandalism, weather damage, hitting an animal</li> <li><strong>Collision:</strong> Covers damage from crashes, regardless of fault</li> <li><strong>Uninsured/Underinsured Motorist:</strong> Protects you from drivers with inadequate coverage</li> </ul> <h3>How This Calculator Works</h3> <p>Our calculator uses industry best practices and considers:</p> <ul> <li>Your state's minimum requirements and typical claim costs</li> <li>Asset protection needs based on your net worth</li> <li>Vehicle value and loan requirements</li> <li>Optimal deductibles based on your financial situation</li> </ul> <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"> <h4 class="text-lg font-semibold mb-3">💡 Pro Tips</h4> <ul class="space-y-2"> <li>Consider umbrella insurance if you have significant assets</li> <li>Higher deductibles can significantly reduce premiums</li> <li>Review your coverage annually as your financial situation changes</li> <li>Don't just buy minimum coverage - it rarely provides adequate protection</li> </ul> </div> </div> <!-- Related Tools --> <div class="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8"> <h2 class="text-2xl font-bold text-center mb-8">Related Insurance Tools</h2> <div class="grid md:grid-cols-3 gap-6"> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Life Insurance Calculator</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Determine how much life insurance you need</p> <span class="text-sm text-gray-500">Coming Soon</span> </div> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Home Insurance Calculator</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Calculate replacement cost and coverage needs</p> <span class="text-sm text-gray-500">Coming Soon</span> </div> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Premium Estimator</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Estimate your insurance costs by state and profile</p> <span class="text-sm text-gray-500">Coming Soon</span> </div> </div> </div> </section> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/tools/auto-insurance-calculator/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/tools/auto-insurance-calculator/index.astro";
const $$url = "/tools/auto-insurance-calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
