# CDN Testing Guide
*How to verify CDN optimizations are working*

## 🧪 Testing Methods

### 1. Browser Developer Tools Test
**Open Developer Tools (F12) → Network Tab**

#### Check DNS Prefetch:
1. Reload page (Ctrl+F5)
2. Look for early DNS lookups to:
   - `cdn.jsdelivr.net`
   - `fonts.googleapis.com`
   - `fonts.gstatic.com`
   - `unpkg.com`

#### Check Resource Hints:
1. Look for `<link rel="dns-prefetch">` in HTML source
2. Verify `<link rel="preconnect">` tags
3. Check `<link rel="preload">` for critical assets

#### Service Worker Verification:
1. Go to Application tab → Service Workers
2. Should see "sezarr-v3" service worker active
3. Check Cache Storage for "sezarr-v3" and "sezarr-cdn-v3"

### 2. Network Performance Analysis
**Network Tab Timing Analysis:**

- **DNS Lookup Time**: Should be ~0ms for prefetched domains
- **Connection Time**: Should be faster for preconnected domains
- **Resource Loading**: Check if resources load from cache on repeat visits

### 3. Service Worker Cache Test
**Test Cache Functionality:**

1. Load page normally
2. Go offline (Network tab → Offline checkbox)
3. Reload page - should work from cache
4. Check which resources are served from cache vs network

## 🔍 Manual Testing Steps

### Step 1: Network Tab Analysis
```
1. Open https://sezarr.com
2. F12 → Network tab
3. Hard refresh (Ctrl+Shift+R)
4. Look for timing improvements in DNS/Connection columns
```

### Step 2: Resource Hints Verification
```
1. View page source (Ctrl+U)
2. Search for "dns-prefetch" - should find 4 entries
3. Search for "preconnect" - should find 3 entries  
4. Search for "preload" - should find 2 entries
```

### Step 3: Service Worker Test
```
1. F12 → Application tab
2. Service Workers section
3. Should show "sezarr-v3" as activated
4. Cache Storage should show both caches
```

### Step 4: Offline Functionality
```
1. Load page normally
2. F12 → Network tab → Throttling → Offline
3. Refresh page - should work from cache
4. Theme toggle should still function
```

## 📊 Performance Metrics to Check

### Core Web Vitals:
- **FCP (First Contentful Paint)**: Should improve with preloading
- **LCP (Largest Contentful Paint)**: Faster with optimized caching
- **CLS (Cumulative Layout Shift)**: Stable with proper resource loading

### Network Metrics:
- **DNS Lookup**: ~0ms for prefetched domains
- **Connection Time**: Reduced for preconnected resources
- **Time to First Byte**: Improved with caching
- **Total Load Time**: Overall reduction expected

## 🛠 Automated Testing Commands

### Test DNS Prefetch (PowerShell):
```powershell
# Test if DNS prefetch domains resolve quickly
Measure-Command { nslookup cdn.jsdelivr.net }
Measure-Command { nslookup fonts.googleapis.com }
```

### Test Service Worker Registration:
```javascript
// Run in browser console
navigator.serviceWorker.getRegistrations().then(registrations => {
  console.log('Service Workers:', registrations);
  registrations.forEach(reg => {
    console.log('SW State:', reg.active?.state);
    console.log('SW Script:', reg.active?.scriptURL);
  });
});
```

### Test Cache Storage:
```javascript
// Run in browser console
caches.keys().then(cacheNames => {
  console.log('Available Caches:', cacheNames);
  return Promise.all(
    cacheNames.map(cacheName => 
      caches.open(cacheName).then(cache => 
        cache.keys().then(keys => ({
          cache: cacheName,
          entries: keys.length
        }))
      )
    )
  );
}).then(results => console.table(results));
```

## ⚡ Quick Verification Checklist

### ✅ Visual Indicators:
- [ ] Page loads without console errors
- [ ] Theme toggle works immediately
- [ ] No flash of unstyled content
- [ ] Smooth navigation transitions

### ✅ Network Tab Checks:
- [ ] DNS lookup times ~0ms for CDN domains
- [ ] Service worker intercepts requests
- [ ] Resources served from cache on repeat visits
- [ ] Preloaded assets appear early in waterfall

### ✅ Application Tab Checks:
- [ ] Service worker "sezarr-v3" active
- [ ] Two cache storage entries present
- [ ] Cached resources visible in storage

### ✅ Performance Checks:
- [ ] First visit: DNS prefetch working
- [ ] Second visit: Resources from cache
- [ ] Offline mode: Basic functionality preserved
- [ ] Mobile: Responsive and fast loading

## 🚨 Troubleshooting Common Issues

### Service Worker Not Updating:
```javascript
// Force service worker update
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(registration => registration.update());
});
```

### Cache Not Working:
1. Clear browser cache completely
2. Hard refresh (Ctrl+Shift+R)
3. Check Network tab for cache hits

### DNS Prefetch Not Working:
1. Verify HTML contains prefetch links
2. Check network security policies
3. Test on different networks

## 📈 Expected Results

### Before CDN Optimization:
- DNS lookups: 20-100ms per domain
- Cold cache: Full resource downloads
- Offline: Complete failure

### After CDN Optimization:
- DNS lookups: ~0ms for prefetched domains
- Warm cache: Instant resource loading
- Offline: Core functionality preserved
- Service worker: Active resource management

## 🎯 Success Criteria

**CDN is working correctly when:**
1. ✅ Service worker v3 is active
2. ✅ DNS prefetch reduces lookup times
3. ✅ Resources load from cache on repeat visits
4. ✅ Page works offline for cached resources
5. ✅ No performance regressions in Core Web Vitals
6. ✅ Theme and interactivity work immediately

Use these tests to verify your CDN optimizations are providing the expected performance benefits!