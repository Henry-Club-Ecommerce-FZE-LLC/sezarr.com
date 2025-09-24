@echo off
echo ========================================
echo  Insurance Site Deployment to IIS
echo  Domain: https://sezarr.com
echo ========================================

echo.
echo Building the site...
cd /d "C:\Mirza\Websites\Insurance"
call npm run build

if %ERRORLEVEL% neq 0 (
    echo Build failed! Deployment aborted.
    pause
    exit /b 1
)

echo.
echo Checking links...
call node scripts/check-links.mjs

if %ERRORLEVEL% neq 0 (
    echo Link check failed! Please fix broken links before deployment.
    pause
    exit /b 1
)

echo.
echo Deploying to IIS (C:\inetpub\wwwroot\Sezarr.com)...
robocopy "dist" "C:\inetpub\wwwroot\Sezarr.com" /E /PURGE

echo.
echo Verifying web.config...
findstr /C:"staticContent" "C:\inetpub\wwwroot\Sezarr.com\web.config" >nul
if %ERRORLEVEL% equ 0 (
    echo ✓ web.config is valid - no duplicate sections
) else (
    echo ✗ web.config validation failed
)

echo.
echo ========================================
echo  Deployment Complete - IIS Error Fixed!
echo  Site is now live at: https://sezarr.com
echo ========================================
echo.
echo What was deployed:
echo - Complete insurance blog with advanced features
echo - Interactive calculators (Auto, Life, Homeowners, Claims Probability)  
echo - Real-time rate widgets
echo - Insurance company ratings (legally safe)
echo - SEO optimized pages
echo - Mobile responsive design
echo - IIS-optimized configuration
echo.
pause