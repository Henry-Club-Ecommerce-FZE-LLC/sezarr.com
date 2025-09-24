# 🚀 Deployment Guide: Updates to Git & CDN

## 🎯 **Quick Reference - How to Deploy Updates**

### **Option 1: Full Automated Deployment (Recommended)**
```powershell
# Deploy with custom message
npm run deploy "Added new insurance calculator"

# Deploy with auto-generated timestamp
npm run deploy
```

### **Option 2: Quick Deployment (For small changes)**
```powershell
# Quick deploy without full CDN optimization
npm run deploy:quick "Fixed typo in header"
```

### **Option 3: Manual Step-by-Step**
```powershell
# 1. Build the site
npm run build

# 2. Optimize CDN assets
npm run cdn:optimize

# 3. Commit and push
git add .
git commit -m "Your update message"
git push origin master

# 4. Deploy to IIS
robocopy dist C:\inetpub\wwwroot\sezarr.com /E /PURGE
```

---

## 📋 **Complete Deployment Workflow**

### **What Happens When You Deploy:**

#### **1. Build Process** 📦
- Compiles Astro files to static HTML/CSS/JS
- Optimizes images and assets
- Generates sitemap and RSS feed
- Minifies code for production

#### **2. CDN Asset Preparation** 🌐
- Copies optimized assets to `cdn-assets/` folder
- Prepares files for jsDelivr distribution
- Updates asset references for CDN delivery

#### **3. Git Operations** 📝
- Stages all changes (`git add .`)
- Commits with your message
- Pushes to GitHub repository

#### **4. CDN Update Process** ⏱️
- jsDelivr monitors your GitHub repo
- **5-10 minutes**: New assets available globally
- **1-2 hours**: Full global propagation
- Service worker caches new resources automatically

#### **5. IIS Deployment** 🖥️
- Copies built files to web server
- Updates live website immediately
- Preserves server configuration

---

## 🔄 **CDN Update Timeline**

### **Immediate (0-1 minute):**
- ✅ Local website updated (IIS)
- ✅ Code pushed to GitHub
- ✅ Build artifacts ready

### **Fast (5-10 minutes):**
- ✅ jsDelivr picks up new files
- ✅ CDN starts serving updated assets
- ✅ Primary CDN nodes updated

### **Complete (1-2 hours):**
- ✅ Global CDN propagation complete
- ✅ All edge servers worldwide updated
- ✅ Maximum performance achieved

---

## 🛠️ **Different Types of Updates**

### **Content Updates** (Articles, pages, text)
```powershell
npm run deploy:quick "Updated insurance rates article"
```
- **Time to live:** Immediate on main site
- **CDN impact:** Minimal (mostly HTML changes)

### **Style/Design Changes** (CSS, images, layout)
```powershell
npm run deploy "Redesigned calculator interface"
```
- **Time to live:** 5-10 minutes (CDN assets)
- **CDN impact:** High (new CSS/JS files)

### **Major Features** (New pages, functionality)
```powershell
npm run deploy "Added new business insurance section"
```
- **Time to live:** 5-10 minutes full deployment
- **CDN impact:** High (new assets and routes)

---

## 🚨 **Troubleshooting**

### **If Deployment Fails:**

#### **Build Errors:**
```powershell
# Check what's wrong
npm run build

# Fix errors and try again
npm run deploy
```

#### **Git Issues:**
```powershell
# Check git status
git status

# If conflicts exist
git pull origin master
# Fix conflicts, then
npm run deploy
```

#### **CDN Not Updating:**
```powershell
# Test CDN availability
npm run test:cdn

# Check GitHub repo has latest files
# Wait 10-15 minutes for jsDelivr propagation
```

---

## 📊 **Monitoring Your Deployments**

### **Check Deployment Success:**
1. **Website Live:** Visit https://sezarr.com
2. **CDN Status:** Run `npm run test:cdn`
3. **GitHub Updated:** Check your repository
4. **Performance:** Test with GTmetrix after CDN updates

### **Service Worker Cache:**
- Automatically updates when new assets are deployed
- Users get fresh content on next visit
- Background updates for returning visitors

---

## 🎯 **Best Practices**

### **For Regular Updates:**
1. **Use descriptive commit messages**
2. **Test locally first:** `npm run build && npm run preview`
3. **Use quick deploy for content-only changes**
4. **Use full deploy for design/functionality changes**

### **For Emergency Fixes:**
```powershell
# Fastest possible deployment
npm run build
robocopy dist C:\inetpub\wwwroot\sezarr.com /E /PURGE

# Then commit when you have time
git add .
git commit -m "Emergency fix: [description]"
git push origin master
```

### **For Major Updates:**
1. **Create a backup:** Copy current `dist` folder
2. **Test thoroughly:** Use preview mode
3. **Deploy during low traffic:** Early morning preferred
4. **Monitor:** Watch for 10-15 minutes after deployment

---

## 🌟 **Summary**

**Your deployment is now FULLY AUTOMATED:**

- **One command** handles everything: `npm run deploy`
- **CDN automatically updates** from GitHub
- **No manual CDN management** required
- **Global performance** maintained automatically

**The workflow is:**
1. Make your changes
2. Run `npm run deploy "Your message"`
3. Wait 5-10 minutes for CDN propagation
4. Your site is updated globally! 🚀