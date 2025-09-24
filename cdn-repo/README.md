# Sezarr Insurance CDN Assets

🚀 **High-performance static assets for global delivery via jsDelivr CDN**

This repository contains optimized static assets (CSS, JavaScript, images, fonts) for the Sezarr Insurance website, designed for fast global delivery through jsDelivr's CDN network.

## 📦 What's Included

- **CSS**: Minified stylesheets and critical CSS
- **JavaScript**: Optimized and compressed JS files  
- **Images**: WebP, AVIF, and fallback formats
- **Fonts**: Self-hosted font files (when available)

## 🌍 CDN Usage

### Via jsDelivr CDN:
```html
<!-- Latest version -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com@latest/cdn-assets/css/main.css">
<script src="https://cdn.jsdelivr.net/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com@latest/cdn-assets/js/main.js"></script>

<!-- Specific version (recommended for production) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com@1.0.0/cdn-assets/css/main.css">
<script src="https://cdn.jsdelivr.net/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com@1.0.0/cdn-assets/js/main.js"></script>
```

### Images:
```html
<!-- Responsive images with modern formats -->
<picture>
  <source srcset="https://cdn.jsdelivr.net/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com@latest/cdn-assets/images/hero.avif" type="image/avif">
  <source srcset="https://cdn.jsdelivr.net/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com@latest/cdn-assets/images/hero.webp" type="image/webp">
  <img src="https://cdn.jsdelivr.net/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com@latest/cdn-assets/images/hero.jpg" alt="Hero image">
</picture>
```

## 📁 Repository Structure

```
assets/
├── css/           # Minified CSS files
├── js/            # Optimized JavaScript files
├── images/        # WebP/AVIF/JPG images
└── fonts/         # Self-hosted font files
```

## 🚀 Performance Benefits

- **Global CDN**: Assets served from 400+ locations worldwide
- **HTTP/2**: Multiplexed connections for faster loading
- **Brotli Compression**: Up to 20% better compression than gzip
- **Edge Caching**: 1-year CDN cache for static assets
- **Modern Formats**: WebP/AVIF images for 60-80% size reduction

## 📊 Asset Optimization

All assets are optimized for performance:
- CSS: Minified with cssnano
- JavaScript: Compressed with terser
- Images: Multi-format with responsive sizing
- Fonts: Subset and WOFF2 optimized

## 🔄 Versioning

This repository uses semantic versioning:
- **Major** (x.0.0): Breaking changes
- **Minor** (0.x.0): New features, assets
- **Patch** (0.0.x): Bug fixes, optimizations

## 📈 Usage Stats

jsDelivr provides free usage statistics:
- [View download stats](https://www.jsdelivr.com/package/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com)
- [API endpoint](https://api.jsdelivr.com/v1/package/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com/stats)

## 🛠 Development

To update assets:
1. Modify source files in main website repository
2. Run optimization scripts
3. Copy optimized files to this repository
4. Commit and tag new version
5. jsDelivr will automatically update within 12 hours

## 📋 License

MIT License - See LICENSE file for details.

---

**⚡ Powered by [jsDelivr](https://www.jsdelivr.com/) - Free, fast, and reliable CDN for open source**