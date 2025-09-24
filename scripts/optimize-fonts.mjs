#!/usr/bin/env node

/**
 * Font Optimization Script
 * Creates optimal font loading and removes unnecessary Google Font dependencies
 * Uses system fonts with enhanced fallbacks for maximum performance
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';

console.log('🔤 Font Optimization & Self-Hosting');
console.log('===================================');

// Enhanced system font stack with better fallbacks
const OPTIMIZED_FONT_STACK = {
  sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  mono: `ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace`,
  serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`
};

// Create optimized font CSS
const FONT_CSS = `/* Optimized Font System - Self-Hosted Alternative */
/* Ultra-fast system fonts with enhanced fallbacks */

:root {
  /* Font families */
  --font-sans: ${OPTIMIZED_FONT_STACK.sans};
  --font-mono: ${OPTIMIZED_FONT_STACK.mono};
  --font-serif: ${OPTIMIZED_FONT_STACK.serif};
  
  /* Font weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  /* Font sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  
  /* Line heights */
  --line-height-tight: 1.25;
  --line-height-snug: 1.375;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.625;
  --line-height-loose: 2;
}

/* Base font settings with optimal rendering */
html {
  font-family: var(--font-sans);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  font-family: inherit;
  font-weight: var(--font-weight-normal);
  line-height: inherit;
}

/* Utility classes for different font families */
.font-sans { font-family: var(--font-sans); }
.font-mono { font-family: var(--font-mono); }
.font-serif { font-family: var(--font-serif); }

/* Font weight utilities */
.font-light { font-weight: var(--font-weight-light); }
.font-normal { font-weight: var(--font-weight-normal); }
.font-medium { font-weight: var(--font-weight-medium); }
.font-semibold { font-weight: var(--font-weight-semibold); }
.font-bold { font-weight: var(--font-weight-bold); }

/* Headings with optimal font settings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin: 0;
}

h1 { font-size: var(--font-size-5xl); }
h2 { font-size: var(--font-size-4xl); }
h3 { font-size: var(--font-size-3xl); }
h4 { font-size: var(--font-size-2xl); }
h5 { font-size: var(--font-size-xl); }
h6 { font-size: var(--font-size-lg); }

/* Performance optimizations for text */
p, li, span, div {
  text-rendering: optimizeSpeed;
}

/* Code and pre elements */
code, pre, kbd, samp {
  font-family: var(--font-mono);
  font-size: 0.875em;
}

/* Form elements with consistent fonts */
input, textarea, select, button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

/* Responsive typography */
@media (max-width: 640px) {
  html {
    font-size: 0.875rem;
  }
  
  h1 { font-size: var(--font-size-3xl); }
  h2 { font-size: var(--font-size-2xl); }
  h3 { font-size: var(--font-size-xl); }
}

/* Print styles */
@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  
  html {
    font-family: var(--font-serif);
    font-size: 12pt;
    line-height: 1.4;
  }
}`;

function updateBaseLayout() {
  console.log('🔧 Updating BaseLayout.astro...');
  
  const layoutPath = 'src/layouts/BaseLayout.astro';
  let content = readFileSync(layoutPath, 'utf8');
  
  // Remove Google Fonts DNS prefetch and preconnect (not needed for system fonts)
  content = content.replace(/\s*<link rel="dns-prefetch" href="\/\/fonts\.googleapis\.com" \/>\s*/g, '');
  content = content.replace(/\s*<link rel="dns-prefetch" href="\/\/fonts\.gstatic\.com" \/>\s*/g, '');
  content = content.replace(/\s*<link rel="preconnect" href="https:\/\/fonts\.googleapis\.com" crossorigin \/>\s*/g, '');
  content = content.replace(/\s*<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin \/>\s*/g, '');
  
  // Add optimized font CSS
  const fontLinkInsert = `    
    <!-- Optimized System Fonts (Self-Hosted Performance) -->
    <link rel="preload" href="/assets/css/optimized-fonts.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/assets/css/optimized-fonts.css"></noscript>`;
  
  // Insert before closing head tag
  content = content.replace('</head>', `${fontLinkInsert}\n  </head>`);
  
  writeFileSync(layoutPath, content);
  console.log('   ✅ Removed unnecessary Google Fonts references');
  console.log('   ✅ Added optimized font loading');
}

function updateCriticalCSS() {
  console.log('🎨 Updating Critical CSS component...');
  
  const criticalCSSPath = 'src/components/CriticalCSS.astro';
  let content = readFileSync(criticalCSSPath, 'utf8');
  
  // Update font-family references to use CSS custom properties
  content = content.replace(
    /font-family:ui-sans-serif[^;]+;/g,
    'font-family:var(--font-sans);'
  );
  
  writeFileSync(criticalCSSPath, content);
  console.log('   ✅ Updated critical CSS with optimized font variables');
}

function updateTailwindConfig() {
  console.log('⚙️ Checking Tailwind configuration...');
  
  const tailwindPath = 'tailwind.config.mjs';
  
  if (existsSync(tailwindPath)) {
    let content = readFileSync(tailwindPath, 'utf8');
    
    // Add optimized font family configuration
    const fontFamilyConfig = `
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },`;
    
    // Insert font configuration if it doesn't exist
    if (!content.includes('fontFamily')) {
      content = content.replace(
        /theme:\s*{/,
        `theme: {\n    ${fontFamilyConfig.trim()}`
      );
      writeFileSync(tailwindPath, content);
      console.log('   ✅ Updated Tailwind config with optimized fonts');
    } else {
      console.log('   ✓ Tailwind font config already exists');
    }
  }
}

// Main optimization process
async function main() {
  try {
    // Create optimized font CSS file
    writeFileSync('public/assets/css/optimized-fonts.css', FONT_CSS);
    console.log('✅ Generated: public/assets/css/optimized-fonts.css');
    
    updateBaseLayout();
    updateCriticalCSS();
    updateTailwindConfig();
    
    console.log('\n🎉 FONT OPTIMIZATION COMPLETE!');
    console.log('==============================');
    console.log('✅ System fonts optimized with enhanced fallbacks');
    console.log('✅ Removed unnecessary Google Fonts dependencies');
    console.log('✅ Added CSS custom properties for consistent typography');
    console.log('✅ Optimized font loading with preload strategy');
    console.log('✅ Enhanced text rendering performance');
    console.log('\n📈 Performance Benefits:');
    console.log('• Zero network requests for fonts');
    console.log('• Instant font rendering (no FOUT/FOIT)');
    console.log('• Reduced DNS lookups and connections');
    console.log('• Better Core Web Vitals (CLS prevention)');
    console.log('• Perfect font matching across all devices');
    console.log('• Consistent typography system');
    
    return true;
    
  } catch (error) {
    console.error('❌ Font optimization failed:', error.message);
    return false;
  }
}

main().catch(console.error);