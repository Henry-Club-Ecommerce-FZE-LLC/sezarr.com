import { b as createAstro, c as createComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server-BXiPkZry.js';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://sezarr.com");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { items = [] } = Astro2.props;
  ({
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a }
    }))
  });
  return renderTemplate(_a || (_a = __template(["", '<section class="my-8"> <h2 class="text-xl font-semibold mb-3">Frequently asked questions</h2> <div class="divide-y"> ', ' </div> <script type="application/ld+json">{JSON.stringify(schema)}<\/script> </section>'])), maybeRenderHead(), items.map((it, i) => renderTemplate`<details class="py-3 group"> <summary class="cursor-pointer font-medium">${it.q}</summary> <div class="mt-2 text-gray-700 dark:text-gray-200">${it.a}</div> </details>`));
}, "C:/Mirza/Websites/Insurance/src/components/FAQ.astro", void 0);

export { $$FAQ as $ };
