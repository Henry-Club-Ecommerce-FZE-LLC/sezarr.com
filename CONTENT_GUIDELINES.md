# Content Guidelines for Insurance Articles

## Table of Contents Sidebar Implementation

All articles on the site now use an **automatic Table of Contents sidebar** that appears on the right side of desktop screens and as a collapsible section on mobile.

### ✅ What's Already Set Up

- **Automatic TOC Generation**: The `TableOfContents.astro` component automatically generates a TOC for all articles
- **Universal Application**: The `[category]/[slug].astro` layout applies the TOC to ALL articles (existing and future)
- **Main Sections Only**: TOC shows only H2 headings (`##`) for clean navigation
- **Responsive Design**: 
  - Desktop: Sticky sidebar on the right (280px wide)
  - Mobile: Collapsible section at the top
- **Interactive Features**: 
  - Smooth scroll to sections
  - Active section highlighting
  - Professional styling

### 📝 Article Writing Guidelines

#### DO ✅

1. **Start with Introduction Paragraph**: Begin articles directly with the introduction content (no H1 heading needed)
   ```markdown
   ---
   title: "Article Title"
   description: "Article description"
   ---
   
   Your introduction paragraph starts here immediately after frontmatter...
   ```

2. **Use H2 for Main Sections**: Use `## Section Name {#section-id}` for main topics
   ```markdown
   ## Understanding Auto Insurance Requirements {#understanding-requirements}
   ## Best for Customer Service {#best-customer-service}
   ```

3. **Include Anchor IDs**: Always add `{#unique-id}` to H2 headings for proper linking
   ```markdown
   ## Frequently Asked Questions {#faq}
   ```

4. **Structure with 6-10 Main Sections**: Ideal TOC length for readability
   - Introduction paragraph (no heading)
   - 4-6 main content sections  
   - FAQ section
   - Conclusion

5. **Use Descriptive Section Names**: Clear, actionable headings
   ```markdown
   ## How to Choose the Right Company {#choosing-right-company}
   ## 15+ Ways to Save Money on Car Insurance {#money-saving-tips}
   ```

#### DON'T ❌

1. **Don't Include Manual TOC**: Never add a "Table of Contents" section in the article content

2. **Don't Use H1 in Content**: Never include `# Main Title` in the markdown - the title comes from frontmatter
   ```markdown
   ## Table of Contents    <!-- ❌ Don't do this -->
   1. [Section 1](#section-1)
   2. [Section 2](#section-2)
   ```

2. **Don't Rely on H3+ for Main Navigation**: H3, H4, H5, H6 are for sub-sections within H2 blocks
   ```markdown
   ## Main Section {#main}        <!-- ✅ Shows in TOC -->
   ### Sub-section                <!-- ❌ Doesn't show in TOC -->
   #### Detail Point              <!-- ❌ Doesn't show in TOC -->
   ```

3. **Don't Skip Anchor IDs**: Always include them for proper TOC linking

4. **Don't Use More Than 12 H2 Sections**: Keep TOC focused and scannable

### 🗂️ Recommended Article Structure

```markdown
---
title: "Your Article Title"
category: "auto"
publishDate: "2025-01-01"
---

# Your Article Title

Brief introduction paragraph explaining what the article covers...

## Understanding [Topic] {#understanding-topic}
Main educational content...

## Best [Solutions/Options] {#best-solutions}
Comparative content...

## How to [Action] {#how-to-action}
Step-by-step guidance...

## [Specific Category] Analysis {#category-analysis}
Detailed breakdown...

## Expert Tips and Strategies {#expert-tips}
Professional advice...

## Common Mistakes to Avoid {#common-mistakes}
Warning content...

## Frequently Asked Questions {#faq}
Q&A content...

## Conclusion
Summary and next steps...
```

### 🔧 Technical Implementation

The TOC system is fully automated through:

- **Component**: `src/components/TableOfContents.astro`
- **Layout**: `src/pages/[category]/[slug].astro` 
- **Selector**: Finds all `main h2[id]` elements
- **Styling**: Professional, responsive design with hover effects
- **JavaScript**: Smooth scroll, active highlighting, intersection observer

### 🚀 For New Articles

Simply follow the H2 structure guidelines above. The TOC will automatically:
- Generate navigation links
- Handle smooth scrolling
- Highlight active sections
- Adapt to mobile/desktop layouts
- Provide professional styling

No additional setup or configuration needed!

---

*Last Updated: September 24, 2025*
*TOC System: Active on all articles*