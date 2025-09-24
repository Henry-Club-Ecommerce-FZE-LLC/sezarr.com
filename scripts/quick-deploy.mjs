#!/usr/bin/env node

/**
 * Quick Update Script - For Small Changes
 * Skips full CDN optimization for faster deployments
 * Usage: node scripts/quick-deploy.mjs "Your commit message"
 */

import { execSync } from 'child_process';

const COMMIT_MESSAGE = process.argv[2] || `Quick update: ${new Date().toISOString()}`;
const IIS_PATH = 'C:\\inetpub\\wwwroot\\sezarr.com';

console.log('⚡ Quick Deployment Process');
console.log('==========================');

try {
  // Step 1: Build only
  console.log('\n📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Step 2: Git operations
  console.log('\n📝 Committing changes...');
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "${COMMIT_MESSAGE}"`, { stdio: 'inherit' });
  execSync('git push origin master', { stdio: 'inherit' });

  // Step 3: Deploy to IIS
  console.log('\n🖥️ Deploying to IIS...');
  execSync(`robocopy dist "${IIS_PATH}" /E /PURGE`, { stdio: 'pipe' });

  console.log('\n⚡ QUICK DEPLOYMENT COMPLETE!');
  console.log('✅ Changes live on website');
  console.log('✅ Code pushed to GitHub');
  console.log('🌐 CDN will auto-update from GitHub in 5-10 minutes');

} catch (error) {
  console.error('\n❌ Quick deployment failed:', error.message);
  process.exit(1);
}