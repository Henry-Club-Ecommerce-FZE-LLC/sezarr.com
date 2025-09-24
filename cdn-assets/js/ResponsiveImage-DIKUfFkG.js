import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, s as spreadAttributes, a as renderTemplate } from './astro/server-BXiPkZry.js';
/* empty css                        */
import 'clsx';

const $$Astro = createAstro("https://sezarr.com");
const $$ResponsiveImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResponsiveImage;
  const {
    src,
    alt,
    width,
    height,
    sizes = "(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1200px) 1200px, 1920px",
    loading = "lazy",
    decoding = "async",
    class: className = "",
    priority = false,
    ...rest
  } = Astro2.props;
  const baseName = src.replace(/\.[^/.]+$/, "").replace("/images/", "");
  const baseUrl = `/images/${baseName}`;
  const generateSrcSet = (format) => {
    const sizes2 = [
      { suffix: "-sm", width: 480 },
      { suffix: "-md", width: 768 },
      { suffix: "-lg", width: 1200 },
      { suffix: "", width: 1920 }
    ];
    return sizes2.map((size) => `${baseUrl}${size.suffix}.${format} ${size.width}w`).join(", ");
  };
  const finalLoading = priority ? "eager" : loading;
  return renderTemplate`${maybeRenderHead()}<picture${addAttribute(`responsive-image ${className}`, "class")}${spreadAttributes(rest)} data-astro-cid-jbhojhg7> <!-- AVIF format (best compression, modern browsers) --> <source type="image/avif"${addAttribute(generateSrcSet("avif"), "srcset")}${addAttribute(sizes, "sizes")} data-astro-cid-jbhojhg7> <!-- WebP format (excellent compression, wide support) --> <source type="image/webp"${addAttribute(generateSrcSet("webp"), "srcset")}${addAttribute(sizes, "sizes")} data-astro-cid-jbhojhg7> <!-- JPEG fallback (universal support) --> <source type="image/jpeg"${addAttribute(generateSrcSet("jpg"), "srcset")}${addAttribute(sizes, "sizes")} data-astro-cid-jbhojhg7> <!-- Fallback img element --> <img${addAttribute(`${baseUrl}.jpg`, "src")}${addAttribute(alt, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(finalLoading, "loading")}${addAttribute(decoding, "decoding")} class="w-full h-auto"${addAttribute(priority ? "content-visibility: auto;" : "", "style")} data-astro-cid-jbhojhg7> </picture> `;
}, "C:/Mirza/Websites/Insurance/src/components/ResponsiveImage.astro", void 0);

export { $$ResponsiveImage as $ };
