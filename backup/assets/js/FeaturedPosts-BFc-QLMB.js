import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, i as spreadAttributes, e as renderSlot, a as renderTemplate, r as renderComponent } from './vendor-Dth9j5GM.js';
import 'kleur/colors';
import { g as getCollection } from './_astro_content-uyHM1YMY.js';
import 'clsx';

const $$Astro = createAstro("https://sezarr.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, size = "md", variant = "primary", class: klass = "", ...props } = Astro2.props;
  const sizes = {
    sm: "px-3 py-2 text-sm min-h-[44px]",
    md: "px-4 py-3 min-h-[44px]",
    lg: "px-6 py-4 text-lg min-h-[48px]"
  };
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500",
    outline: "border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white focus:ring-blue-500"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "inline-flex items-center justify-center rounded-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95",
    sizes[size],
    variants[variant],
    klass
  ], "class:list")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Mirza/Websites/Insurance/src/components/Button.astro", void 0);

const $$FeaturedPosts = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="mx-auto max-w-5xl px-4"> <h2 class="text-3xl font-bold text-center">Latest Insights</h2> <div class="grid md:grid-cols-3 gap-8 mt-10"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/posts/${post.slug}`, "href")} class="block border rounded-lg overflow-hidden group hover:shadow-lg transition"> ${post.data.heroImage && renderTemplate`<img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-40 object-cover">`} <div class="p-4"> <h3 class="font-semibold">${post.data.title}</h3> <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">${post.data.description}</p> </div> </a>`)} </div> <div class="text-center mt-10"> ${renderComponent($$result, "Button", $$Button, { "href": "/posts" }, { "default": async ($$result2) => renderTemplate`View All Guides` })} </div> </div> </section>`;
}, "C:/Mirza/Websites/Insurance/src/components/FeaturedPosts.astro", void 0);

export { $$FeaturedPosts as $ };
