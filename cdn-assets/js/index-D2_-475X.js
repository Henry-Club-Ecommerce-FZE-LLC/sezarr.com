/* empty css                              */
import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import { S as SITE, $ as $$BaseLayout } from './BaseLayout-BQKj_NaX.js';
import 'clsx';
import { $ as $$AdSenseBlock } from './AdSenseBlock-Be-zcsjf.js';
import { $ as $$Breadcrumbs } from './Breadcrumbs-BzCmubR1.js';

const $$TravelInsuranceCalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"> <div class="text-center mb-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
Travel Insurance Calculator
</h2> <p class="text-gray-600 dark:text-gray-300">
Calculate your travel insurance needs and estimated costs based on your trip details
</p> </div> <form id="travel-insurance-calculator" class="space-y-6"> <!-- Trip Information --> <div class="space-y-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Trip Information</h3> <div class="grid md:grid-cols-2 gap-4"> <div> <label for="destination-type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Destination Type
</label> <select id="destination-type" name="destinationType" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="">Select Destination</option> <option value="domestic">Domestic (US)</option> <option value="canada">Canada</option> <option value="europe">Europe</option> <option value="asia-pacific">Asia/Pacific</option> <option value="caribbean">Caribbean</option> <option value="south-america">South America</option> <option value="africa">Africa</option> <option value="middle-east">Middle East</option> <option value="worldwide">Worldwide</option> </select> </div> <div> <label for="trip-type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Trip Type
</label> <select id="trip-type" name="tripType" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="">Select Trip Type</option> <option value="leisure">Leisure/Vacation</option> <option value="business">Business Travel</option> <option value="cruise">Cruise</option> <option value="adventure">Adventure/Sports</option> <option value="family">Family Vacation</option> <option value="honeymoon">Honeymoon/Special Event</option> <option value="group">Group Travel</option> </select> </div> </div> <div class="grid md:grid-cols-2 gap-4"> <div> <label for="trip-cost" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Total Trip Cost
</label> <input type="number" id="trip-cost" name="tripCost" min="0" step="100" required placeholder="3000" class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="trip-length" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Trip Length (Days)
</label> <input type="number" id="trip-length" name="tripLength" min="1" max="365" required placeholder="7" class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> </div> <div class="grid md:grid-cols-2 gap-4"> <div> <label for="travelers" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Number of Travelers
</label> <input type="number" id="travelers" name="travelers" min="1" max="20" required placeholder="2" class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="oldest-traveler" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Age of Oldest Traveler
</label> <input type="number" id="oldest-traveler" name="oldestTraveler" min="0" max="120" required placeholder="35" class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> </div> </div> <!-- Coverage Preferences --> <div class="space-y-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Coverage Preferences</h3> <div class="grid md:grid-cols-2 gap-4"> <div> <label for="coverage-type" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Coverage Type
</label> <select id="coverage-type" name="coverageType" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="basic">Basic Coverage</option> <option value="comprehensive" selected>Comprehensive Coverage</option> <option value="premium">Premium Coverage</option> <option value="medical-only">Medical Only</option> </select> </div> <div> <label for="medical-limit" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Medical Coverage Limit
</label> <select id="medical-limit" name="medicalLimit" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="50000">$50,000</option> <option value="100000" selected>$100,000</option> <option value="250000">$250,000</option> <option value="500000">$500,000</option> <option value="1000000">$1,000,000</option> </select> </div> </div> <div> <label for="deductible" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Deductible Amount
</label> <select id="deductible" name="deductible" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="0">$0 (Higher Premium)</option> <option value="100" selected>$100 (Balanced)</option> <option value="250">$250 (Lower Premium)</option> <option value="500">$500 (Lowest Premium)</option> </select> </div> </div> <!-- Risk Factors --> <div class="space-y-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Risk Factors & Add-ons</h3> <div class="grid md:grid-cols-2 gap-4"> <div class="flex items-center"> <input type="checkbox" id="pre-existing" name="preExisting" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"> <label for="pre-existing" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Pre-existing medical conditions
</label> </div> <div class="flex items-center"> <input type="checkbox" id="adventure-sports" name="adventureSports" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"> <label for="adventure-sports" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Adventure sports/high-risk activities
</label> </div> <div class="flex items-center"> <input type="checkbox" id="cancel-any-reason" name="cancelAnyReason" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"> <label for="cancel-any-reason" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Cancel for Any Reason (CFAR)
</label> </div> <div class="flex items-center"> <input type="checkbox" id="rental-car" name="rentalCar" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"> <label for="rental-car" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Rental car coverage
</label> </div> </div> </div> <button type="submit" class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-md transition-colors">
Calculate Travel Insurance Cost
</button> </form> <!-- Results Section --> <div id="travel-insurance-results" class="mt-8 hidden"> <div class="border-t border-gray-200 dark:border-gray-600 pt-6"> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Travel Insurance Quote</h3> <!-- Total Cost --> <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-6"> <div class="text-center"> <div class="text-3xl font-bold text-purple-600 dark:text-purple-400" id="total-premium">$0</div> <div class="text-sm text-gray-600 dark:text-gray-300">Estimated Premium</div> <div class="text-xs text-gray-500 dark:text-gray-400 mt-1" id="cost-percentage">0% of trip cost</div> </div> </div> <!-- Coverage Summary --> <div class="space-y-4"> <h4 class="font-semibold text-gray-900 dark:text-white">Coverage Summary:</h4> <div id="coverage-summary" class="space-y-2"> <!-- Coverage items will be populated here --> </div> </div> <!-- Policy Recommendations --> <div class="mt-6 space-y-4"> <h4 class="font-semibold text-gray-900 dark:text-white">Policy Recommendations:</h4> <div id="policy-recommendations" class="space-y-2"> <!-- Policy recommendations will be populated here --> </div> </div> <!-- Destination-Specific Advice --> <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"> <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Destination-Specific Advice:</h4> <div id="destination-advice" class="text-sm text-blue-700 dark:text-blue-300"> <!-- Destination advice will be populated here --> </div> </div> <!-- Important Reminders --> <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"> <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Important Reminders:</h4> <ul class="text-sm text-yellow-700 dark:text-yellow-300 space-y-1"> <li>• Purchase travel insurance within 10-21 days of initial trip deposit for maximum benefits</li> <li>• Read policy exclusions carefully, especially for adventure activities</li> <li>• Keep all receipts and document any incidents immediately</li> <li>• Contact the insurance company's 24/7 hotline for emergencies</li> <li>• Consider annual policies if taking multiple trips per year</li> </ul> </div> <!-- Disclaimer --> <div class="mt-6 p-4 border border-gray-200 dark:border-gray-600 rounded-lg"> <p class="text-xs text-gray-500 dark:text-gray-400"> <strong>Disclaimer:</strong> This calculator provides estimates only and should not be considered professional advice. 
          Actual premiums and coverage may vary significantly between insurance providers. Always compare multiple quotes 
          and read policy documents carefully before purchasing.
