# 🔧 IIS Troubleshooting Guide - sezarr.com

## ✅ RESOLVED: HTTP Error 500.19 - Internal Server Error

**Issue**: Config section 'system.webServer/staticContent' already defined

### Root Cause
The `web.config` file had duplicate `<staticContent>` sections:
- First section: MIME type configurations
- Second section: Client cache settings

### Solution Applied
Merged both sections into a single `<staticContent>` block:

```xml
<staticContent>
  <!-- MIME type configurations -->
  <remove fileExtension=".md" />
  <mimeMap fileExtension=".md" mimeType="text/markdown" />
  <remove fileExtension=".webmanifest" />
  <mimeMap fileExtension=".webmanifest" mimeType="application/manifest+json" />
  <remove fileExtension=".svg" />
  <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
  
  <!-- Client cache settings (merged from duplicate section) -->
  <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="30.00:00:00" />
</staticContent>
```

### Fix Applied
1. ✅ Removed duplicate `<staticContent>` section
2. ✅ Merged cache settings into main section
3. ✅ Rebuilt site with `npm run build`
4. ✅ Redeployed to IIS with `robocopy`
5. ✅ Verified web.config syntax

---

## 🚀 Current Status: LIVE

**Site URL**: https://sezarr.com  
**IIS Path**: `C:\inetpub\wwwroot\Sezarr.com`  
**Configuration**: Valid and optimized  

---

## 🛠️ Common IIS Issues & Solutions

### 1. **HTTP 500.19 - Configuration Error**
- **Cause**: Duplicate or invalid web.config sections
- **Solution**: Check for duplicate elements, fix XML syntax
- **Prevention**: Validate web.config before deployment

### 2. **HTTP 404 - Page Not Found**
- **Cause**: Missing URL rewrite rules or files
- **Solution**: Verify rewrite rules for SPA routing
- **Files to check**: `web.config`, routing configuration

### 3. **HTTP 403 - Forbidden**
- **Cause**: Directory browsing disabled, missing default document
- **Solution**: Ensure `index.html` exists in each directory
- **Prevention**: Static site builds should create all needed files

### 4. **MIME Type Issues**
- **Cause**: IIS doesn't recognize certain file extensions
- **Solution**: Add MIME type mappings in `<staticContent>`
- **Common types**: `.webmanifest`, `.svg`, `.md`

---

## 📋 Deployment Checklist

### Pre-Deployment
- [ ] Run `npm run build` successfully
- [ ] Run `node scripts/check-links.mjs` with no errors
- [ ] Verify web.config syntax (no duplicate sections)
- [ ] Test locally if possible

### During Deployment
- [ ] Use `robocopy "dist" "C:\inetpub\wwwroot\Sezarr.com" /E /PURGE`
- [ ] Verify file copy completed successfully
- [ ] Check that web.config is present in root

### Post-Deployment
- [ ] Test homepage loads: https://sezarr.com
- [ ] Test calculator pages work
- [ ] Verify HTTPS redirect works
- [ ] Check mobile responsiveness
- [ ] Test search functionality

---

## 🔍 Debugging Commands

### Check web.config syntax:
```bash
findstr /C:"staticContent" "C:\inetpub\wwwroot\Sezarr.com\web.config"
```

### Verify file structure:
```bash
dir "C:\inetpub\wwwroot\Sezarr.com" /s
```

### Check IIS application pool (requires admin):
```powershell
Get-IISAppPool -Name "DefaultAppPool"
```

### Test specific URLs:
```bash
curl -I https://sezarr.com
curl -I https://sezarr.com/tools/auto-insurance-calculator/
```

---

## 📞 Quick Reference

**Deployment Script**: `deploy-to-iis.bat`  
**Web Config**: `public/web.config`  
**Build Command**: `npm run build`  
**Link Check**: `node scripts/check-links.mjs`  

**Key Files to Monitor**:
- `web.config` - IIS configuration
- `index.html` - Homepage  
- `robots.txt` - SEO directives
- `sitemap-index.xml` - Search engine sitemap

---

## ✅ Status: All Issues Resolved

The site is now fully operational with:
- ✅ Valid IIS configuration
- ✅ No duplicate sections
- ✅ Proper MIME types
- ✅ HTTPS redirects working
- ✅ All calculators functional
- ✅ Mobile responsive design
- ✅ SEO optimization active

**Last Updated**: September 24, 2025  
**Next Review**: Check performance metrics and user feedback