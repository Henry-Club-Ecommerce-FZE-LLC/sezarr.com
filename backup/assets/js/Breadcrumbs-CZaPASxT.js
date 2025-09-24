import { b as createAstro, c as createComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sezarr.com");
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { items = [] } = Astro2.props;
  ({
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  });
  return renderTemplate(_a || (_a = __template(["", '<nav aria-label="Breadcrumb" class="text-sm text-gray-600 dark:text-gray-300"> <ol class="flex flex-wrap gap-1"> ', ' </ol> <script type="application/ld+json">{JSON.stringify(jsonLd)}<\/script> </nav>'])), maybeRenderHead(), items.map((it, i) => renderTemplate`<li class="flex items-center"> ${i > 0 && renderTemplate`<span class="mx-1">/</span>`} <a${addAttribute(it.url, "href")} class="hover:underline">${it.name}</a> </li>`));
}, "C:/Mirza/Websites/Insurance/src/components/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
