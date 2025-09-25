<!--
JSON-LD STRUCTURED DATA GUIDELINES

To prevent Google Search Console errors and ensure proper structured data:

❌ NEVER DO THIS (causes malformed JSON-LD):
<script type="application/ld+json">
{JSON.stringify(schema)}
</script>

❌ NEVER DO THIS (causes malformed JSON-LD):
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage"
  // ... hardcoded JSON
}
</script>

✅ ALWAYS DO THIS (proper Astro rendering):
<script type="application/ld+json" set:html={JSON.stringify(schema)}></script>

✅ OR USE THE REUSABLE COMPONENT:
<JsonLdScript schema={schemaObject} />

WHY?
- Astro's default templating escapes JSON content incorrectly
- Google Search Console cannot parse malformed JSON-LD
- The set:html directive preserves JSON formatting
- The JsonLdScript component ensures consistency

COMPONENT LOCATIONS:
- Components: src/components/JsonLdScript.astro (reusable)
- Breadcrumbs: src/components/Breadcrumbs.astro (fixed)
- FAQ: src/components/FAQ.astro (fixed)
- All other schema components properly use set:html directive
-->

REMINDER: Always use set:html={JSON.stringify(schema)} for JSON-LD scripts!