</p> </div> </div> </div> </div> `;
}, "C:/Mirza/Websites/Insurance/src/components/calculators/TravelInsuranceCalculator.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Travel Insurance Calculator - Get Instant Quotes & Compare Coverage | Sezarr";
  const description = "Calculate travel insurance costs and coverage needs. Compare policies for international and domestic travel. Get personalized recommendations based on destination and trip details.";
  const keywords = "travel insurance calculator, trip insurance cost, travel coverage calculator, international travel insurance, trip protection quotes";
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/" },
    { label: "Travel Insurance Calculator", href: "/tools/travel-insurance-calculator/" }
  ];
  const siteUrl = SITE.URL;
  const currentUrl = `${siteUrl}/tools/travel-insurance-calculator/`;
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
      "@type": "WebApplication",
      "name": "Travel Insurance Calculator",
      "description": "Interactive calculator to estimate travel insurance costs and coverage needs for any destination",
      "applicationCategory": "TravelApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "ogImage": "/images/travel-insurance-calculator.jpg", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Hero Section --> <section class="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 py-12"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center space-y-4"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
Travel Insurance Calculator
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Get personalized travel insurance quotes and coverage recommendations. Calculate costs based on 
            your destination, trip type, and coverage needs.
</p> </div> </div> </section> <!-- Calculator Section --> <section class="py-12"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "TravelInsuranceCalculator", $$TravelInsuranceCalculator, {})} </div> </section> <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "middle-content" })} <!-- Information Section --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="prose prose-lg dark:prose-invert mx-auto"> <h2>Understanding Your Travel Insurance Quote</h2> <p>
This calculator provides personalized estimates based on your specific travel plans and destination. 
            The recommendations are designed to help you understand the types of coverage most important for 
            your trip and approximate costs from leading travel insurance providers.
</p> <h3>Key Coverage Components Evaluated</h3> <ul> <li><strong>Trip Cancellation/Interruption:</strong> Reimburses non-refundable trip costs if you must cancel or cut your trip short for covered reasons</li> <li><strong>Emergency Medical Coverage:</strong> Pays for medical treatment while traveling, crucial when your regular health insurance has limited coverage abroad</li> <li><strong>Emergency Evacuation:</strong> Covers transportation to nearest adequate medical facility or back home - can cost $50,000+ from remote locations</li> <li><strong>Baggage Protection:</strong> Compensates for lost, stolen, or delayed luggage and personal belongings</li> <li><strong>Travel Delay Coverage:</strong> Reimburses additional expenses (meals, lodging) due to covered travel delays</li> <li><strong>Accidental Death & Dismemberment:</strong> Provides benefits for covered accidents during travel</li> </ul> <h3>Factors That Impact Your Premium</h3> <p>
Several factors influence your travel insurance costs:
</p> <ul> <li><strong>Destination Risk Level:</strong> Some regions have higher medical costs, political instability, or natural disaster risks</li> <li><strong>Trip Cost:</strong> Higher trip values require higher coverage limits for adequate protection</li> <li><strong>Traveler Age:</strong> Premiums increase significantly with age, especially after 50</li> <li><strong>Trip Length:</strong> Longer trips generally cost more to insure due to increased exposure</li> <li><strong>Activities Planned:</strong> Adventure sports and high-risk activities increase premiums</li> <li><strong>Pre-existing Conditions:</strong> Can be covered but may require specific timing and increase costs</li> <li><strong>Coverage Type:</strong> Comprehensive policies cost more but provide broader protection</li> </ul> <h3>Destination-Specific Considerations</h3> <h4>International Travel</h4> <p>
International destinations typically require higher medical coverage limits due to potentially expensive 
            healthcare systems and evacuation costs. Consider visa requirements (like Schengen area minimums) and 
            specific risks like natural disasters or political instability.
</p> <h4>Domestic Travel</h4> <p>
While medical evacuation costs may be lower within the US, trip cancellation protection remains valuable 
            for expensive domestic trips. Focus on coverage for non-refundable bookings and travel delays.
</p> <h4>Adventure and High-Risk Travel</h4> <p>
Activities like skiing, scuba diving, or mountain climbing require specialized coverage. Many standard 
            policies exclude these activities, so verify coverage or purchase add-ons.
</p> <h3>When to Purchase Travel Insurance</h3> <p>
Timing is crucial for maximum benefits:
</p> <ul> <li><strong>Best Time:</strong> Within 10-21 days of making your initial trip deposit</li> <li><strong>Benefits of Early Purchase:</strong> Pre-existing condition coverage, Cancel for Any Reason eligibility, full trip cancellation protection</li> <li><strong>Last-Minute Options:</strong> Still valuable for medical coverage and emergency assistance, but with limited cancellation benefits</li> </ul> <h3>Types of Travel Insurance Policies</h3> <ul> <li><strong>Comprehensive:</strong> Full coverage including trip cancellation, medical, evacuation, and baggage protection</li> <li><strong>Medical-Only:</strong> Focus on health-related coverage for travelers with good trip protection elsewhere</li> <li><strong>Cancel for Any Reason (CFAR):</strong> Enhanced flexibility allowing cancellation for any reason (typically 75% reimbursement)</li> <li><strong>Annual/Multi-Trip:</strong> Cost-effective for frequent travelers taking multiple trips per year</li> </ul> <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700"> <h4 class="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Important Reminders</h4> <ul class="text-yellow-700 dark:text-yellow-300 text-sm space-y-1"> <li>• These are estimates - actual quotes may vary between insurance companies</li> <li>• Read policy exclusions carefully, especially for adventure activities and pre-existing conditions</li> <li>• Consider your existing coverage from health insurance, credit cards, and other sources</li> <li>• Purchase insurance as soon as you make your first trip payment for maximum benefits</li> <li>• Keep emergency contact numbers and policy information easily accessible while traveling</li> </ul> </div> </div> </div> </section> <!-- Related Resources --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Related Travel Insurance Resources
</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/travel-insurance/guide/" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
Complete Travel Insurance Guide
</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Comprehensive guide covering all aspects of travel insurance, from basics to advanced strategies.
</p> </a> <a href="/travel-insurance/europe/" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
European Travel Insurance
</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Specific requirements and recommendations for European destinations and Schengen visa compliance.
</p> </a> <a href="/travel-insurance/adventure-travel/" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
Adventure Travel Insurance
</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Specialized coverage for high-risk activities and extreme sports during travel.
</p> </a> </div> </div> </section> <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "bottom-content" })} </main> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/tools/travel-insurance-calculator/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/tools/travel-insurance-calculator/index.astro";
const $$url = "/tools/travel-insurance-calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
