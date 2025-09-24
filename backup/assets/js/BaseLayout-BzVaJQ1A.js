import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, e as renderSlot, f as renderHead, u as unescapeHTML, m as maybeRenderHead, r as renderComponent, F as Fragment } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
/* empty css                         */
import { g as getCollection } from './_astro_content-uyHM1YMY.js';

const SITE = {
  URL: "https://sezarr.com",
  NAME: "Sezarr",
  TAGLINE: "Your Smart Insurance Guide",
  BRAND_COLOR: "#357eff",
  ADSENSE_CLIENT: "ca-pub-1189140861538062",
  SOCIAL: {
    TWITTER: "@Sezarr"
  }
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b, _c, _d;
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
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/tools/auto-insurance-calculator/index.astro": () => import('./index-dbsjSgM6.js').then(n => n._),"../pages/tools/business-insurance-calculator/index.astro": () => import('./index-OgKA4EzH.js').then(n => n._),"../pages/tools/claims-probability-calculator/index.astro": () => import('./index-CqTGld8x.js').then(n => n._),"../pages/tools/disability-insurance-calculator/index.astro": () => import('./index-Bsd3HbYE.js').then(n => n._),"../pages/tools/index.astro": () => import('./index-C2WB38u4.js').then(n => n._),"../pages/tools/life-insurance-calculator/index.astro": () => import('./index-B4u1wSH7.js').then(n => n._),"../pages/tools/pet-insurance-calculator/index.astro": () => import('./index-CeZ8BBwu.js').then(n => n._),"../pages/tools/travel-insurance-calculator/index.astro": () => import('./index-CrkbLsVZ.js').then(n => n._)}), () => "../pages/tools/**/index.astro");
  await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/auto-insurance/index.astro": () => import('./index-bFEEYYga.js').then(n => n._),"../pages/business-insurance/index.astro": () => import('./index-Ontk8ts_.js').then(n => n._),"../pages/disability-insurance/index.astro": () => import('./index-DDWdc7_B.js').then(n => n._),"../pages/health-insurance/index.astro": () => import('./index-CQc-eeNX.js').then(n => n._),"../pages/homeowners-insurance/index.astro": () => import('./index-BIU5mauO.js').then(n => n._),"../pages/life-insurance/index.astro": () => import('./index-CZwDBttU.js').then(n => n._),"../pages/pet-insurance/index.astro": () => import('./index-COyketg9.js').then(n => n._),"../pages/travel-insurance/index.astro": () => import('./index-C99VbzUK.js').then(n => n._)}), () => "../pages/*-insurance/index.astro");
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
  return renderTemplate(_d || (_d = __template(['<html lang="en-US" dir="ltr" class="h-full"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><!-- Resource hints optimization for LCP --><!-- 1. Critical third-party domains with highest priority --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- 2. Critical CSS font preload (immediately needed for LCP) --><link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v12/UcCo3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" type="font/woff2" crossorigin><!-- 3. Critical CSS (highest priority for LCP) --><link rel="preload" as="style" href="/styles/base.css"><!-- 4. Theme script preload (avoid layout shift) --><link rel="preload" href="/scripts/enhancedThemeScript.js" as="script"><!-- 5. Performance monitoring (defer to not block LCP) --><link rel="dns-prefetch" href="//www.google-analytics.com"><!-- 6. Ad-related domains (lowest priority, defer completely) --><link rel="dns-prefetch" href="//pagead2.googlesyndication.com"><link rel="dns-prefetch" href="//www.googletagmanager.com"><link rel="dns-prefetch" href="//tpc.googlesyndication.com"><!-- 7. Fetch priority hint for critical content --><meta name="fetch-priority" content="high"><link rel="alternate" hrefLang="en"', '><meta property="og:locale" content="en_US"><!-- SEO Meta Tags --><link rel="canonical"', '><meta name="description"', '><meta name="robots"', '><meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><meta name="bingbot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><!-- Enhanced SEO --><meta name="author"', '><meta name="publisher"', '><meta name="copyright"', '><meta name="language" content="en-US"><meta name="revisit-after" content="7 days"><link rel="search" type="application/opensearchdescription+xml"', ' href="/opensearch.xml">', "", "", "", "", '<!-- Verification --><meta name="google-site-verification" content="REPLACE_GOOGLE_VERIFICATION_TOKEN"><meta name="google-adsense-account" content="ca-pub-1189140861538062"><meta name="msvalidate.01" content="REPLACE_BING_VERIFICATION_TOKEN"><!-- PWA & Theme --><meta name="theme-color"', '><meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111827"><meta name="color-scheme" content="light dark"><!-- Enhanced Open Graph --><meta property="og:site_name"', '><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"', '><meta property="og:locale" content="en_US">', '<!-- Enhanced Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:creator"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><meta name="twitter:domain"', '><meta name="twitter:url"', '><!-- LinkedIn --><meta property="linkedin:title"', '><meta property="linkedin:description"', '><meta property="linkedin:image"', '><!-- Pinterest --><meta name="pinterest-rich-pin" content="true"><meta name="pinterest:title"', '><meta name="pinterest:description"', '><meta name="pinterest:image"', '><!-- WhatsApp/Social Messaging --><meta property="al:web:url"', '><meta property="al:android:url"', '><meta property="al:ios:url"', `><meta property="al:web:should_fallback" content="true"><!-- Favicons and Icons --><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"><link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"><link rel="manifest" href="/site.webmanifest"><!-- Security Headers --><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: http:; connect-src 'self' https://www.google-analytics.com https://pagead2.googlesyndication.com; frame-src https://pagead2.googlesyndication.com;"><meta http-equiv="X-Content-Type-Options" content="nosniff"><meta http-equiv="X-Frame-Options" content="DENY"><meta http-equiv="X-XSS-Protection" content="1; mode=block"><meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin"><meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()"><link rel="preconnect" href="https://www.googletagmanager.com"><link rel="dns-prefetch" href="//www.googletagmanager.com"><link rel="preconnect" href="https://pagead2.googlesyndication.com"><link rel="dns-prefetch" href="//pagead2.googlesyndication.com"><!-- Optimized Google tag (gtag.js) with deferred loading --><!-- Non-critical CSS loading - defer to eliminate render blocking --><link rel="preload" href="/styles/base.css" as="style" onload="this.onload=null;this.rel='stylesheet'">`, `<noscript><link rel="stylesheet" href="/styles/base.css"></noscript><!-- Defer Google Fonts to avoid render blocking --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"></noscript><!-- Enhanced theme handling across all pages --><script src="/scripts/enhancedThemeScript.js"><\/script><!-- Global Schema Markup --><!-- GlobalSchema component is currently disabled -->`, "", "", '</head> <body class="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100" role="document"> <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded-md z-50 font-medium">Skip to main content</a> <!-- Reserved space for consent banner to prevent CLS --> <div class="consent-space" id="consent-space"></div> <!-- ConsentBanner component is currently disabled --> <header class="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700" role="banner"> <div class="mx-auto w-full max-w-[var(--max-w)] px-4 py-4 md:py-3"> <!-- Desktop & Mobile Header --> <div class="flex items-center justify-between"> <!-- Brand --> <div role="banner" aria-label="Site brand"> <a href="/" class="font-bold text-xl text-gray-900 dark:text-gray-100 no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Go to homepage"> <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" aria-label="Sezarr Insurance">Sezarr</span> </a> </div> <!-- Desktop Navigation --> <nav class="hidden md:flex gap-6 text-sm items-center" role="navigation" aria-label="Main navigation"> <ul class="flex items-center gap-6 list-none" role="list"> <li role="listitem"> <a href="/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Home</a> </li> <!-- Tools Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="tools-menu">\nTools\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="tools-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="tools-button"> <div class="py-2"> ', ' </div> </div> </li> <!-- Insurance Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="insurance-menu">\nInsurance\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="insurance-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="insurance-button"> <div class="py-2"> ', ' </div> </div> </li> <!-- Blog Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="blog-menu">\nBlog\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="blog-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="blog-button"> <div class="py-2"> <a href="/blog/" class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">\u{1F4DD}</span>\nBlog Home\n</a> <a href="/posts/" class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">\u{1F4DA}</span>\nAll Articles\n</a> <div class="border-t border-gray-200 dark:border-gray-600 my-1"></div> ', ' </div> </div> </li> <li role="listitem"> <a href="/search/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Search</a> </li> <li role="listitem"> <a href="/about/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>About</a> </li> <li role="listitem"> <a href="/contact/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Contact</a> </li> <!-- <li><span class="inline-block"><ThemeToggle /></span></li> --> </ul> </nav> <!-- Mobile Menu Button & Theme Toggle --> <div class="md:hidden flex items-center gap-2"> <!-- <span class="inline-block"><ThemeToggle /></span> --> <button id="mobile-menu-button" type="button" class="p-3 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-expanded="false" aria-controls="mobile-menu" aria-haspopup="true" aria-label="Toggle navigation menu"> <span class="sr-only">Toggle navigation menu</span> <!-- Hamburger icon --> <svg id="menu-icon-open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" focusable="false" role="img"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> <!-- Close icon --> <svg id="menu-icon-close" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" focusable="false" role="img"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile Navigation Menu --> <nav id="mobile-menu" class="md:hidden hidden mt-4 pb-4 border-t dark:border-gray-700" role="navigation" aria-label="Mobile navigation"> <div class="pt-4 space-y-6"> <section aria-labelledby="mobile-main-heading"> <h2 id="mobile-main-heading" class="sr-only">Main Navigation</h2> <ul class="space-y-3 list-none" role="list"> <li><a href="/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>Home</a></li> <li> <button id="mobile-tools-toggle" type="button" class="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]" aria-expanded="false" aria-controls="mobile-tools-menu"> <span class="flex items-center"> <span aria-hidden="true">\u{1F9EE} </span>Tools\n</span> <svg id="mobile-tools-arrow" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Mobile Tools Submenu --> <div id="mobile-tools-menu" class="hidden pl-4 mt-2 space-y-2"> ', ' </div> </li> <li> <button id="mobile-insurance-toggle" type="button" class="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]" aria-expanded="false" aria-controls="mobile-insurance-menu"> <span class="flex items-center"> <span aria-hidden="true">\u{1F6E1}\uFE0F </span>Insurance\n</span> <svg id="mobile-insurance-arrow" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Mobile Insurance Submenu --> <div id="mobile-insurance-menu" class="hidden pl-4 mt-2 space-y-2"> ', ' </div> </li> <li><a href="/search/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '> <span aria-hidden="true">\uFFFD </span>Search\n</a></li> <li><a href="/about/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>About</a></li> <li><a href="/contact/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>Contact</a></li> <!-- Blog Dropdown Mobile --> <li> <button id="mobile-blog-toggle" type="button" class="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]" aria-expanded="false" aria-controls="mobile-blog-menu"> <span class="flex items-center"> <span aria-hidden="true">\u{1F4DA} </span>Blog\n</span> <svg id="mobile-blog-arrow" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Mobile Blog Submenu --> <div id="mobile-blog-menu" class="hidden pl-4 mt-2 space-y-2"> <a href="/blog/" class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[40px]"> <span class="mr-3">\u{1F4DD}</span>Blog Home\n</a> <a href="/posts/" class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[40px]"> <span class="mr-3">\u{1F4DA}</span>All Articles\n</a> <div class="border-t border-gray-200 dark:border-gray-600 mx-4 my-2"></div> ', ` </div> </li> </ul> </section> </div> </nav> </div> <!-- Mobile Menu JavaScript --> <script>
        (function() {
          function initMobileMenu() {
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const openIcon = document.getElementById('menu-icon-open');
            const closeIcon = document.getElementById('menu-icon-close');
            
            // Insurance dropdown elements
            const insuranceToggle = document.getElementById('mobile-insurance-toggle');
            const insuranceMenu = document.getElementById('mobile-insurance-menu');
            const insuranceArrow = document.getElementById('mobile-insurance-arrow');
            
            // Tools dropdown elements
            const toolsToggle = document.getElementById('mobile-tools-toggle');
            const toolsMenu = document.getElementById('mobile-tools-menu');
            const toolsArrow = document.getElementById('mobile-tools-arrow');
            
            // Blog dropdown elements
            const blogToggle = document.getElementById('mobile-blog-toggle');
            const blogMenu = document.getElementById('mobile-blog-menu');
            const blogArrow = document.getElementById('mobile-blog-arrow');
            
            if (!menuButton || !mobileMenu || !openIcon || !closeIcon) {
              return; // Elements not ready
            }
            
            let isMenuOpen = false;
            let isInsuranceOpen = false;
            let isToolsOpen = false;
            let isBlogOpen = false;
            
            function toggleMenu() {
              isMenuOpen = !isMenuOpen;
              
              if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                menuButton.setAttribute('aria-expanded', 'true');
              } else {
                mobileMenu.classList.add('hidden');
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
                
                // Close insurance submenu when main menu closes
                if (isInsuranceOpen) {
                  toggleInsuranceMenu();
                }
                // Close tools submenu when main menu closes
                if (isToolsOpen) {
                  toggleToolsMenu();
                }
                // Close blog submenu when main menu closes
                if (isBlogOpen) {
                  toggleBlogMenu();
                }
              }
            }
            
            function toggleInsuranceMenu() {
              if (!insuranceToggle || !insuranceMenu || !insuranceArrow) return;
              
              isInsuranceOpen = !isInsuranceOpen;
              
              if (isInsuranceOpen) {
                insuranceMenu.classList.remove('hidden');
                insuranceArrow.classList.add('rotate-180');
                insuranceToggle.setAttribute('aria-expanded', 'true');
              } else {
                insuranceMenu.classList.add('hidden');
                insuranceArrow.classList.remove('rotate-180');
                insuranceToggle.setAttribute('aria-expanded', 'false');
              }
            }
            
            function toggleToolsMenu() {
              if (!toolsToggle || !toolsMenu || !toolsArrow) return;
              
              isToolsOpen = !isToolsOpen;
              
              if (isToolsOpen) {
                toolsMenu.classList.remove('hidden');
                toolsArrow.classList.add('rotate-180');
                toolsToggle.setAttribute('aria-expanded', 'true');
              } else {
                toolsMenu.classList.add('hidden');
                toolsArrow.classList.remove('rotate-180');
                toolsToggle.setAttribute('aria-expanded', 'false');
              }
            }
            
            function toggleBlogMenu() {
              if (!blogToggle || !blogMenu || !blogArrow) return;
              
              isBlogOpen = !isBlogOpen;
              
              if (isBlogOpen) {
                blogMenu.classList.remove('hidden');
                blogArrow.classList.add('rotate-180');
                blogToggle.setAttribute('aria-expanded', 'true');
              } else {
                blogMenu.classList.add('hidden');
                blogArrow.classList.remove('rotate-180');
                blogToggle.setAttribute('aria-expanded', 'false');
              }
            }
            
            // Toggle menu on button click
            menuButton.addEventListener('click', toggleMenu);
            
            // Toggle insurance submenu
            if (insuranceToggle) {
              insuranceToggle.addEventListener('click', toggleInsuranceMenu);
            }
            
            // Toggle tools submenu
            if (toolsToggle) {
              toolsToggle.addEventListener('click', toggleToolsMenu);
            }
            
            // Toggle blog submenu
            if (blogToggle) {
              blogToggle.addEventListener('click', toggleBlogMenu);
            }
            
            // Close menu when clicking on a link (mobile navigation)
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
              link.addEventListener('click', () => {
                if (isMenuOpen) {
                  toggleMenu();
                }
              });
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
              }
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
              if (isMenuOpen && !menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                toggleMenu();
              }
            });
          }
          
          // Initialize when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initMobileMenu);
          } else {
            initMobileMenu();
          }
        })();
      <\/script> </header> <main id="main" class="flex-1" role="main"> <div class="main-content"> <div class="mx-auto w-full max-w-[var(--max-w)] px-4"> <!-- Temporarily commented out breadcrumbs for debugging --> <!-- {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />} --> </div> `, ' </div> </main> <footer class="border-t mt-12 dark:border-gray-700" role="contentinfo" aria-labelledby="footer-heading"> <h2 id="footer-heading" class="sr-only">Footer</h2> <div class="mx-auto w-full max-w-[var(--max-w)] px-4 py-8 grid md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-400"> <section aria-labelledby="footer-about"> <h3 id="footer-about" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">', '</h3> <p>Smart insurance decisions made simple. We may earn from affiliate links. Not financial advice.</p> </section> <nav aria-labelledby="footer-legal"> <h3 id="footer-legal" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Legal</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/privacy/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Privacy Policy</a></li> <li><a href="/privacy/do-not-sell/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Do Not Sell or Share</a></li> <li><a href="/terms/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Terms</a></li> <li><a href="/disclaimer/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Disclaimer</a></li> <li><a href="/affiliate-disclosure/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Affiliate Disclosure</a></li> </ul> </nav> <nav aria-labelledby="footer-categories"> <h3 id="footer-categories" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Categories</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/auto-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Auto Insurance</a></li> <li><a href="/health-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Health Insurance</a></li> <li><a href="/homeowners-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Homeowners Insurance</a></li> <li><a href="/life-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Life Insurance</a></li> </ul> </nav> <nav aria-labelledby="footer-connect"> <h3 id="footer-connect" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Connect</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/contact/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Contact</a></li> <li><a href="/about/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>About Us</a></li> <li><a href="/sitemap-index.xml" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1">Sitemap</a></li> </ul> </nav> </div> <div class="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t dark:border-gray-700"> <small>\xA9 ', " ", ". All rights reserved.</small> </div> <script type=\"module\">\n      {`\n        // Service Worker Registration for Performance\n        if ('serviceWorker' in navigator) {\n          window.addEventListener('load', () => {\n            navigator.serviceWorker.register('/sw.js')\n              .then((registration) => {\n                console.log('SW registered: ', registration);\n              })\n              .catch((registrationError) => {\n                console.log('SW registration failed: ', registrationError);\n              });\n          });\n        }\n\n        // Affiliate click tracking\n        function sendEvent(name, params){\n          try{ window.gtag && window.gtag('event', name, params); }catch(e){}\n        }\n        document.addEventListener('click', (e) => {\n          const a = e.target.closest('a');\n          if(!a) return;\n          const isAffiliate = a.dataset.affiliate === 'true' || (a.rel||'').includes('sponsored');\n          if(isAffiliate){\n            sendEvent('affiliate_click', { link_url: a.href, link_text: a.textContent?.trim()||'' });\n          }\n        });\n\n        // Enhanced Core Web Vitals measurement\n        function measureCoreWebVitals() {\n          if (window.gtag) {\n            // LCP measurement with attribution\n            new PerformanceObserver((entryList) => {\n              const entries = entryList.getEntries();\n              const lastEntry = entries[entries.length - 1];\n              const lcpElement = lastEntry.element?.tagName || 'unknown';\n              window.gtag('event', 'core_web_vitals', {\n                event_category: 'Web Vitals',\n                event_label: 'LCP',\n                value: Math.round(lastEntry.startTime),\n                element: lcpElement,\n                debug_target: lastEntry.element?.getAttribute('class') || 'none'\n              });\n            }).observe({ type: 'largest-contentful-paint', buffered: true });\n\n            // INP measurement (replacing FID)\n            let maxINP = 0;\n            new PerformanceObserver((entryList) => {\n              for (const entry of entryList.getEntries()) {\n                const value = entry.duration;\n                const inputType = entry.name;\n                maxINP = Math.max(maxINP, value);\n                window.gtag('event', 'core_web_vitals', {\n                  event_category: 'Web Vitals',\n                  event_label: 'INP',\n                  value: Math.round(value),\n                  input_type: inputType\n                });\n              }\n            }).observe({ type: 'interaction', buffered: true });\n\n            // Enhanced CLS measurement with session windows\n            let sessionValue = 0;\n            let sessionEntries = [];\n            new PerformanceObserver((entryList) => {\n              for (const entry of entryList.getEntries()) {\n                if (!entry.hadRecentInput) {\n                  const currentTime = performance.now();\n                  // Remove entries older than 1 second\n                  sessionEntries = sessionEntries.filter(e => currentTime - e.startTime <= 1000);\n                  sessionEntries.push(entry);\n                  sessionValue = sessionEntries.reduce((sum, e) => sum + e.value, 0);\n                  \n                  window.gtag('event', 'core_web_vitals', {\n                    event_category: 'Web Vitals',\n                    event_label: 'CLS',\n                    value: Math.round(sessionValue * 1000) / 1000,\n                    debug_target: entry.sources?.[0]?.node?.tagName || 'unknown'\n                  });\n                }\n              }\n            }).observe({ type: 'layout-shift', buffered: true });\n              });\n            }).observe({ type: 'layout-shift', buffered: true });\n          }\n        }\n\n        // Initialize measurement after page load\n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', measureCoreWebVitals);\n        } else {\n          measureCoreWebVitals();\n        }\n      `}\n    <\/script> </footer> <!-- Global Scroll Animations --> <!-- <ScrollAnimations /> --> </body></html>"], ['<html lang="en-US" dir="ltr" class="h-full"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', '</title><meta name="description"', '><!-- Resource hints optimization for LCP --><!-- 1. Critical third-party domains with highest priority --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- 2. Critical CSS font preload (immediately needed for LCP) --><link rel="preload" as="font" href="https://fonts.gstatic.com/s/inter/v12/UcCo3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2" type="font/woff2" crossorigin><!-- 3. Critical CSS (highest priority for LCP) --><link rel="preload" as="style" href="/styles/base.css"><!-- 4. Theme script preload (avoid layout shift) --><link rel="preload" href="/scripts/enhancedThemeScript.js" as="script"><!-- 5. Performance monitoring (defer to not block LCP) --><link rel="dns-prefetch" href="//www.google-analytics.com"><!-- 6. Ad-related domains (lowest priority, defer completely) --><link rel="dns-prefetch" href="//pagead2.googlesyndication.com"><link rel="dns-prefetch" href="//www.googletagmanager.com"><link rel="dns-prefetch" href="//tpc.googlesyndication.com"><!-- 7. Fetch priority hint for critical content --><meta name="fetch-priority" content="high"><link rel="alternate" hrefLang="en"', '><meta property="og:locale" content="en_US"><!-- SEO Meta Tags --><link rel="canonical"', '><meta name="description"', '><meta name="robots"', '><meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><meta name="bingbot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><!-- Enhanced SEO --><meta name="author"', '><meta name="publisher"', '><meta name="copyright"', '><meta name="language" content="en-US"><meta name="revisit-after" content="7 days"><link rel="search" type="application/opensearchdescription+xml"', ' href="/opensearch.xml">', "", "", "", "", '<!-- Verification --><meta name="google-site-verification" content="REPLACE_GOOGLE_VERIFICATION_TOKEN"><meta name="google-adsense-account" content="ca-pub-1189140861538062"><meta name="msvalidate.01" content="REPLACE_BING_VERIFICATION_TOKEN"><!-- PWA & Theme --><meta name="theme-color"', '><meta name="theme-color" media="(prefers-color-scheme: light)" content="#ffffff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111827"><meta name="color-scheme" content="light dark"><!-- Enhanced Open Graph --><meta property="og:site_name"', '><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt"', '><meta property="og:locale" content="en_US">', '<!-- Enhanced Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"', '><meta name="twitter:creator"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><meta name="twitter:domain"', '><meta name="twitter:url"', '><!-- LinkedIn --><meta property="linkedin:title"', '><meta property="linkedin:description"', '><meta property="linkedin:image"', '><!-- Pinterest --><meta name="pinterest-rich-pin" content="true"><meta name="pinterest:title"', '><meta name="pinterest:description"', '><meta name="pinterest:image"', '><!-- WhatsApp/Social Messaging --><meta property="al:web:url"', '><meta property="al:android:url"', '><meta property="al:ios:url"', `><meta property="al:web:should_fallback" content="true"><!-- Favicons and Icons --><link rel="icon" href="/favicon.ico" sizes="48x48"><link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any"><link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"><link rel="manifest" href="/site.webmanifest"><!-- Security Headers --><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: http:; connect-src 'self' https://www.google-analytics.com https://pagead2.googlesyndication.com; frame-src https://pagead2.googlesyndication.com;"><meta http-equiv="X-Content-Type-Options" content="nosniff"><meta http-equiv="X-Frame-Options" content="DENY"><meta http-equiv="X-XSS-Protection" content="1; mode=block"><meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin"><meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()"><link rel="preconnect" href="https://www.googletagmanager.com"><link rel="dns-prefetch" href="//www.googletagmanager.com"><link rel="preconnect" href="https://pagead2.googlesyndication.com"><link rel="dns-prefetch" href="//pagead2.googlesyndication.com"><!-- Optimized Google tag (gtag.js) with deferred loading --><!-- Non-critical CSS loading - defer to eliminate render blocking --><link rel="preload" href="/styles/base.css" as="style" onload="this.onload=null;this.rel='stylesheet'">`, `<noscript><link rel="stylesheet" href="/styles/base.css"></noscript><!-- Defer Google Fonts to avoid render blocking --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"></noscript><!-- Enhanced theme handling across all pages --><script src="/scripts/enhancedThemeScript.js"><\/script><!-- Global Schema Markup --><!-- GlobalSchema component is currently disabled -->`, "", "", '</head> <body class="min-h-full flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100" role="document"> <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded-md z-50 font-medium">Skip to main content</a> <!-- Reserved space for consent banner to prevent CLS --> <div class="consent-space" id="consent-space"></div> <!-- ConsentBanner component is currently disabled --> <header class="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 dark:bg-gray-900/80 dark:border-gray-700" role="banner"> <div class="mx-auto w-full max-w-[var(--max-w)] px-4 py-4 md:py-3"> <!-- Desktop & Mobile Header --> <div class="flex items-center justify-between"> <!-- Brand --> <div role="banner" aria-label="Site brand"> <a href="/" class="font-bold text-xl text-gray-900 dark:text-gray-100 no-underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Go to homepage"> <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" aria-label="Sezarr Insurance">Sezarr</span> </a> </div> <!-- Desktop Navigation --> <nav class="hidden md:flex gap-6 text-sm items-center" role="navigation" aria-label="Main navigation"> <ul class="flex items-center gap-6 list-none" role="list"> <li role="listitem"> <a href="/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Home</a> </li> <!-- Tools Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="tools-menu">\nTools\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="tools-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="tools-button"> <div class="py-2"> ', ' </div> </div> </li> <!-- Insurance Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="insurance-menu">\nInsurance\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="insurance-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="insurance-button"> <div class="py-2"> ', ' </div> </div> </li> <!-- Blog Dropdown --> <li role="listitem" class="relative group"> <button type="button" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center gap-1 group-hover:text-blue-600" aria-expanded="false" aria-haspopup="true" aria-controls="blog-menu">\nBlog\n<svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Dropdown Menu --> <div id="blog-menu" class="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu" aria-labelledby="blog-button"> <div class="py-2"> <a href="/blog/" class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">\u{1F4DD}</span>\nBlog Home\n</a> <a href="/posts/" class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">\u{1F4DA}</span>\nAll Articles\n</a> <div class="border-t border-gray-200 dark:border-gray-600 my-1"></div> ', ' </div> </div> </li> <li role="listitem"> <a href="/search/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Search</a> </li> <li role="listitem"> <a href="/about/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>About</a> </li> <li role="listitem"> <a href="/contact/" class="hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-3 py-2 min-h-[44px] flex items-center"', '>Contact</a> </li> <!-- <li><span class="inline-block"><ThemeToggle /></span></li> --> </ul> </nav> <!-- Mobile Menu Button & Theme Toggle --> <div class="md:hidden flex items-center gap-2"> <!-- <span class="inline-block"><ThemeToggle /></span> --> <button id="mobile-menu-button" type="button" class="p-3 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-expanded="false" aria-controls="mobile-menu" aria-haspopup="true" aria-label="Toggle navigation menu"> <span class="sr-only">Toggle navigation menu</span> <!-- Hamburger icon --> <svg id="menu-icon-open" class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" focusable="false" role="img"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> <!-- Close icon --> <svg id="menu-icon-close" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" focusable="false" role="img"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <!-- Mobile Navigation Menu --> <nav id="mobile-menu" class="md:hidden hidden mt-4 pb-4 border-t dark:border-gray-700" role="navigation" aria-label="Mobile navigation"> <div class="pt-4 space-y-6"> <section aria-labelledby="mobile-main-heading"> <h2 id="mobile-main-heading" class="sr-only">Main Navigation</h2> <ul class="space-y-3 list-none" role="list"> <li><a href="/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>Home</a></li> <li> <button id="mobile-tools-toggle" type="button" class="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]" aria-expanded="false" aria-controls="mobile-tools-menu"> <span class="flex items-center"> <span aria-hidden="true">\u{1F9EE} </span>Tools\n</span> <svg id="mobile-tools-arrow" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Mobile Tools Submenu --> <div id="mobile-tools-menu" class="hidden pl-4 mt-2 space-y-2"> ', ' </div> </li> <li> <button id="mobile-insurance-toggle" type="button" class="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]" aria-expanded="false" aria-controls="mobile-insurance-menu"> <span class="flex items-center"> <span aria-hidden="true">\u{1F6E1}\uFE0F </span>Insurance\n</span> <svg id="mobile-insurance-arrow" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Mobile Insurance Submenu --> <div id="mobile-insurance-menu" class="hidden pl-4 mt-2 space-y-2"> ', ' </div> </li> <li><a href="/search/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '> <span aria-hidden="true">\uFFFD </span>Search\n</a></li> <li><a href="/about/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>About</a></li> <li><a href="/contact/" class="block px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px] flex items-center"', '>Contact</a></li> <!-- Blog Dropdown Mobile --> <li> <button id="mobile-blog-toggle" type="button" class="w-full flex items-center justify-between px-4 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[44px]" aria-expanded="false" aria-controls="mobile-blog-menu"> <span class="flex items-center"> <span aria-hidden="true">\u{1F4DA} </span>Blog\n</span> <svg id="mobile-blog-arrow" class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <!-- Mobile Blog Submenu --> <div id="mobile-blog-menu" class="hidden pl-4 mt-2 space-y-2"> <a href="/blog/" class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[40px]"> <span class="mr-3">\u{1F4DD}</span>Blog Home\n</a> <a href="/posts/" class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[40px]"> <span class="mr-3">\u{1F4DA}</span>All Articles\n</a> <div class="border-t border-gray-200 dark:border-gray-600 mx-4 my-2"></div> ', ` </div> </li> </ul> </section> </div> </nav> </div> <!-- Mobile Menu JavaScript --> <script>
        (function() {
          function initMobileMenu() {
            const menuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            const openIcon = document.getElementById('menu-icon-open');
            const closeIcon = document.getElementById('menu-icon-close');
            
            // Insurance dropdown elements
            const insuranceToggle = document.getElementById('mobile-insurance-toggle');
            const insuranceMenu = document.getElementById('mobile-insurance-menu');
            const insuranceArrow = document.getElementById('mobile-insurance-arrow');
            
            // Tools dropdown elements
            const toolsToggle = document.getElementById('mobile-tools-toggle');
            const toolsMenu = document.getElementById('mobile-tools-menu');
            const toolsArrow = document.getElementById('mobile-tools-arrow');
            
            // Blog dropdown elements
            const blogToggle = document.getElementById('mobile-blog-toggle');
            const blogMenu = document.getElementById('mobile-blog-menu');
            const blogArrow = document.getElementById('mobile-blog-arrow');
            
            if (!menuButton || !mobileMenu || !openIcon || !closeIcon) {
              return; // Elements not ready
            }
            
            let isMenuOpen = false;
            let isInsuranceOpen = false;
            let isToolsOpen = false;
            let isBlogOpen = false;
            
            function toggleMenu() {
              isMenuOpen = !isMenuOpen;
              
              if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                openIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                menuButton.setAttribute('aria-expanded', 'true');
              } else {
                mobileMenu.classList.add('hidden');
                openIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
                
                // Close insurance submenu when main menu closes
                if (isInsuranceOpen) {
                  toggleInsuranceMenu();
                }
                // Close tools submenu when main menu closes
                if (isToolsOpen) {
                  toggleToolsMenu();
                }
                // Close blog submenu when main menu closes
                if (isBlogOpen) {
                  toggleBlogMenu();
                }
              }
            }
            
            function toggleInsuranceMenu() {
              if (!insuranceToggle || !insuranceMenu || !insuranceArrow) return;
              
              isInsuranceOpen = !isInsuranceOpen;
              
              if (isInsuranceOpen) {
                insuranceMenu.classList.remove('hidden');
                insuranceArrow.classList.add('rotate-180');
                insuranceToggle.setAttribute('aria-expanded', 'true');
              } else {
                insuranceMenu.classList.add('hidden');
                insuranceArrow.classList.remove('rotate-180');
                insuranceToggle.setAttribute('aria-expanded', 'false');
              }
            }
            
            function toggleToolsMenu() {
              if (!toolsToggle || !toolsMenu || !toolsArrow) return;
              
              isToolsOpen = !isToolsOpen;
              
              if (isToolsOpen) {
                toolsMenu.classList.remove('hidden');
                toolsArrow.classList.add('rotate-180');
                toolsToggle.setAttribute('aria-expanded', 'true');
              } else {
                toolsMenu.classList.add('hidden');
                toolsArrow.classList.remove('rotate-180');
                toolsToggle.setAttribute('aria-expanded', 'false');
              }
            }
            
            function toggleBlogMenu() {
              if (!blogToggle || !blogMenu || !blogArrow) return;
              
              isBlogOpen = !isBlogOpen;
              
              if (isBlogOpen) {
                blogMenu.classList.remove('hidden');
                blogArrow.classList.add('rotate-180');
                blogToggle.setAttribute('aria-expanded', 'true');
              } else {
                blogMenu.classList.add('hidden');
                blogArrow.classList.remove('rotate-180');
                blogToggle.setAttribute('aria-expanded', 'false');
              }
            }
            
            // Toggle menu on button click
            menuButton.addEventListener('click', toggleMenu);
            
            // Toggle insurance submenu
            if (insuranceToggle) {
              insuranceToggle.addEventListener('click', toggleInsuranceMenu);
            }
            
            // Toggle tools submenu
            if (toolsToggle) {
              toolsToggle.addEventListener('click', toggleToolsMenu);
            }
            
            // Toggle blog submenu
            if (blogToggle) {
              blogToggle.addEventListener('click', toggleBlogMenu);
            }
            
            // Close menu when clicking on a link (mobile navigation)
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
              link.addEventListener('click', () => {
                if (isMenuOpen) {
                  toggleMenu();
                }
              });
            });
            
            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
              }
            });
            
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
              if (isMenuOpen && !menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                toggleMenu();
              }
            });
          }
          
          // Initialize when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initMobileMenu);
          } else {
            initMobileMenu();
          }
        })();
      <\/script> </header> <main id="main" class="flex-1" role="main"> <div class="main-content"> <div class="mx-auto w-full max-w-[var(--max-w)] px-4"> <!-- Temporarily commented out breadcrumbs for debugging --> <!-- {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />} --> </div> `, ' </div> </main> <footer class="border-t mt-12 dark:border-gray-700" role="contentinfo" aria-labelledby="footer-heading"> <h2 id="footer-heading" class="sr-only">Footer</h2> <div class="mx-auto w-full max-w-[var(--max-w)] px-4 py-8 grid md:grid-cols-4 gap-6 text-sm text-gray-600 dark:text-gray-400"> <section aria-labelledby="footer-about"> <h3 id="footer-about" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">', '</h3> <p>Smart insurance decisions made simple. We may earn from affiliate links. Not financial advice.</p> </section> <nav aria-labelledby="footer-legal"> <h3 id="footer-legal" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Legal</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/privacy/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Privacy Policy</a></li> <li><a href="/privacy/do-not-sell/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Do Not Sell or Share</a></li> <li><a href="/terms/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Terms</a></li> <li><a href="/disclaimer/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Disclaimer</a></li> <li><a href="/affiliate-disclosure/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Affiliate Disclosure</a></li> </ul> </nav> <nav aria-labelledby="footer-categories"> <h3 id="footer-categories" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Categories</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/auto-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Auto Insurance</a></li> <li><a href="/health-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Health Insurance</a></li> <li><a href="/homeowners-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Homeowners Insurance</a></li> <li><a href="/life-insurance/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Life Insurance</a></li> </ul> </nav> <nav aria-labelledby="footer-connect"> <h3 id="footer-connect" class="font-semibold text-gray-900 dark:text-gray-100 mb-2">Connect</h3> <ul class="space-y-1 list-none" role="list"> <li><a href="/contact/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>Contact</a></li> <li><a href="/about/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"', '>About Us</a></li> <li><a href="/sitemap-index.xml" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1">Sitemap</a></li> </ul> </nav> </div> <div class="text-center text-xs text-gray-500 dark:text-gray-400 py-4 border-t dark:border-gray-700"> <small>\xA9 ', " ", ". All rights reserved.</small> </div> <script type=\"module\">\n      {\\`\n        // Service Worker Registration for Performance\n        if ('serviceWorker' in navigator) {\n          window.addEventListener('load', () => {\n            navigator.serviceWorker.register('/sw.js')\n              .then((registration) => {\n                console.log('SW registered: ', registration);\n              })\n              .catch((registrationError) => {\n                console.log('SW registration failed: ', registrationError);\n              });\n          });\n        }\n\n        // Affiliate click tracking\n        function sendEvent(name, params){\n          try{ window.gtag && window.gtag('event', name, params); }catch(e){}\n        }\n        document.addEventListener('click', (e) => {\n          const a = e.target.closest('a');\n          if(!a) return;\n          const isAffiliate = a.dataset.affiliate === 'true' || (a.rel||'').includes('sponsored');\n          if(isAffiliate){\n            sendEvent('affiliate_click', { link_url: a.href, link_text: a.textContent?.trim()||'' });\n          }\n        });\n\n        // Enhanced Core Web Vitals measurement\n        function measureCoreWebVitals() {\n          if (window.gtag) {\n            // LCP measurement with attribution\n            new PerformanceObserver((entryList) => {\n              const entries = entryList.getEntries();\n              const lastEntry = entries[entries.length - 1];\n              const lcpElement = lastEntry.element?.tagName || 'unknown';\n              window.gtag('event', 'core_web_vitals', {\n                event_category: 'Web Vitals',\n                event_label: 'LCP',\n                value: Math.round(lastEntry.startTime),\n                element: lcpElement,\n                debug_target: lastEntry.element?.getAttribute('class') || 'none'\n              });\n            }).observe({ type: 'largest-contentful-paint', buffered: true });\n\n            // INP measurement (replacing FID)\n            let maxINP = 0;\n            new PerformanceObserver((entryList) => {\n              for (const entry of entryList.getEntries()) {\n                const value = entry.duration;\n                const inputType = entry.name;\n                maxINP = Math.max(maxINP, value);\n                window.gtag('event', 'core_web_vitals', {\n                  event_category: 'Web Vitals',\n                  event_label: 'INP',\n                  value: Math.round(value),\n                  input_type: inputType\n                });\n              }\n            }).observe({ type: 'interaction', buffered: true });\n\n            // Enhanced CLS measurement with session windows\n            let sessionValue = 0;\n            let sessionEntries = [];\n            new PerformanceObserver((entryList) => {\n              for (const entry of entryList.getEntries()) {\n                if (!entry.hadRecentInput) {\n                  const currentTime = performance.now();\n                  // Remove entries older than 1 second\n                  sessionEntries = sessionEntries.filter(e => currentTime - e.startTime <= 1000);\n                  sessionEntries.push(entry);\n                  sessionValue = sessionEntries.reduce((sum, e) => sum + e.value, 0);\n                  \n                  window.gtag('event', 'core_web_vitals', {\n                    event_category: 'Web Vitals',\n                    event_label: 'CLS',\n                    value: Math.round(sessionValue * 1000) / 1000,\n                    debug_target: entry.sources?.[0]?.node?.tagName || 'unknown'\n                  });\n                }\n              }\n            }).observe({ type: 'layout-shift', buffered: true });\n              });\n            }).observe({ type: 'layout-shift', buffered: true });\n          }\n        }\n\n        // Initialize measurement after page load\n        if (document.readyState === 'loading') {\n          document.addEventListener('DOMContentLoaded', measureCoreWebVitals);\n        } else {\n          measureCoreWebVitals();\n        }\n      \\`}\n    <\/script> </footer> <!-- Global Scroll Animations --> <!-- <ScrollAnimations /> --> </body></html>"])), title, addAttribute(description, "content"), addAttribute(url, "href"), addAttribute(url, "href"), addAttribute(description, "content"), addAttribute(noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1", "content"), addAttribute(type === "article" ? author.name : SITE.NAME, "content"), addAttribute(SITE.NAME, "content"), addAttribute(`${(/* @__PURE__ */ new Date()).getFullYear()} ${SITE.NAME}`, "content"), addAttribute(SITE.NAME, "title"), category && renderTemplate`<meta name="category"${addAttribute(category, "content")}>`, tags.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(tags.join(", "), "content")}>`, publishedDate && renderTemplate`<meta name="article:published_time"${addAttribute(new Date(publishedDate).toISOString(), "content")}>`, modifiedDate && renderTemplate`<meta name="article:modified_time"${addAttribute(new Date(modifiedDate).toISOString(), "content")}>`, type === "article" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`<meta name="article:author"${addAttribute(author.name, "content")}><meta name="article:section"${addAttribute(category || "Insurance", "content")}><meta name="article:tag"${addAttribute(tags.join(", "), "content")}>` })}`, addAttribute(SITE.BRAND_COLOR, "content"), addAttribute(SITE.NAME, "content"), addAttribute(type, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(url, "content"), addAttribute(new URL(image, SITE.URL).toString(), "content"), addAttribute(title, "content"), type === "article" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`<meta property="article:published_time"${addAttribute(publishedDate, "content")}>${modifiedDate && renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedDate, "content")}>`}${category && renderTemplate`<meta property="article:section"${addAttribute(category, "content")}>`}<meta property="article:author"${addAttribute(author.url, "content")}>${tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}` })}`, addAttribute(SITE.SOCIAL.TWITTER, "content"), addAttribute(SITE.SOCIAL.TWITTER, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, SITE.URL).toString(), "content"), addAttribute(title, "content"), addAttribute(new URL(SITE.URL).hostname, "content"), addAttribute(url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, SITE.URL).toString(), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, SITE.URL).toString(), "content"), addAttribute(url, "content"), addAttribute(url, "content"), addAttribute(url, "content"), maybeRenderHead(), Array.isArray(schema) ? renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))) : schema && Object.keys(schema).length ? renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema))) : null, type === "article" && renderTemplate(_c || (_c = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": [new URL(image, SITE.URL).toString()],
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "author": [{
      "@type": "Person",
      "name": author.name,
      "url": author.url,
      ...author.image && { "image": author.image }
    }],
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
  }))), renderHead(), addAttribute(currentPath === "/" ? "page" : void 0, "aria-current"), toolsData.map((tool) => renderTemplate`<a${addAttribute(tool.url, "href")} class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">${tool.icon}</span> ${tool.name} </a>`), insuranceData.map((insurance) => renderTemplate`<a${addAttribute(insurance.url, "href")} class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">${insurance.icon}</span> ${insurance.name} </a>`), blogCategories.map((category2) => renderTemplate`<a${addAttribute(category2.url, "href")} class="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" role="menuitem"> <span class="mr-3 text-lg">${category2.icon}</span> ${category2.name} </a>`), addAttribute(currentPath === "/search/" ? "page" : void 0, "aria-current"), addAttribute(currentPath === "/about/" ? "page" : void 0, "aria-current"), addAttribute(currentPath === "/contact/" ? "page" : void 0, "aria-current"), addAttribute(currentPath === "/" ? "page" : void 0, "aria-current"), toolsData.map((tool) => renderTemplate`<a${addAttribute(tool.url, "href")} class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[40px]"> <span class="mr-3">${tool.icon}</span>${tool.name} </a>`), insuranceData.map((insurance) => renderTemplate`<a${addAttribute(insurance.url, "href")} class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[40px]"> <span class="mr-3">${insurance.icon}</span>${insurance.name} </a>`), addAttribute(currentPath === "/search/" ? "page" : void 0, "aria-current"), addAttribute(currentPath === "/about/" ? "page" : void 0, "aria-current"), addAttribute(currentPath === "/contact/" ? "page" : void 0, "aria-current"), blogCategories.map((category2) => renderTemplate`<a${addAttribute(category2.url, "href")} class="flex items-center px-4 py-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors min-h-[40px]"> <span class="mr-3">${category2.icon}</span> ${category2.name} </a>`), renderSlot($$result, $$slots["default"]), SITE.NAME, addAttribute(url === "/privacy/" ? "page" : void 0, "aria-current"), addAttribute(url === "/privacy/do-not-sell/" ? "page" : void 0, "aria-current"), addAttribute(url === "/terms/" ? "page" : void 0, "aria-current"), addAttribute(url === "/disclaimer/" ? "page" : void 0, "aria-current"), addAttribute(url === "/affiliate-disclosure/" ? "page" : void 0, "aria-current"), addAttribute(url === "/auto-insurance/" ? "page" : void 0, "aria-current"), addAttribute(url === "/health-insurance/" ? "page" : void 0, "aria-current"), addAttribute(url === "/homeowners-insurance/" ? "page" : void 0, "aria-current"), addAttribute(url === "/life-insurance/" ? "page" : void 0, "aria-current"), addAttribute(url === "/contact/" ? "page" : void 0, "aria-current"), addAttribute(url === "/about/" ? "page" : void 0, "aria-current"), (/* @__PURE__ */ new Date()).getFullYear(), SITE.NAME);
}, "C:/Mirza/Websites/Insurance/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, SITE as S };
