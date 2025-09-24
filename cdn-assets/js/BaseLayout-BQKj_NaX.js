import { c as createComponent, a as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, g as renderSlot, h as defineScriptVars, r as renderComponent, i as renderHead, u as unescapeHTML } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
/* empty css                         */
import { g as getCollection } from './_astro_content-g0nzSzKf.js';
import 'clsx';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<button id="theme-toggle" data-theme-toggle type="button" class="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm" aria-label="Switch theme" title="Switch between light and dark theme" onclick="toggleThemeSimple();"> <!-- Sun icon - shows in dark mode to indicate "switch to light" --> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 hidden dark:block text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 711.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path> </svg> <!-- Moon icon - shows in light mode to indicate "switch to dark" --> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 dark:hidden text-gray-800" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path d="M17.293 13.293A8 8 0 716.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <span class="hidden sm:inline">Theme</span> </button> <script>
  // Simple, reliable theme toggle function
  function toggleThemeSimple() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    console.log('Current theme state - isDark:', isDark);
    
    if (isDark) {
      // Switch to light mode
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
      console.log('Switched to light mode');
    } else {
      // Switch to dark mode  
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Switched to dark mode');
    }
    
    // Ensure h-full is preserved
    html.classList.add('h-full');
  }
<\/script>`])), maybeRenderHead());
}, "C:/Mirza/Websites/Insurance/src/components/ThemeToggle.astro", void 0);

const SITE = {
  URL: "https://sezarr.com",
  NAME: "Sezarr",
  TAGLINE: "Your Smart Insurance Guide",
  ADSENSE_CLIENT: "ca-pub-1189140861538062",
  SOCIAL: {
    TWITTER: "@Sezarr"
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://sezarr.com");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = SITE.NAME,
    description = "Independent, practical insurance guides for Americans. Compare rates, understand coverage, and make confident decisions.",
    url = SITE.URL,
    image = "/og-default.jpg",
    type = "website",
    schema = {},
    noindex = false,
    publishedDate,
    modifiedDate,
    author = {
      name: SITE.NAME,
      url: SITE.URL
    },
    category,
    tags = [],
    breadcrumbs = []
  } = Astro2.props;
  const currentPath = new URL(Astro2.url).pathname;
  const allPosts = await getCollection("posts");
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/tools/auto-insurance-calculator/index.astro": () => import('./index-B18Z_6_T.js').then(n => n._),"../pages/tools/business-insurance-calculator/index.astro": () => import('./index-BAXpq5ZI.js').then(n => n._),"../pages/tools/claims-probability-calculator/index.astro": () => import('./index-AfXJBjNf.js').then(n => n._),"../pages/tools/disability-insurance-calculator/index.astro": () => import('./index-CsCSkCuD.js').then(n => n._),"../pages/tools/index.astro": () => import('./index-BYLRwRV6.js').then(n => n._),"../pages/tools/life-insurance-calculator/index.astro": () => import('./index-BAouNhex.js').then(n => n._),"../pages/tools/pet-insurance-calculator/index.astro": () => import('./index-DJx0TpGb.js').then(n => n._),"../pages/tools/travel-insurance-calculator/index.astro": () => import('./index-D2_-475X.js').then(n => n._)}), () => "../pages/tools/**/index.astro");
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/auto-insurance/index.astro": () => import('./index-DcEtWXUF.js').then(n => n._),"../pages/business-insurance/index.astro": () => import('./index-X91-rwBg.js').then(n => n._),"../pages/disability-insurance/index.astro": () => import('./index-BZjDLYck.js').then(n => n._),"../pages/health-insurance/index.astro": () => import('./index-FE7-9P-F.js').then(n => n._),"../pages/homeowners-insurance/index.astro": () => import('./index-CGdMLY0t.js').then(n => n._),"../pages/life-insurance/index.astro": () => import('./index-D12_0NKx.js').then(n => n._),"../pages/pet-insurance/index.astro": () => import('./index-c-eGN2PI.js').then(n => n._),"../pages/travel-insurance/index.astro": () => import('./index-B-aOvyYk.js').then(n => n._)}), () => "../pages/*-insurance/index.astro");
  const blogCategories = [...new Set(allPosts.map((post) => post.data.category))].map((cat) => {
    const categoryMapping = {
      "auto": { url: "/blog/auto/", name: "Auto Insurance", icon: "\u{1F697}" },
      "business": { url: "/blog/business/", name: "Business Insurance", icon: "\u{1F3E2}" },
      "health": { url: "/blog/health/", name: "Health Insurance", icon: "\u{1F3E5}" },
      "homeowners": { url: "/blog/homeowners/", name: "Home Insurance", icon: "\u{1F3E0}" },
      "life": { url: "/blog/life/", name: "Life Insurance", icon: "\u{1F4B0}" },
      "travel": { url: "/blog/travel/", name: "Travel Insurance", icon: "\u2708\uFE0F" },
      "pets": { url: "/blog/pets/", name: "Pet Insurance", icon: "\u{1F415}" },
      "disability": { url: "/blog/disability/", name: "Disability Insurance", icon: "\u{1F9BD}" }
    };
    return categoryMapping[cat] || { url: `/blog/${cat}/`, name: cat.charAt(0).toUpperCase() + cat.slice(1), icon: "\u{1F4C4}" };
  }).sort((a, b) => a.name.localeCompare(b.name));
  const toolsData = [
    { url: "/tools/", name: "All Tools", icon: "\u{1F9EE}" },
    { url: "/tools/auto-insurance-calculator/", name: "Auto Calculator", icon: "\u{1F697}" },
    { url: "/tools/business-insurance-calculator/", name: "Business Calculator", icon: "\u{1F3E2}" },
    { url: "/tools/claims-probability-calculator/", name: "Claims Calculator", icon: "\u{1F4CB}" },
    { url: "/tools/disability-insurance-calculator/", name: "Disability Calculator", icon: "\u{1F9BD}" },
    { url: "/tools/life-insurance-calculator/", name: "Life Calculator", icon: "\u{1F4B0}" },
    { url: "/tools/pet-insurance-calculator/", name: "Pet Calculator", icon: "\u{1F415}" },
    { url: "/tools/travel-insurance-calculator/", name: "Travel Calculator", icon: "\u2708\uFE0F" }
  ];
  const insuranceData = [
    { url: "/auto-insurance/", name: "Auto Insurance", icon: "\u{1F697}" },
    { url: "/business-insurance/", name: "Business Insurance", icon: "\u{1F3E2}" },
    { url: "/travel-insurance/", name: "Travel Insurance", icon: "\u2708\uFE0F" },
    { url: "/pet-insurance/", name: "Pet Insurance", icon: "\u{1F415}" },
    { url: "/health-insurance/", name: "Health Insurance", icon: "\u{1F3E5}" },
    { url: "/homeowners-insurance/", name: "Home Insurance", icon: "\u{1F3E0}" },
    { url: "/life-insurance/", name: "Life Insurance", icon: "\u{1F4B0}" },
    { url: "/disability-insurance/", name: "Disability Insurance", icon: "\u{1F9BD}" }
  ];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate(_b || (_b = __template(['<html lang="en" class="h-full" itemscope itemtype="http://schema.org/WebSite"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><!-- SEO Meta Tags --><title>', '</title><meta name="description"', '><link rel="canonical"', ">", '<!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Critical Resource Hints for Performance --><link rel="dns-prefetch" href="//cdn.jsdelivr.net"><link rel="dns-prefetch" href="//fonts.googleapis.com"><link rel="dns-prefetch" href="//fonts.gstatic.com"><link rel="dns-prefetch" href="//unpkg.com"><!-- Preconnect for critical third-party domains --><link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload critical local assets --><link rel="preload" href="/scripts/enhancedThemeScript.js" as="script"><link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml"><!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"><link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"><link rel="manifest" href="/site.webmanifest"><!-- Schema.org -->', "<!-- Theme Script - Load immediately to prevent flash --><script>\n      // Initialize theme before page renders to prevent flash\n      (function() {\n        const theme = localStorage.getItem('theme') || \n                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');\n        \n        if (theme === 'dark') {\n          document.documentElement.classList.add('dark');\n        } else {\n          document.documentElement.classList.remove('dark');\n        }\n      })();\n    <\/script><!-- Enhanced theme script --><!-- Theme Script with CDN Fallback --><script>\n      // Load theme script with optimized fallback\n      (function() {\n        // Try to load local script directly since CDN requires GitHub repo\n        const script = document.createElement('script');\n        script.src = '/scripts/enhancedThemeScript.js';\n        script.async = true;\n        \n        // Add error handling for future CDN integration\n        script.onerror = function() {\n          console.warn('Theme script failed to load');\n          // Basic theme fallback\n          if (localStorage.getItem('theme') === 'dark') {\n            document.documentElement.classList.add('dark');\n          }\n        };\n        \n        document.head.appendChild(script);\n      })();\n    <\/script><!-- Inline critical performance optimizations --><script>\n      // Register service worker\n      if ('serviceWorker' in navigator) {\n        window.addEventListener('load', function() {\n          navigator.serviceWorker.register('/sw.js');\n        });\n      }\n      \n      // Lazy load images\n      if ('IntersectionObserver' in window) {\n        const imageObserver = new IntersectionObserver((entries) => {\n          entries.forEach(entry => {\n            if (entry.isIntersecting) {\n              const img = entry.target;\n              if (img.dataset.src) {\n                img.src = img.dataset.src;\n                img.removeAttribute('data-src');\n              }\n              img.loading = 'lazy';\n              imageObserver.unobserve(img);\n            }\n          });\n        });\n        \n        document.addEventListener('DOMContentLoaded', () => {\n          document.querySelectorAll('img[data-src]').forEach(img => {\n            imageObserver.observe(img);\n          });\n        });\n      }\n    <\/script>", '</head> <body class="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100" role="document"> <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded-md z-50 font-medium">Skip to main content</a> <header class="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700" role="banner"> <div class="mx-auto w-full max-w-[var(--max-w)] px-4 py-4 md:py-3"> <!-- Desktop & Mobile Header --> <div class="flex items-center justify-between"> <!-- Brand --> <div role="banner" aria-label="Site brand"> <a href="/" class="font-bold text-xl text-gray-900 dark:text-gray-100 no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Go to homepage"> <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" aria-label="Sezarr Insurance">Sezarr</span> </a> </div> <!-- Desktop Navigation --> <nav class="hidden md:flex gap-6 text-sm items-center" role="navigation" aria-label="Main navigation"> <ul class="flex items-center gap-6 list-none" role="list"> <li role="listitem"> <a href="/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Home</a> </li> <!-- Tools Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="tools-menu">\nTools\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="tools-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="tools-button"> <div class="py-2"> ', ' </div> </div> </li> <!-- Insurance Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="insurance-menu">\nInsurance\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="insurance-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="insurance-button"> <div class="py-2"> ', ' </div> </div> </li> <!-- Blog Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="blog-menu">\nBlog\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="blog-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="blog-button"> <div class="py-2"> <a href="/blog/" class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">\u{1F4DD}</span>\nBlog Home\n</a> <a href="/posts/" class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">\u{1F4DA}</span>\nAll Articles\n</a> <div class="border-t border-gray-200 dark:border-gray-600 my-1"></div> ', ' </div> </div> </li> <!-- Search Bar --> <li role="listitem" class="relative"> <form action="/search/" method="GET" class="relative"> <input type="search" name="q" id="nav-search" placeholder="Search..." class="w-48 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" aria-label="Search site" autocomplete="off"> <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 focus:outline-none focus:text-blue-600" aria-label="Submit search"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> <!-- Search Dropdown --> <div id="nav-search-results" class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 z-50 max-h-80 overflow-y-auto"> <div id="nav-search-list" class="py-2"> <!-- Search results will be populated here --> </div> </div> </form> </li> <li role="listitem"> <a href="/about/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>About</a> </li> <li role="listitem"> <a href="/contact/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Contact</a> </li> <li role="listitem"> ', ' </li> </ul> </nav> <!-- Mobile Menu Button --> <div class="md:hidden flex items-center"> <button id="mobile-menu-button" type="button" class="p-3 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-expanded="false" aria-controls="mobile-menu" aria-haspopup="true" aria-label="Toggle navigation menu"> <span class="sr-only">Toggle navigation menu</span> <svg id="menu-icon-open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> <svg id="menu-icon-close" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile Navigation Menu --> <nav id="mobile-menu" class="md:hidden hidden mt-4 pb-4 border-t dark:border-gray-700" role="navigation" aria-label="Mobile navigation"> <div class="pt-4 space-y-6"> <section aria-labelledby="mobile-main-heading"> <h2 id="mobile-main-heading" class="sr-only">Main Navigation</h2> <ul class="space-y-3 list-none" role="list"> <li><a href="/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>Home</a></li> <!-- Mobile Tools Section --> <li> <div class="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tools</div> <ul class="ml-4 space-y-1"> ', ' </ul> </li> <!-- Mobile Insurance Section --> <li> <div class="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Insurance</div> <ul class="ml-4 space-y-1"> ', ' </ul> </li> <!-- Mobile Blog Section --> <li> <div class="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Blog</div> <ul class="ml-4 space-y-1"> <li> <a href="/blog/" class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]"> <span class="mr-3 text-base">\u{1F4DD}</span>\nBlog Home\n</a> </li> <li> <a href="/posts/" class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]"> <span class="mr-3 text-base">\u{1F4DA}</span>\nAll Articles\n</a> </li> ', ' </ul> </li> <!-- Mobile Search Bar --> <li class="px-4"> <form action="/search/" method="GET" class="relative"> <input type="search" name="q" id="mobile-search" placeholder="Search..." class="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]" aria-label="Search site" autocomplete="off"> <button type="submit" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 focus:outline-none focus:text-blue-600 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Submit search"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> <!-- Mobile Search Dropdown --> <div id="mobile-search-results" class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 z-50 max-h-80 overflow-y-auto"> <div id="mobile-search-list" class="py-2"> <!-- Search results will be populated here --> </div> </div> </form> </li> <li><a href="/about/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>About</a></li> <li><a href="/contact/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>Contact</a></li> <li class="px-4 py-3"> ', " </li> </ul> </section> </div> </nav> </div> <!-- Mobile Menu JavaScript --> <script>\n        (function() {\n          function initMobileMenu() {\n            const menuButton = document.getElementById('mobile-menu-button');\n            const mobileMenu = document.getElementById('mobile-menu');\n            const openIcon = document.getElementById('menu-icon-open');\n            const closeIcon = document.getElementById('menu-icon-close');\n            \n            if (!menuButton || !mobileMenu || !openIcon || !closeIcon) {\n              return;\n            }\n            \n            let isMenuOpen = false;\n            \n            function toggleMenu() {\n              isMenuOpen = !isMenuOpen;\n              \n              if (isMenuOpen) {\n                mobileMenu.classList.remove('hidden');\n                openIcon.classList.add('hidden');\n                closeIcon.classList.remove('hidden');\n                menuButton.setAttribute('aria-expanded', 'true');\n              } else {\n                mobileMenu.classList.add('hidden');\n                openIcon.classList.remove('hidden');\n                closeIcon.classList.add('hidden');\n                menuButton.setAttribute('aria-expanded', 'false');\n              }\n            }\n            \n            menuButton.addEventListener('click', toggleMenu);\n            \n            // Close menu when clicking on a link\n            const mobileLinks = mobileMenu.querySelectorAll('a');\n            mobileLinks.forEach(link => {\n              link.addEventListener('click', () => {\n                if (isMenuOpen) {\n                  toggleMenu();\n                }\n              });\n            });\n            \n            // Close menu on escape key\n            document.addEventListener('keydown', (e) => {\n              if (e.key === 'Escape' && isMenuOpen) {\n                toggleMenu();\n              }\n            });\n            \n            // Close menu when clicking outside\n            document.addEventListener('click', (e) => {\n              if (isMenuOpen && !menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {\n                toggleMenu();\n              }\n            });\n          }\n          \n          // Initialize when DOM is ready\n          if (document.readyState === 'loading') {\n            document.addEventListener('DOMContentLoaded', initMobileMenu);\n          } else {\n            initMobileMenu();\n          }\n        })();\n      <\/script> <!-- Search Functionality --> <script>(function(){", `
        (function() {
          function initSearch() {
            const navSearch = document.getElementById('nav-search');
            const navResults = document.getElementById('nav-search-results');
            const navList = document.getElementById('nav-search-list');
            
            const mobileSearch = document.getElementById('mobile-search');
            const mobileResults = document.getElementById('mobile-search-results');
            const mobileList = document.getElementById('mobile-search-list');
            
            if (!navSearch || !mobileSearch) return;
            
            function renderResults(items, listElement, resultsElement) {
              if (items.length === 0) {
                resultsElement.classList.add('opacity-0', 'invisible');
                return;
              }
              
              const html = items.slice(0, 5).map(item => \`
                <a href="/posts/\${item.slug}/" class="flex items-start px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-b border-gray-100 dark:border-gray-600 last:border-b-0 transition-colors">
                  <div class="flex-1">
                    <div class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">\${item.title}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">\${item.description}</div>
                    <div class="text-xs text-blue-600 dark:text-blue-400 mt-1 capitalize">\${item.category} Insurance</div>
                  </div>
                </a>
              \`).join('');
              
              if (items.length > 5) {
                listElement.innerHTML = html + \`
                  <div class="px-4 py-2 text-center">
                    <a href="/search/?q=\${encodeURIComponent(navSearch.value || mobileSearch.value)}" class="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                      View all \${items.length} results \u2192
                    </a>
                  </div>
                \`;
              } else {
                listElement.innerHTML = html;
              }
              
              resultsElement.classList.remove('opacity-0', 'invisible');
            }
            
            function performSearch(query) {
              if (!query || query.length < 2) {
                navResults.classList.add('opacity-0', 'invisible');
                mobileResults.classList.add('opacity-0', 'invisible');
                return;
              }
              
              const searchTerm = query.toLowerCase();
              const results = searchData.filter(item => 
                item.title.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
              ).sort((a, b) => {
                // Prioritize title matches
                const aTitleMatch = a.title.toLowerCase().includes(searchTerm);
                const bTitleMatch = b.title.toLowerCase().includes(searchTerm);
                if (aTitleMatch && !bTitleMatch) return -1;
                if (!aTitleMatch && bTitleMatch) return 1;
                return 0;
              });
              
              renderResults(results, navList, navResults);
              renderResults(results, mobileList, mobileResults);
            }
            
            // Desktop search
            navSearch.addEventListener('input', (e) => {
              performSearch(e.target.value);
            });
            
            navSearch.addEventListener('focus', () => {
              if (navSearch.value.length >= 2) {
                performSearch(navSearch.value);
              }
            });
            
            // Mobile search  
            mobileSearch.addEventListener('input', (e) => {
              performSearch(e.target.value);
            });
            
            mobileSearch.addEventListener('focus', () => {
              if (mobileSearch.value.length >= 2) {
                performSearch(mobileSearch.value);
              }
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
              if (!navSearch.contains(e.target) && !navResults.contains(e.target)) {
                navResults.classList.add('opacity-0', 'invisible');
              }
              if (!mobileSearch.contains(e.target) && !mobileResults.contains(e.target)) {
                mobileResults.classList.add('opacity-0', 'invisible');
              }
            });
            
            // Close on escape
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') {
                navResults.classList.add('opacity-0', 'invisible');
                mobileResults.classList.add('opacity-0', 'invisible');
              }
            });
          }
          
          // Initialize when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSearch);
          } else {
            initSearch();
          }
        })();
      })();<\/script> </header> <main id="main" class="flex-1" role="main"> <div class="main-content"> <div class="mx-auto w-full max-w-[var(--max-w)] px-4"></div> `, ' </div> </main> <footer class="border-t mt-12 dark:border-gray-700" role="contentinfo" aria-labelledby="footer-heading"> <h2 id="footer-heading" class="sr-only">Footer</h2> <div class="mx-auto w-full max-w-[var(--max-w)] px-4 py-8 grid md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-400"> <section aria-labelledby="footer-about"> <h3 id="footer-about" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">', '</h3> <p>Smart insurance decisions made simple. We may earn from affiliate links. Not financial advice.</p> </section> <nav aria-labelledby="footer-legal"> <h3 id="footer-legal" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Legal</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/privacy/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Privacy Policy</a></li> <li><a href="/terms/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Terms</a></li> <li><a href="/disclaimer/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Disclaimer</a></li> <li><a href="/affiliate-disclosure/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Affiliate Disclosure</a></li> </ul> </nav> <nav aria-labelledby="footer-categories"> <h3 id="footer-categories" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Categories</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/auto-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Auto Insurance</a></li> <li><a href="/health-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Health Insurance</a></li> <li><a href="/homeowners-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Homeowners Insurance</a></li> <li><a href="/life-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Life Insurance</a></li> </ul> </nav> <nav aria-labelledby="footer-connect"> <h3 id="footer-connect" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Connect</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/contact/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Contact</a></li> <li><a href="/about/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>About Us</a></li> <li><a href="/sitemap-index.xml" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1">Sitemap</a></li> </ul> </nav> </div> <div class="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t dark:border-gray-700"> <small>\xA9 ', " ", ". All rights reserved.</small> </div> </footer> </body></html>"], ['<html lang="en" class="h-full" itemscope itemtype="http://schema.org/WebSite"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><!-- SEO Meta Tags --><title>', '</title><meta name="description"', '><link rel="canonical"', ">", '<!-- Open Graph --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:url"', '><meta property="og:type"', '><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><!-- Critical Resource Hints for Performance --><link rel="dns-prefetch" href="//cdn.jsdelivr.net"><link rel="dns-prefetch" href="//fonts.googleapis.com"><link rel="dns-prefetch" href="//fonts.gstatic.com"><link rel="dns-prefetch" href="//unpkg.com"><!-- Preconnect for critical third-party domains --><link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload critical local assets --><link rel="preload" href="/scripts/enhancedThemeScript.js" as="script"><link rel="preload" href="/favicon.svg" as="image" type="image/svg+xml"><!-- Favicons --><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"><link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"><link rel="manifest" href="/site.webmanifest"><!-- Schema.org -->', "<!-- Theme Script - Load immediately to prevent flash --><script>\n      // Initialize theme before page renders to prevent flash\n      (function() {\n        const theme = localStorage.getItem('theme') || \n                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');\n        \n        if (theme === 'dark') {\n          document.documentElement.classList.add('dark');\n        } else {\n          document.documentElement.classList.remove('dark');\n        }\n      })();\n    <\/script><!-- Enhanced theme script --><!-- Theme Script with CDN Fallback --><script>\n      // Load theme script with optimized fallback\n      (function() {\n        // Try to load local script directly since CDN requires GitHub repo\n        const script = document.createElement('script');\n        script.src = '/scripts/enhancedThemeScript.js';\n        script.async = true;\n        \n        // Add error handling for future CDN integration\n        script.onerror = function() {\n          console.warn('Theme script failed to load');\n          // Basic theme fallback\n          if (localStorage.getItem('theme') === 'dark') {\n            document.documentElement.classList.add('dark');\n          }\n        };\n        \n        document.head.appendChild(script);\n      })();\n    <\/script><!-- Inline critical performance optimizations --><script>\n      // Register service worker\n      if ('serviceWorker' in navigator) {\n        window.addEventListener('load', function() {\n          navigator.serviceWorker.register('/sw.js');\n        });\n      }\n      \n      // Lazy load images\n      if ('IntersectionObserver' in window) {\n        const imageObserver = new IntersectionObserver((entries) => {\n          entries.forEach(entry => {\n            if (entry.isIntersecting) {\n              const img = entry.target;\n              if (img.dataset.src) {\n                img.src = img.dataset.src;\n                img.removeAttribute('data-src');\n              }\n              img.loading = 'lazy';\n              imageObserver.unobserve(img);\n            }\n          });\n        });\n        \n        document.addEventListener('DOMContentLoaded', () => {\n          document.querySelectorAll('img[data-src]').forEach(img => {\n            imageObserver.observe(img);\n          });\n        });\n      }\n    <\/script>", '</head> <body class="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100" role="document"> <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded-md z-50 font-medium">Skip to main content</a> <header class="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700" role="banner"> <div class="mx-auto w-full max-w-[var(--max-w)] px-4 py-4 md:py-3"> <!-- Desktop & Mobile Header --> <div class="flex items-center justify-between"> <!-- Brand --> <div role="banner" aria-label="Site brand"> <a href="/" class="font-bold text-xl text-gray-900 dark:text-gray-100 no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Go to homepage"> <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" aria-label="Sezarr Insurance">Sezarr</span> </a> </div> <!-- Desktop Navigation --> <nav class="hidden md:flex gap-6 text-sm items-center" role="navigation" aria-label="Main navigation"> <ul class="flex items-center gap-6 list-none" role="list"> <li role="listitem"> <a href="/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Home</a> </li> <!-- Tools Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="tools-menu">\nTools\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="tools-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="tools-button"> <div class="py-2"> ', ' </div> </div> </li> <!-- Insurance Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="insurance-menu">\nInsurance\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="insurance-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="insurance-button"> <div class="py-2"> ', ' </div> </div> </li> <!-- Blog Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="blog-menu">\nBlog\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="blog-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="blog-button"> <div class="py-2"> <a href="/blog/" class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">\u{1F4DD}</span>\nBlog Home\n</a> <a href="/posts/" class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">\u{1F4DA}</span>\nAll Articles\n</a> <div class="border-t border-gray-200 dark:border-gray-600 my-1"></div> ', ' </div> </div> </li> <!-- Search Bar --> <li role="listitem" class="relative"> <form action="/search/" method="GET" class="relative"> <input type="search" name="q" id="nav-search" placeholder="Search..." class="w-48 px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" aria-label="Search site" autocomplete="off"> <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 focus:outline-none focus:text-blue-600" aria-label="Submit search"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> <!-- Search Dropdown --> <div id="nav-search-results" class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 z-50 max-h-80 overflow-y-auto"> <div id="nav-search-list" class="py-2"> <!-- Search results will be populated here --> </div> </div> </form> </li> <li role="listitem"> <a href="/about/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>About</a> </li> <li role="listitem"> <a href="/contact/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Contact</a> </li> <li role="listitem"> ', ' </li> </ul> </nav> <!-- Mobile Menu Button --> <div class="md:hidden flex items-center"> <button id="mobile-menu-button" type="button" class="p-3 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-expanded="false" aria-controls="mobile-menu" aria-haspopup="true" aria-label="Toggle navigation menu"> <span class="sr-only">Toggle navigation menu</span> <svg id="menu-icon-open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> <svg id="menu-icon-close" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile Navigation Menu --> <nav id="mobile-menu" class="md:hidden hidden mt-4 pb-4 border-t dark:border-gray-700" role="navigation" aria-label="Mobile navigation"> <div class="pt-4 space-y-6"> <section aria-labelledby="mobile-main-heading"> <h2 id="mobile-main-heading" class="sr-only">Main Navigation</h2> <ul class="space-y-3 list-none" role="list"> <li><a href="/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>Home</a></li> <!-- Mobile Tools Section --> <li> <div class="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tools</div> <ul class="ml-4 space-y-1"> ', ' </ul> </li> <!-- Mobile Insurance Section --> <li> <div class="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Insurance</div> <ul class="ml-4 space-y-1"> ', ' </ul> </li> <!-- Mobile Blog Section --> <li> <div class="px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Blog</div> <ul class="ml-4 space-y-1"> <li> <a href="/blog/" class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]"> <span class="mr-3 text-base">\u{1F4DD}</span>\nBlog Home\n</a> </li> <li> <a href="/posts/" class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]"> <span class="mr-3 text-base">\u{1F4DA}</span>\nAll Articles\n</a> </li> ', ' </ul> </li> <!-- Mobile Search Bar --> <li class="px-4"> <form action="/search/" method="GET" class="relative"> <input type="search" name="q" id="mobile-search" placeholder="Search..." class="w-full px-4 py-3 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[44px]" aria-label="Search site" autocomplete="off"> <button type="submit" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600 focus:outline-none focus:text-blue-600 min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="Submit search"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> <!-- Mobile Search Dropdown --> <div id="mobile-search-results" class="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible transition-all duration-200 z-50 max-h-80 overflow-y-auto"> <div id="mobile-search-list" class="py-2"> <!-- Search results will be populated here --> </div> </div> </form> </li> <li><a href="/about/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>About</a></li> <li><a href="/contact/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>Contact</a></li> <li class="px-4 py-3"> ', " </li> </ul> </section> </div> </nav> </div> <!-- Mobile Menu JavaScript --> <script>\n        (function() {\n          function initMobileMenu() {\n            const menuButton = document.getElementById('mobile-menu-button');\n            const mobileMenu = document.getElementById('mobile-menu');\n            const openIcon = document.getElementById('menu-icon-open');\n            const closeIcon = document.getElementById('menu-icon-close');\n            \n            if (!menuButton || !mobileMenu || !openIcon || !closeIcon) {\n              return;\n            }\n            \n            let isMenuOpen = false;\n            \n            function toggleMenu() {\n              isMenuOpen = !isMenuOpen;\n              \n              if (isMenuOpen) {\n                mobileMenu.classList.remove('hidden');\n                openIcon.classList.add('hidden');\n                closeIcon.classList.remove('hidden');\n                menuButton.setAttribute('aria-expanded', 'true');\n              } else {\n                mobileMenu.classList.add('hidden');\n                openIcon.classList.remove('hidden');\n                closeIcon.classList.add('hidden');\n                menuButton.setAttribute('aria-expanded', 'false');\n              }\n            }\n            \n            menuButton.addEventListener('click', toggleMenu);\n            \n            // Close menu when clicking on a link\n            const mobileLinks = mobileMenu.querySelectorAll('a');\n            mobileLinks.forEach(link => {\n              link.addEventListener('click', () => {\n                if (isMenuOpen) {\n                  toggleMenu();\n                }\n              });\n            });\n            \n            // Close menu on escape key\n            document.addEventListener('keydown', (e) => {\n              if (e.key === 'Escape' && isMenuOpen) {\n                toggleMenu();\n              }\n            });\n            \n            // Close menu when clicking outside\n            document.addEventListener('click', (e) => {\n              if (isMenuOpen && !menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {\n                toggleMenu();\n              }\n            });\n          }\n          \n          // Initialize when DOM is ready\n          if (document.readyState === 'loading') {\n            document.addEventListener('DOMContentLoaded', initMobileMenu);\n          } else {\n            initMobileMenu();\n          }\n        })();\n      <\/script> <!-- Search Functionality --> <script>(function(){", `
        (function() {
          function initSearch() {
            const navSearch = document.getElementById('nav-search');
            const navResults = document.getElementById('nav-search-results');
            const navList = document.getElementById('nav-search-list');
            
            const mobileSearch = document.getElementById('mobile-search');
            const mobileResults = document.getElementById('mobile-search-results');
            const mobileList = document.getElementById('mobile-search-list');
            
            if (!navSearch || !mobileSearch) return;
            
            function renderResults(items, listElement, resultsElement) {
              if (items.length === 0) {
                resultsElement.classList.add('opacity-0', 'invisible');
                return;
              }
              
              const html = items.slice(0, 5).map(item => \\\`
                <a href="/posts/\\\${item.slug}/" class="flex items-start px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 border-b border-gray-100 dark:border-gray-600 last:border-b-0 transition-colors">
                  <div class="flex-1">
                    <div class="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1">\\\${item.title}</div>
                    <div class="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">\\\${item.description}</div>
                    <div class="text-xs text-blue-600 dark:text-blue-400 mt-1 capitalize">\\\${item.category} Insurance</div>
                  </div>
                </a>
              \\\`).join('');
              
              if (items.length > 5) {
                listElement.innerHTML = html + \\\`
                  <div class="px-4 py-2 text-center">
                    <a href="/search/?q=\\\${encodeURIComponent(navSearch.value || mobileSearch.value)}" class="text-blue-600 dark:text-blue-400 text-sm hover:underline">
                      View all \\\${items.length} results \u2192
                    </a>
                  </div>
                \\\`;
              } else {
                listElement.innerHTML = html;
              }
              
              resultsElement.classList.remove('opacity-0', 'invisible');
            }
            
            function performSearch(query) {
              if (!query || query.length < 2) {
                navResults.classList.add('opacity-0', 'invisible');
                mobileResults.classList.add('opacity-0', 'invisible');
                return;
              }
              
              const searchTerm = query.toLowerCase();
              const results = searchData.filter(item => 
                item.title.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.category.toLowerCase().includes(searchTerm)
              ).sort((a, b) => {
                // Prioritize title matches
                const aTitleMatch = a.title.toLowerCase().includes(searchTerm);
                const bTitleMatch = b.title.toLowerCase().includes(searchTerm);
                if (aTitleMatch && !bTitleMatch) return -1;
                if (!aTitleMatch && bTitleMatch) return 1;
                return 0;
              });
              
              renderResults(results, navList, navResults);
              renderResults(results, mobileList, mobileResults);
            }
            
            // Desktop search
            navSearch.addEventListener('input', (e) => {
              performSearch(e.target.value);
            });
            
            navSearch.addEventListener('focus', () => {
              if (navSearch.value.length >= 2) {
                performSearch(navSearch.value);
              }
            });
            
            // Mobile search  
            mobileSearch.addEventListener('input', (e) => {
              performSearch(e.target.value);
            });
            
            mobileSearch.addEventListener('focus', () => {
              if (mobileSearch.value.length >= 2) {
                performSearch(mobileSearch.value);
              }
            });
            
            // Close dropdowns when clicking outside
            document.addEventListener('click', (e) => {
              if (!navSearch.contains(e.target) && !navResults.contains(e.target)) {
                navResults.classList.add('opacity-0', 'invisible');
              }
              if (!mobileSearch.contains(e.target) && !mobileResults.contains(e.target)) {
                mobileResults.classList.add('opacity-0', 'invisible');
              }
            });
            
            // Close on escape
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') {
                navResults.classList.add('opacity-0', 'invisible');
                mobileResults.classList.add('opacity-0', 'invisible');
              }
            });
          }
          
          // Initialize when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSearch);
          } else {
            initSearch();
          }
        })();
      })();<\/script> </header> <main id="main" class="flex-1" role="main"> <div class="main-content"> <div class="mx-auto w-full max-w-[var(--max-w)] px-4"></div> `, ' </div> </main> <footer class="border-t mt-12 dark:border-gray-700" role="contentinfo" aria-labelledby="footer-heading"> <h2 id="footer-heading" class="sr-only">Footer</h2> <div class="mx-auto w-full max-w-[var(--max-w)] px-4 py-8 grid md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-400"> <section aria-labelledby="footer-about"> <h3 id="footer-about" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">', '</h3> <p>Smart insurance decisions made simple. We may earn from affiliate links. Not financial advice.</p> </section> <nav aria-labelledby="footer-legal"> <h3 id="footer-legal" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Legal</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/privacy/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Privacy Policy</a></li> <li><a href="/terms/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Terms</a></li> <li><a href="/disclaimer/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Disclaimer</a></li> <li><a href="/affiliate-disclosure/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Affiliate Disclosure</a></li> </ul> </nav> <nav aria-labelledby="footer-categories"> <h3 id="footer-categories" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Categories</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/auto-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Auto Insurance</a></li> <li><a href="/health-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Health Insurance</a></li> <li><a href="/homeowners-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Homeowners Insurance</a></li> <li><a href="/life-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Life Insurance</a></li> </ul> </nav> <nav aria-labelledby="footer-connect"> <h3 id="footer-connect" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Connect</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/contact/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Contact</a></li> <li><a href="/about/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>About Us</a></li> <li><a href="/sitemap-index.xml" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1">Sitemap</a></li> </ul> </nav> </div> <div class="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t dark:border-gray-700"> <small>\xA9 ', " ", ". All rights reserved.</small> </div> </footer> </body></html>"])), title, addAttribute(description, "content"), addAttribute(url, "href"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, SITE.URL).toString(), "content"), addAttribute(url, "content"), addAttribute(type, "content"), addAttribute(SITE.SOCIAL.TWITTER, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, SITE.URL).toString(), "content"), schema && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": new URL(image, SITE.URL).toString(),
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": {
      "@type": "Person",
      "name": author.name,
      "url": author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE.NAME,
      "url": SITE.URL,
      "logo": {
        "@type": "ImageObject",
        "url": new URL("/logo.svg", SITE.URL).toString()
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "keywords": tags.join(",")
  }))), renderHead(), addAttribute(currentPath === "/" ? "page" : void 0, "aria-current"), toolsData.map((tool) => renderTemplate`<a${addAttribute(tool.url, "href")} class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">${tool.icon}</span> ${tool.name} </a>`), insuranceData.map((insurance) => renderTemplate`<a${addAttribute(insurance.url, "href")} class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">${insurance.icon}</span> ${insurance.name} </a>`), blogCategories.map((category2) => renderTemplate`<a${addAttribute(category2.url, "href")} class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">${category2.icon}</span> ${category2.name} </a>`), addAttribute(currentPath === "/about/" ? "page" : void 0, "aria-current"), addAttribute(currentPath === "/contact/" ? "page" : void 0, "aria-current"), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), addAttribute(currentPath === "/" ? "page" : void 0, "aria-current"), toolsData.map((tool) => renderTemplate`<li> <a${addAttribute(tool.url, "href")} class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]"> <span class="mr-3 text-base">${tool.icon}</span> ${tool.name} </a> </li>`), insuranceData.map((insurance) => renderTemplate`<li> <a${addAttribute(insurance.url, "href")} class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]"> <span class="mr-3 text-base">${insurance.icon}</span> ${insurance.name} </a> </li>`), blogCategories.map((category2) => renderTemplate`<li> <a${addAttribute(category2.url, "href")} class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]"> <span class="mr-3 text-base">${category2.icon}</span> ${category2.name} </a> </li>`), addAttribute(currentPath === "/about/" ? "page" : void 0, "aria-current"), addAttribute(currentPath === "/contact/" ? "page" : void 0, "aria-current"), renderComponent($$result, "ThemeToggle", $$ThemeToggle, {}), defineScriptVars({ searchData: allPosts.map((p) => ({
    slug: p.slug,
    title: p.data.title,
    description: p.data.description,
    category: p.data.category
  })) }), renderSlot($$result, $$slots["default"]), SITE.NAME, addAttribute(url === "/privacy/" ? "page" : void 0, "aria-current"), addAttribute(url === "/terms/" ? "page" : void 0, "aria-current"), addAttribute(url === "/disclaimer/" ? "page" : void 0, "aria-current"), addAttribute(url === "/affiliate-disclosure/" ? "page" : void 0, "aria-current"), addAttribute(url === "/auto-insurance/" ? "page" : void 0, "aria-current"), addAttribute(url === "/health-insurance/" ? "page" : void 0, "aria-current"), addAttribute(url === "/homeowners-insurance/" ? "page" : void 0, "aria-current"), addAttribute(url === "/life-insurance/" ? "page" : void 0, "aria-current"), addAttribute(url === "/contact/" ? "page" : void 0, "aria-current"), addAttribute(url === "/about/" ? "page" : void 0, "aria-current"), currentYear, SITE.NAME);
}, "C:/Mirza/Websites/Insurance/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, SITE as S };
