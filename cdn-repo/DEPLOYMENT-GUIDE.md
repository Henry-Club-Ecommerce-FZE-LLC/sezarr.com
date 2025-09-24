# 🚀 CDN Repository Setup & Deployment Guide

## Step-by-Step GitHub & jsDelivr Integration

### 📋 **Prerequisites**
- GitHub account
- Git installed on your system
- Access to your website's build process

---

## 🏗️ **Phase 1: Create GitHub Repository**

### 1. **Create New GitHub Repository**
```bash
# Option A: Via GitHub Web Interface
1. Go to https://github.com/new
2. Repository name: "sezarr-insurance-cdn"
3. Description: "CDN-optimized assets for Sezarr Insurance via jsDelivr"
4. Set to Public (required for jsDelivr)
5. Initialize with README: ❌ (we have our own)
6. Click "Create repository"
```

### 2. **Initialize Local Repository**
```bash
# Navigate to your CDN repo folder
cd "C:\Mirza\Websites\Insurance\cdn-repo"

# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial CDN asset repository setup

- Optimized CSS, JS, and image assets
- jsDelivr-ready package.json configuration  
- Multi-format image support (WebP/AVIF/JPG)
- Service worker and critical scripts"

# Add GitHub remote (replace 'yourusername')
git remote add origin https://github.com/yourusername/sezarr-insurance-cdn.git

# Push to GitHub
git push -u origin main
```

---

## 🔗 **Phase 2: Configure jsDelivr Integration**

### 3. **Update Repository for jsDelivr**

Your `package.json` already includes jsDelivr configuration:
```json
{
  "jsdelivr": "assets/",
  "files": ["assets/**/*", "README.md", "CHANGELOG.md"]
}
```

### 4. **Create Tagged Release**
```bash
# Tag your first release
git tag -a v1.0.0 -m "CDN Assets v1.0.0

- Initial release with optimized assets
- JavaScript: 5 core files, 57 build artifacts  
- Images: 171 optimized files (WebP/AVIF/JPG)
- Service worker v3 with dual caching"

# Push tags
git push origin v1.0.0
```

### 5. **Test jsDelivr URLs** (Available within 12 hours)
```html
<!-- Service Worker -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/sezarr-insurance-cdn@1.0.0/assets/sw.js"></script>

<!-- Theme Script -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/sezarr-insurance-cdn@1.0.0/assets/scripts/enhancedThemeScript.js"></script>

<!-- Images -->
<img src="https://cdn.jsdelivr.net/gh/yourusername/sezarr-insurance-cdn@1.0.0/assets/images/hero-insurance-lg.webp">

<!-- JavaScript Assets -->
<script src="https://cdn.jsdelivr.net/gh/yourusername/sezarr-insurance-cdn@1.0.0/assets/js/hoisted-DKOxBC1d.js"></script>
```

---

## ⚙️ **Phase 3: Update Website Configuration**

### 6. **Modify BaseLayout.astro**
```astro
---
// Add CDN configuration
const CDN_BASE = 'https://cdn.jsdelivr.net/gh/yourusername/sezarr-insurance-cdn@1.0.0/assets';
const USE_CDN = import.meta.env.PROD; // Use CDN in production only
---

<head>
  <!-- Enhanced DNS prefetch for jsDelivr -->
  <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  
  <!-- CDN asset preloading -->
  {USE_CDN && (
    <>
      <link rel="preload" href={`${CDN_BASE}/sw.js`} as="script">
      <link rel="preload" href={`${CDN_BASE}/scripts/enhancedThemeScript.js`} as="script">
    </>
  )}
</head>

<body>
  <!-- Load theme script from CDN -->
  <script 
    src={USE_CDN ? `${CDN_BASE}/scripts/enhancedThemeScript.js` : '/scripts/enhancedThemeScript.js'}
    type="module">
  </script>
  
  <!-- Register service worker from CDN -->
  <script>
    if ('serviceWorker' in navigator) {
      const swUrl = {USE_CDN 
        ? `${CDN_BASE}/sw.js` 
        : '/sw.js'
      };
      navigator.serviceWorker.register(swUrl);
    }
  </script>
</body>
```

### 7. **Update astro.config.mjs**
```javascript
export default defineConfig({
  // ... existing config
  
  vite: {
    define: {
      'import.meta.env.CDN_BASE': JSON.stringify(
        process.env.NODE_ENV === 'production' 
          ? 'https://cdn.jsdelivr.net/gh/yourusername/sezarr-insurance-cdn@1.0.0/assets'
          : ''
      )
    }
  }
});
```

---

## 🔄 **Phase 4: Automated Deployment Workflow**

