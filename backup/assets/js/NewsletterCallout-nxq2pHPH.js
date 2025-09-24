import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sezarr.com");
const $$NewsletterCallout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewsletterCallout;
  const { variant = "inline" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside${addAttribute(`mt-10 rounded border ${variant === "block" ? "p-6" : "p-4"} bg-white/70 dark:bg-gray-800/60`, "class")}> <div class="font-semibold">Stay in the know</div> <p class="text-sm text-gray-600 dark:text-gray-300 mt-1">Get our latest guides by email or follow the RSS feed.</p> <div class="mt-3 flex gap-3"> <a class="px-4 py-3 rounded bg-brand-600 text-white text-base min-h-[44px] flex items-center justify-center" href="mailto:subscribe@example.com?subject=Subscribe%20to%20Insurance%20Insights%20USA&body=Please%20subscribe%20me%20to%20updates.">Subscribe via Email</a> <a class="px-4 py-3 rounded border text-base min-h-[44px] flex items-center justify-center" href="/rss.xml">RSS Feed</a> </div> </aside>`;
}, "C:/Mirza/Websites/Insurance/src/components/NewsletterCallout.astro", void 0);

export { $$NewsletterCallout as $ };
