import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import { S as SITE, $ as $$BaseLayout } from './BaseLayout-BzVaJQ1A.js';
import 'clsx';
import { $ as $$AdSenseBlock } from './AdSenseBlock-D8Dnm8LT.js';
import { $ as $$Breadcrumbs } from './Breadcrumbs-CZaPASxT.js';

const $$BusinessInsuranceCalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"> <div class="text-center mb-6"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
Business Insurance Calculator
</h2> <p class="text-gray-600 dark:text-gray-300">
Calculate your business insurance needs and estimated costs
</p> </div> <form id="business-insurance-calculator" class="space-y-6"> <!-- Business Information --> <div class="space-y-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Business Information</h3> <div class="grid md:grid-cols-2 gap-4"> <div> <label for="industry" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Industry
</label> <select id="industry" name="industry" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="">Select Industry</option> <option value="retail">Retail</option> <option value="restaurant">Restaurant/Food Service</option> <option value="construction">Construction/Contracting</option> <option value="professional">Professional Services</option> <option value="healthcare">Healthcare</option> <option value="manufacturing">Manufacturing</option> <option value="technology">Technology</option> <option value="real-estate">Real Estate</option> <option value="education">Education</option> <option value="other">Other</option> </select> </div> <div> <label for="business-size" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Business Size
</label> <select id="business-size" name="businessSize" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="">Select Size</option> <option value="sole-proprietor">Sole Proprietor</option> <option value="small">Small (1-10 employees)</option> <option value="medium">Medium (11-100 employees)</option> <option value="large">Large (100+ employees)</option> </select> </div> </div> <div class="grid md:grid-cols-2 gap-4"> <div> <label for="annual-revenue" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Annual Revenue
</label> <input type="number" id="annual-revenue" name="annualRevenue" min="0" step="1000" required placeholder="100000" class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> <div> <label for="employees" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Number of Employees
</label> <input type="number" id="employees" name="employees" min="0" required placeholder="5" class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> </div> <div> <label for="property-value" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Property/Equipment Value
</label> <input type="number" id="property-value" name="propertyValue" min="0" step="1000" placeholder="50000" class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> </div> </div> <!-- Coverage Preferences --> <div class="space-y-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Coverage Preferences</h3> <div> <label for="coverage-level" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Coverage Level
</label> <select id="coverage-level" name="coverageLevel" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="basic">Basic Protection</option> <option value="standard" selected>Standard Coverage</option> <option value="comprehensive">Comprehensive Protection</option> </select> </div> <div> <label for="deductible" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Preferred Deductible
</label> <select id="deductible" name="deductible" required class="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"> <option value="500">$500 (Higher Premium)</option> <option value="1000" selected>$1,000 (Balanced)</option> <option value="2500">$2,500 (Lower Premium)</option> <option value="5000">$5,000 (Lowest Premium)</option> </select> </div> </div> <!-- Risk Factors --> <div class="space-y-4"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Risk Factors</h3> <div class="grid md:grid-cols-2 gap-4"> <div class="flex items-center"> <input type="checkbox" id="public-facing" name="publicFacing" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"> <label for="public-facing" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Public-facing business (customers visit)
</label> </div> <div class="flex items-center"> <input type="checkbox" id="handles-data" name="handlesData" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"> <label for="handles-data" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Handles sensitive customer data
</label> </div> <div class="flex items-center"> <input type="checkbox" id="professional-services" name="professionalServices" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"> <label for="professional-services" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Provides professional services/advice
</label> </div> <div class="flex items-center"> <input type="checkbox" id="owns-vehicles" name="ownsVehicles" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"> <label for="owns-vehicles" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
Owns/uses business vehicles
</label> </div> </div> </div> <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md transition-colors">
Calculate Insurance Needs
</button> </form> <!-- Results Section --> <div id="business-insurance-results" class="mt-8 hidden"> <div class="border-t border-gray-200 dark:border-gray-600 pt-6"> <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Your Business Insurance Plan</h3> <!-- Total Cost --> <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6"> <div class="text-center"> <div class="text-3xl font-bold text-blue-600 dark:text-blue-400" id="total-cost">$0</div> <div class="text-sm text-gray-600 dark:text-gray-300">Estimated Annual Premium</div> </div> </div> <!-- Recommended Coverage --> <div class="space-y-4"> <h4 class="font-semibold text-gray-900 dark:text-white">Recommended Coverage:</h4> <div id="coverage-breakdown" class="space-y-2"> <!-- Coverage items will be populated here --> </div> </div> <!-- Coverage Limits --> <div class="mt-6 space-y-4"> <h4 class="font-semibold text-gray-900 dark:text-white">Suggested Coverage Limits:</h4> <div id="coverage-limits" class="space-y-2"> <!-- Coverage limits will be populated here --> </div> </div> <!-- Risk Analysis --> <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"> <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Risk Analysis:</h4> <div id="risk-analysis" class="text-sm text-yellow-700 dark:text-yellow-300"> <!-- Risk analysis will be populated here --> </div> </div> <!-- Next Steps --> <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"> <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">Next Steps:</h4> <ul class="text-sm text-green-700 dark:text-green-300 space-y-1"> <li>• Get quotes from at least 3 licensed insurance agents</li> <li>• Review policy terms and exclusions carefully</li> <li>• Consider bundling policies for potential discounts</li> <li>• Schedule annual coverage reviews as your business grows</li> </ul> </div> <!-- Disclaimer --> <div class="mt-6 p-4 border border-gray-200 dark:border-gray-600 rounded-lg"> <p class="text-xs text-gray-500 dark:text-gray-400"> <strong>Disclaimer:</strong> This calculator provides estimates only and should not be considered professional advice. 
          Actual insurance needs and costs may vary. Consult with licensed insurance professionals for personalized recommendations.