### 8. **Create Update Script**
```javascript
// scripts/update-cdn.mjs
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

// Build and optimize assets
console.log('🏗️ Building site...');
execSync('npm run build');

console.log('⚡ Optimizing for CDN...');
execSync('node scripts/cdn-optimizer.mjs');

// Copy to CDN repo
console.log('📦 Copying assets to CDN repo...');
execSync('robocopy cdn-assets cdn-repo\\assets /E /PURGE');

// Update version in package.json
const pkg = JSON.parse(readFileSync('cdn-repo/package.json'));
const [major, minor, patch] = pkg.version.split('.').map(Number);
pkg.version = `${major}.${minor}.${patch + 1}`;
writeFileSync('cdn-repo/package.json', JSON.stringify(pkg, null, 2));

console.log(`🚀 Ready to deploy v${pkg.version}`);
console.log('Next steps:');
console.log(`1. cd cdn-repo`);
console.log(`2. git add .`);
console.log(`3. git commit -m "Release v${pkg.version}"`);
console.log(`4. git tag v${pkg.version}`);
console.log(`5. git push origin main --tags`);
```

### 9. **Add NPM Script**
```json
{
  "scripts": {
    "cdn:update": "node scripts/update-cdn.mjs",
    "cdn:deploy": "cd cdn-repo && git add . && git commit -m \"Auto-update CDN assets\" && git push"
  }
}
```

---

## 📊 **Phase 5: Monitoring & Performance**

### 10. **Performance Monitoring**
```javascript
// Add to your main website
function logCDNPerformance() {
  if (performance.getEntriesByType) {
    const cdnEntries = performance.getEntriesByType('navigation')
      .concat(performance.getEntriesByType('resource'))
      .filter(entry => entry.name.includes('cdn.jsdelivr.net'));
    
    console.log('CDN Performance:', cdnEntries.map(e => ({
      url: e.name,
      duration: e.duration,
      size: e.transferSize
    })));
  }
}

// Run after page load
window.addEventListener('load', () => {
  setTimeout(logCDNPerformance, 1000);
});
```

### 11. **jsDelivr Analytics**
- **Usage Stats:** https://www.jsdelivr.com/package/gh/yourusername/sezarr-insurance-cdn
- **API Endpoint:** https://api.jsdelivr.com/v1/package/gh/yourusername/sezarr-insurance-cdn/stats

---

## 🛠️ **Phase 6: Maintenance & Updates**

### 12. **Regular Update Process**
```bash
# 1. Make changes to your main website
# 2. Build and test locally  
npm run build

# 3. Update CDN assets
npm run cdn:update

# 4. Deploy to GitHub
cd cdn-repo
git add .
git commit -m "Update assets - performance improvements"
git tag v1.0.1
git push origin main --tags

# 5. Wait 12-24 hours for jsDelivr cache refresh
# 6. Test new CDN URLs
```

### 13. **Fallback Strategy**
```javascript
// Enhanced service worker with CDN fallback
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('cdn.jsdelivr.net')) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // Fallback to local assets
          const localUrl = event.request.url
            .replace('https://cdn.jsdelivr.net/gh/yourusername/sezarr-insurance-cdn@1.0.0/assets', '')
          return fetch(localUrl);
        })
    );
  }
});
```

---

## ✅ **Verification Checklist**

- [ ] GitHub repository created and configured
- [ ] Repository is **public** (required for jsDelivr)  
- [ ] `package.json` has correct jsDelivr configuration
- [ ] Tagged release created (v1.0.0)
- [ ] Assets copied to `assets/` directory
- [ ] jsDelivr URLs tested (wait 12+ hours after push)
- [ ] Website updated to use CDN URLs in production
- [ ] Fallback mechanism implemented
- [ ] Performance monitoring configured

---

## 🎯 **Expected Performance Improvements**

### **With CDN Implementation:**
- ⚡ **20-40% faster global loading** (400+ edge locations)
- ⚡ **Reduced server load** (static assets served by CDN)
- ⚡ **Better caching** (1-year CDN cache headers)
- ⚡ **HTTP/2 multiplexing** (jsDelivr support)
- ⚡ **Brotli compression** (better than gzip)

### **Asset Delivery Benefits:**
- **JavaScript:** 57 optimized files via CDN
- **Images:** 171 multi-format files (WebP/AVIF/JPG)
- **Service Worker:** Enhanced with CDN + local dual cache
- **Global:** Sub-100ms delivery from nearest edge

---

## 🆘 **Troubleshooting**

### **Common Issues:**

#### **jsDelivr not serving files:**
- Ensure repository is public
- Wait 12-24 hours after creating tags  
- Check package.json `files` and `jsdelivr` fields
- Verify tagged release exists on GitHub

#### **404 errors on CDN URLs:**
- Confirm file paths match exactly
- Check if files exist in `assets/` directory
- Verify tag version in URLs matches GitHub tags

#### **Slow CDN delivery:**
- jsDelivr has a 12-hour cache refresh cycle
- First-time requests may be slower
- Consider using version ranges: `@1` instead of `@1.0.0`

---

## 📞 **Support Resources**

- **jsDelivr Docs:** https://www.jsdelivr.com/documentation
- **GitHub Tags:** https://docs.github.com/en/repositories/releases
- **CDN Performance:** https://gtmetrix.com/
- **Issue Tracker:** GitHub Issues on your CDN repository

---

**🎉 Ready to deploy your CDN! This setup will provide significant performance improvements for global users.**