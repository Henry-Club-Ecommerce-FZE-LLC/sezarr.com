import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import 'clsx';
import { S as SITE } from './BaseLayout-BQKj_NaX.js';
/* empty css                         */

const $$Astro = createAstro("https://sezarr.com");
const $$AdSenseBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdSenseBlock;
  const { slot = "auto", format = "fluid", label = "Advertisement" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside class="my-6 text-center ad-space" style="contain: layout style;" data-astro-cid-tr7sohxs> <div class="text-xs text-gray-500 dark:text-gray-400 mb-1" aria-hidden="true" data-astro-cid-tr7sohxs>${label}</div>  <div class="ad-container" style="min-height: 250px; width: 100%; background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 4px; display: flex; align-items: center; justify-content: center;" class="dark:bg-gray-800 dark:border-gray-600" data-astro-cid-tr7sohxs> <ins class="adsbygoogle" style="display:block; width: 100%; height: 250px;"${addAttribute(SITE.ADSENSE_CLIENT, "data-ad-client")}${addAttribute(slot, "data-ad-slot")}${addAttribute(format, "data-ad-format")} data-full-width-responsive="true" data-astro-cid-tr7sohxs></ins> </div>  </aside> `;
}, "C:/Mirza/Websites/Insurance/src/components/AdSenseBlock.astro", void 0);

export { $$AdSenseBlock as $ };
