import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sezarr.com");
const $$ResponsivePicture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResponsivePicture;
  const { src, alt = "", width, height, class: klass = "", priority = false } = Astro2.props;
  const base = src.replace(/\.[^.]+$/, "");
  const avif = base + ".avif";
  const webp = base + ".webp";
  return renderTemplate`${maybeRenderHead()}<picture> <source${addAttribute(avif, "srcset")} type="image/avif"> <source${addAttribute(webp, "srcset")} type="image/webp"> <img${addAttribute(src, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(priority ? "eager" : "lazy", "loading")} decoding="async"${addAttribute(priority ? "high" : "auto", "fetchpriority")}${addAttribute(klass, "class")}> </picture>`;
}, "C:/Mirza/Websites/Insurance/src/components/ResponsivePicture.astro", void 0);

export { $$ResponsivePicture as $ };