</p> </div> </div> </div> </div> `;
}, "C:/Mirza/Websites/Insurance/src/components/calculators/BusinessInsuranceCalculator.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "Business Insurance Calculator - Estimate Costs & Coverage Needs | Sezarr";
  const description = "Calculate your business insurance needs and estimated costs. Get personalized recommendations for general liability, professional liability, property, and workers' comp coverage.";
  const keywords = "business insurance calculator, commercial insurance cost, general liability calculator, professional liability cost, workers compensation calculator";
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools/" },
    { label: "Business Insurance Calculator", href: "/tools/business-insurance-calculator/" }
  ];
  const siteUrl = SITE.URL;
  const currentUrl = `${siteUrl}/tools/business-insurance-calculator/`;
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
      "name": "Business Insurance Calculator",
      "description": "Interactive calculator to estimate business insurance costs and coverage needs",
      "applicationCategory": "FinanceApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "keywords": keywords, "ogImage": "/images/business-insurance-calculator.jpg", "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1"> ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "items": breadcrumbItems })} <!-- Hero Section --> <section class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 py-12"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center space-y-4"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
Business Insurance Calculator
</h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
Get personalized recommendations and cost estimates for your business insurance needs. 
            Calculate coverage requirements based on your industry, size, and risk factors.
</p> </div> </div> </section> <!-- Calculator Section --> <section class="py-12"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "BusinessInsuranceCalculator", $$BusinessInsuranceCalculator, {})} </div> </section> <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "middle-content" })} <!-- Information Section --> <section class="py-12 bg-gray-50 dark:bg-gray-900"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="prose prose-lg dark:prose-invert mx-auto"> <h2>Understanding Your Business Insurance Needs</h2> <p>
This calculator provides personalized estimates based on your business profile, industry standards, 
            and common risk factors. The recommendations are designed to help you understand the types of coverage 
            most relevant to your business and approximate costs.
</p> <h3>Key Coverage Types Evaluated</h3> <ul> <li><strong>General Liability:</strong> Essential for virtually every business, protecting against third-party injury and property damage claims</li> <li><strong>Professional Liability:</strong> Critical for service-based businesses, covering errors and omissions in professional services</li> <li><strong>Commercial Property:</strong> Protects business property, equipment, and inventory from damage or theft</li> <li><strong>Workers' Compensation:</strong> Required in most states for businesses with employees, covering workplace injuries</li> <li><strong>Cyber Liability:</strong> Increasingly important for businesses handling sensitive data or relying on technology</li> <li><strong>Commercial Auto:</strong> Necessary for businesses that own vehicles or have employees driving for work</li> </ul> <h3>Factors That Affect Your Premium</h3> <p>
Several factors influence your business insurance costs:
</p> <ul> <li><strong>Industry Risk Level:</strong> Some industries have higher claim frequencies and costs</li> <li><strong>Business Size:</strong> Revenue and employee count directly impact coverage needs and costs</li> <li><strong>Location:</strong> State requirements and regional risk factors affect pricing</li> <li><strong>Claims History:</strong> Past claims can impact future premiums</li> <li><strong>Coverage Limits:</strong> Higher limits provide better protection but increase costs</li> <li><strong>Deductibles:</strong> Higher deductibles reduce premiums but increase out-of-pocket costs</li> </ul> <h3>How to Use These Results</h3> <p>
Use this calculator's results as a starting point for your business insurance planning:
</p> <ol> <li><strong>Review Coverage Recommendations:</strong> Understand which types of insurance are most important for your business</li> <li><strong>Get Professional Quotes:</strong> Contact licensed insurance agents for accurate quotes and policy details</li> <li><strong>Compare Options:</strong> Obtain quotes from multiple insurers to ensure competitive pricing</li> <li><strong>Review Policy Terms:</strong> Carefully read exclusions, limitations, and coverage details</li> <li><strong>Reassess Regularly:</strong> Update your coverage as your business grows and changes</li> </ol> <h3>Important Considerations</h3> <p>
Keep these factors in mind when shopping for business insurance:
</p> <ul> <li><strong>State Requirements:</strong> Some coverage types are legally required in certain states</li> <li><strong>Contract Requirements:</strong> Clients or lenders may require specific coverage types and limits</li> <li><strong>Bundle Discounts:</strong> Business Owner's Policies (BOPs) can provide cost savings</li> <li><strong>Industry Associations:</strong> Trade groups may offer group insurance programs with discounted rates</li> </ul> <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-700"> <h4 class="text-yellow-800 dark:text-yellow-200 font-semibold mb-2">Important Notice</h4> <p class="text-yellow-700 dark:text-yellow-300 text-sm">
This calculator provides estimates based on industry averages and general business characteristics. 
              Actual insurance needs and costs vary significantly based on specific business operations, location, 
              claims history, and other factors. Always consult with licensed insurance professionals for 
              personalized advice and accurate quotes.
</p> </div> </div> </div> </section> <!-- Related Resources --> <section class="py-12 bg-white dark:bg-gray-800"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
Related Business Insurance Resources
</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> <a href="/business-insurance/guide/" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
Complete Business Insurance Guide
</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Comprehensive guide covering all aspects of business insurance, from basics to advanced strategies.
</p> </a> <a href="/business-insurance/small-business/" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
Small Business Insurance
</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Specialized guidance for small business insurance needs, costs, and requirements.
</p> </a> <a href="/business-insurance/general-liability/" class="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg hover:shadow-lg transition-shadow"> <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
General Liability Insurance
</h3> <p class="text-gray-600 dark:text-gray-300 text-sm">
Everything you need to know about general liability coverage for your business.
</p> </a> </div> </div> </section> <!-- AdSense Block --> ${renderComponent($$result2, "AdSenseBlock", $$AdSenseBlock, { "slot": "bottom-content" })} </main> ` })}`;
}, "C:/Mirza/Websites/Insurance/src/pages/tools/business-insurance-calculator/index.astro", void 0);

const $$file = "C:/Mirza/Websites/Insurance/src/pages/tools/business-insurance-calculator/index.astro";
const $$url = "/tools/business-insurance-calculator";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
