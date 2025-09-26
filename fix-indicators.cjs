const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Mirza\\Websites\\Insurance\\src\\components\\calculators\\AutoInsuranceCalculator.astro';

// Read the file
let content = fs.readFileSync(filePath, 'utf8');

// The indicator HTML to add
const liveRateIndicator = `        <!-- Live Rate Indicator -->
        <div class="flex items-center mb-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-200 dark:border-red-700">
          <div class="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg mr-3 ring-2 ring-red-200"></div>
          <span class="text-sm font-bold text-green-700 dark:text-green-300 tracking-wide">🟢 LIVE RATE DATA</span>
        </div>`;

// Add to Standard coverage sections
content = content.replace(
  /(<div id="standardCoverage" class="coverage-panel hidden">)\s*(<div class="text-3xl)/g,
  `$1\n${liveRateIndicator}\n        $2`
);

// Add to Premium coverage sections
content = content.replace(
  /(<div id="premiumCoverage" class="coverage-panel hidden">)\s*(<div class="text-3xl)/g,
  `$1\n${liveRateIndicator}\n        $2`
);

// Write the file back
fs.writeFileSync(filePath, content);

console.log('✅ Successfully added Live Rate indicators to Standard and Premium coverage sections!');