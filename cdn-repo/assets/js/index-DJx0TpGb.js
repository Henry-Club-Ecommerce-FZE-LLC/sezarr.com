/* empty css                              */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import { $ as $$BaseLayout, S as SITE } from './BaseLayout-BQKj_NaX.js';
import 'clsx';

const $$PetInsuranceCalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700"> <div class="mb-8"> <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
Pet Insurance Calculator
</h2> <p class="text-gray-600 dark:text-gray-300">
Estimate your pet insurance costs based on your pet's details and coverage preferences.
</p> </div> <form id="petInsuranceForm" class="space-y-6"> <!-- Pet Information --> <div class="grid md:grid-cols-2 gap-6"> <div> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
Pet Type
</label> <select id="petType" name="petType" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"> <option value="dog">Dog</option> <option value="cat">Cat</option> </select> </div> <div> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
Pet Age
</label> <select id="petAge" name="petAge" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"> <option value="puppy">Puppy/Kitten (0-1 year)</option> <option value="young">Young Adult (1-3 years)</option> <option value="adult">Adult (3-7 years)</option> <option value="senior">Senior (7+ years)</option> </select> </div> </div> <div class="grid md:grid-cols-2 gap-6"> <div> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
Breed Category
</label> <select id="breedCategory" name="breedCategory" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"> <option value="mixed">Mixed Breed</option> <option value="small">Small Purebred</option> <option value="medium">Medium Purebred</option> <option value="large">Large Purebred</option> <option value="giant">Giant Breed</option> </select> </div> <div> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
Location
</label> <select id="location" name="location" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"> <option value="rural">Rural Area</option> <option value="suburban">Suburban</option> <option value="urban">Urban Area</option> <option value="metro">Major Metro</option> </select> </div> </div> <!-- Coverage Options --> <div> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
Coverage Type
</label> <div class="grid md:grid-cols-2 gap-4"> <label class="flex items-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"> <input type="radio" name="coverageType" value="accident" class="text-purple-600 focus:ring-purple-500"> <div class="ml-3"> <div class="font-medium text-gray-900 dark:text-white">Accident Only</div> <div class="text-sm text-gray-600 dark:text-gray-300">Basic protection for injuries</div> </div> </label> <label class="flex items-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"> <input type="radio" name="coverageType" value="comprehensive" checked class="text-purple-600 focus:ring-purple-500"> <div class="ml-3"> <div class="font-medium text-gray-900 dark:text-white">Accident & Illness</div> <div class="text-sm text-gray-600 dark:text-gray-300">Complete medical coverage</div> </div> </label> </div> </div> <div class="grid md:grid-cols-2 gap-6"> <div> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
Deductible
</label> <select id="deductible" name="deductible" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"> <option value="100">$100 (Higher Premium)</option> <option value="250" selected>$250 (Balanced)</option> <option value="500">$500 (Lower Premium)</option> <option value="1000">$1,000 (Lowest Premium)</option> </select> </div> <div> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
Reimbursement Rate
</label> <select id="reimbursementRate" name="reimbursementRate" class="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"> <option value="70">70% (Lower Cost)</option> <option value="80" selected>80% (Popular Choice)</option> <option value="90">90% (Higher Cost)</option> </select> </div> </div> <!-- Add-ons --> <div> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
Additional Coverage (Optional)
</label> <div class="space-y-3"> <label class="flex items-center"> <input type="checkbox" id="wellness" name="addons" value="wellness" class="text-purple-600 focus:ring-purple-500"> <span class="ml-3 text-gray-700 dark:text-gray-300">Wellness & Routine Care (+$15-25/month)</span> </label> <label class="flex items-center"> <input type="checkbox" id="dental" name="addons" value="dental" class="text-purple-600 focus:ring-purple-500"> <span class="ml-3 text-gray-700 dark:text-gray-300">Dental Coverage (+$10-15/month)</span> </label> <label class="flex items-center"> <input type="checkbox" id="alternative" name="addons" value="alternative" class="text-purple-600 focus:ring-purple-500"> <span class="ml-3 text-gray-700 dark:text-gray-300">Alternative Therapies (+$5-10/month)</span> </label> </div> </div> <button type="submit" class="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl">
Calculate Pet Insurance Cost
</button> </form> <!-- Results Section --> <div id="results" class="hidden mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-700"> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Estimated Costs</h3> <div class="grid md:grid-cols-3 gap-6 mb-6"> <div class="text-center"> <div class="text-2xl font-bold text-purple-600 dark:text-purple-400" id="monthlyPremium">$0</div> <div class="text-sm text-gray-600 dark:text-gray-300">Monthly Premium</div> </div> <div class="text-center"> <div class="text-2xl font-bold text-pink-600 dark:text-pink-400" id="annualCost">$0</div> <div class="text-sm text-gray-600 dark:text-gray-300">Annual Cost</div> </div> <div class="text-center"> <div class="text-2xl font-bold text-green-600 dark:text-green-400" id="lifetimeSavings">$0</div> <div class="text-sm text-gray-600 dark:text-gray-300">Potential Lifetime Savings</div> </div> </div> <div class="bg-white dark:bg-gray-800 rounded-lg p-4"> <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Coverage Summary</h4> <div id="coverageSummary" class="space-y-2 text-sm text-gray-600 dark:text-gray-300"> <!-- Dynamic content will be inserted here --> </div> </div> <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg"> <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
💡 Money-Saving Tips
</h4> <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1" id="savingsTips"> <!-- Dynamic tips will be inserted here --> </ul> </div> </div> <!-- Disclaimer --> <div class="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"> <p class="text-xs text-gray-600 dark:text-gray-400"> <strong>Disclaimer:</strong> This calculator provides estimates based on industry averages and typical pricing. Actual costs may vary significantly based on your specific pet, location, chosen provider, and policy terms. This tool is for informational purposes only and does not constitute professional advice. Always obtain personalized quotes from insurance providers for accurate pricing.
</p> </div> </div> `;
}, "C:/Mirza/Websites/Insurance/src/components/calculators/PetInsuranceCalculator.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const siteUrl = SITE.URL;
  const url = `${siteUrl}/tools/pet-insurance-calculator/`;
  const title = "Pet Insurance Calculator 2025 - Free Cost Estimator";
  const description = "Calculate pet insurance costs with our free 2025 calculator. Compare premiums, deductibles, and coverage options for dogs and cats.";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Pet Insurance Cost Calculator",
      "description": "Free calculator to estimate pet insurance premiums based on pet type, age, breed, and coverage preferences.",
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
      "name": "How to Calculate Pet Insurance Costs",
      "description": "Step-by-step process to estimate pet insurance premiums and coverage options",
      "totalTime": "PT5M",
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Pet information (type, breed, age, location)"
        },
        {
          "@type": "HowToSupply",
          "name": "Coverage preferences (deductible, reimbursement level)"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Enter Pet Details",
          "text": "Input your pet's type, breed, age, and your location to get accurate pricing."
        },
        {
          "@type": "HowToStep",
          "name": "Select Coverage Level",
          "text": "Choose your preferred deductible amount and reimbursement percentage."
        },
        {
          "@type": "HowToStep",
          "name": "Review Cost Estimates",
          "text": "Compare estimated monthly premiums across different coverage options."
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "url": url, "type": "website", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-6xl px-4 py-10"> <div class="text-center mb-12"> <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
Pet Insurance Cost Calculator
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Get instant estimates for pet insurance premiums based on your pet's details, coverage preferences, and location. 
        Compare costs and find the perfect protection for your furry family member.
</p> </div> ${renderComponent($$result2, "PetInsuranceCalculator", $$PetInsuranceCalculator, {})} <!-- Educational Content --> <div class="mt-16 prose prose-lg dark:prose-invert mx-auto"> <h2>Understanding Pet Insurance Coverage</h2> <h3>Types of Pet Insurance</h3> <p>Pet insurance policies typically fall into these categories:</p> <ul> <li><strong>Accident Only:</strong> Covers injuries from accidents like broken bones or poisoning</li> <li><strong>Accident & Illness:</strong> Covers accidents plus illnesses like cancer, infections, and hereditary conditions</li> <li><strong>Comprehensive:</strong> Includes accidents, illnesses, and often preventive care like vaccines</li> </ul> <h3>Key Policy Terms</h3> <ul> <li><strong>Deductible:</strong> Amount you pay before insurance coverage begins (annual or per-incident)</li> <li><strong>Reimbursement Rate:</strong> Percentage of covered costs the insurer pays back (typically 70%, 80%, or 90%)</li> <li><strong>Annual/Lifetime Limits:</strong> Maximum amount the policy will pay per year or over your pet's lifetime</li> <li><strong>Waiting Period:</strong> Time between enrollment and when coverage becomes active</li> </ul> <h3>How This Calculator Works</h3> <p>Our calculator estimates costs based on:</p> <ul> <li>Pet species, breed, and age (older pets and certain breeds cost more)</li> <li>Your location (veterinary costs vary by region)</li> <li>Coverage level and policy options you select</li> <li>Current market rates from major pet insurance providers</li> </ul> <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"> <h4 class="text-lg font-semibold mb-3">💡 Pet Insurance Tips</h4> <ul class="space-y-2"> <li>Enroll pets while they're young and healthy for better rates</li> <li>Pre-existing conditions are typically excluded from coverage</li> <li>Higher deductibles and lower reimbursement rates reduce premiums</li> <li>Consider your budget vs. potential emergency vet costs (can be $5,000+)</li> <li>Read policy exclusions carefully - some breeds have specific restrictions</li> </ul> </div> </div> <!-- Related Tools --> <div class="mt-16 bg-gray-50 dark:bg-gray-800 rounded-xl p-8"> <h2 class="text-2xl font-bold text-center mb-8">Related Insurance Tools</h2> <div class="grid md:grid-cols-3 gap-6"> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Auto Insurance Calculator</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Determine your optimal auto coverage needs</p> <a href="/tools/auto-insurance-calculator/" class="text-blue-600 dark:text-blue-400 text-sm hover:underline">Calculate Now</a> </div> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Life Insurance Calculator</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Calculate how much life insurance you need</p> <a href="/tools/life-insurance-calculator/" class="text-blue-600 dark:text-blue-400 text-sm hover:underline">Calculate Now</a> </div> <div class="bg-white dark:bg-gray-700 rounded-lg p-6 text-center"> <h3 class="font-semibold mb-2">Disability Calculator</h3> <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">Estimate disability insurance needs</p> <a href="/tools/disability-insurance-calculator/" class="text-blue-600 dark:text-blue-400 text-sm hover:underline">Calculate Now</a> </div> </div> </div> </section> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/tools/pet-insurance-calculator/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/tools/pet-insurance-calculator/index.astro";
const $$url = "/tools/pet-insurance-calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
