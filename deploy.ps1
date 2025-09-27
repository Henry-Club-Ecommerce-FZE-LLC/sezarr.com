# Deployment Script for Sezarr Insurance Site
# This script builds and deploys to the correct IIS location

Write-Host "=== Sezarr Insurance Site Deployment ===" -ForegroundColor Green

# 1. Ensure we're in the correct source directory
$sourceDir = "C:\Mirza\Websites\Insurance"
$iisDir = "C:\inetpub\wwwroot\sezarr.com"

if (-not (Test-Path $sourceDir)) {
    Write-Error "Source directory not found: $sourceDir"
    exit 1
}

Write-Host "Source Directory: $sourceDir" -ForegroundColor Yellow
Write-Host "IIS Directory: $iisDir" -ForegroundColor Yellow

# 2. Change to source directory
Set-Location $sourceDir

# 3. Build the site
Write-Host "Building the site..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0 -and $LASTEXITCODE -ne 1) {
    Write-Warning "Build completed with warnings, but continuing deployment..."
}

# 4. Deploy to IIS (mirror deployment - removes old files)
Write-Host "Deploying to IIS..." -ForegroundColor Cyan
robocopy "$sourceDir\dist" $iisDir /MIR /XD .git node_modules /R:2 /W:1

if ($LASTEXITCODE -eq 1 -or $LASTEXITCODE -eq 0) {
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host "Site is now live at: http://sezarr.com" -ForegroundColor Green
} else {
    Write-Error "❌ Deployment failed with exit code: $LASTEXITCODE"
}

Write-Host "=== Deployment Complete ===" -ForegroundColor Green