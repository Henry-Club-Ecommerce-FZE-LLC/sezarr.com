# Table of Contents (TOC) Guide

## How It Works

The Table of Contents automatically generates navigation for all your articles based on headings. It's completely **automatic** and requires **no manual setup**.

### What Gets Included

- **H2 headings (`## Heading`)**: Main sections
- **H3 headings (`### Heading`)**: Sub-sections (indented)
- **H1 is skipped** (reserved for article title)
- **H4+ are ignored** (too detailed for TOC)

### Example Article Structure

```markdown
# Article Title (ignored in TOC)

## Understanding Auto Insurance  ← Shows in TOC
Some content...

### Safe Driver Discounts      ← Shows in TOC (indented)
More content...

### Policy Bundle Savings      ← Shows in TOC (indented)
More content...

## How to Stack Discounts      ← Shows in TOC
Content...

#### Detailed Steps            ← Ignored in TOC
```

### Features

✅ **Automatic Generation**: Scans headings when page loads
✅ **Smooth Scrolling**: Clicking jumps to sections
✅ **Active Highlighting**: Shows current section as you scroll
✅ **Responsive Design**: Hidden on mobile, sticky on desktop
✅ **Dark Mode Support**: Matches site theme
✅ **ID Generation**: Creates clean anchor links automatically

### Best Practices for Authors

1. **Use H2 for main sections** (`## Section Name`)
2. **Use H3 for sub-sections** (`### Sub-section Name`) 
3. **Keep headings descriptive** (they become TOC labels)
4. **Aim for 4-8 main sections** (optimal TOC length)
5. **Use consistent heading hierarchy** (don't skip levels)

### Technical Details

- **Location**: Right sidebar on desktop (>= 1024px width)
- **Script**: Runs after DOM content loaded + 500ms delay
- **Styling**: Tailwind classes with dark mode variants
- **Performance**: Lightweight IntersectionObserver for highlighting
- **Fallback**: Hides TOC if no headings found

### Troubleshooting

**TOC is empty?**
- Check if you have H2 or H3 headings in your article
- Ensure headings use proper Markdown syntax (`##` not `<h2>`)

**Links don't work?**
- IDs are auto-generated from heading text
- Special characters are cleaned automatically

**Not showing on mobile?**
- This is intentional - TOC is hidden on mobile for better UX

### Future Articles

Every new article published will automatically get a working TOC if it has H2/H3 headings. No additional setup needed!

---

*This system is fully automated and will work for all future content.*