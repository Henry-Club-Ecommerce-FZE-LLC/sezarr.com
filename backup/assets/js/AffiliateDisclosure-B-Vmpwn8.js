import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sezarr.com");
const $$AffiliateDisclosure = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AffiliateDisclosure;
  const { compact = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(compact ? "text-xs text-gray-500 dark:text-gray-400" : "text-sm text-gray-600 dark:text-gray-300 border dark:border-gray-600 rounded p-3 bg-gray-50 dark:bg-gray-800", "class")}>
We may earn a commission when you click links on our site — at no extra cost to you. Our editorial opinions are our own.
</div>`;
}, "C:/Mirza/Websites/Insurance/src/components/AffiliateDisclosure.astro", void 0);

export { $$AffiliateDisclosure as $ };
