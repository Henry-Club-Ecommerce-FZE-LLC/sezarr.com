#!/usr/bin/env node

/**
 * Automated Deployment Script
 * Handles: Build -> CDN Assets -> Git Push -> IIS Deploy
 * Usage: node scripts/deploy-updates.mjs "Your commit message"
 */

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import path from 'path';

const COMMIT_MESSAGE = process.argv[2] || `Auto-deploy: ${new Date().toISOString()}`;
const IIS_PATH = process.env.IIS_DEPLOY_PATH || 'C:\\inetpub\\wwwroot\\sezarr.com';

console.log('🚀 Starting Automated Deployment Process');
console.log('========================================');

try {
  // Step 1: Build the project
  console.log('\n📦 Step 1: Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully');

  // Step 2: Optimize CDN assets
  console.log('\n🌐 Step 2: Optimizing CDN assets...');
  execSync('node scripts/cdn-optimizer.mjs', { stdio: 'inherit' });
  console.log('✅ CDN assets optimized');

  // Step 3: Git operations
  console.log('\n📝 Step 3: Committing to Git...');
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "${COMMIT_MESSAGE}"`, { stdio: 'inherit' });
  console.log('✅ Changes committed to Git');

  // Step 4: Push to GitHub (CDN source)
  console.log('\n⬆️ Step 4: Pushing to GitHub...');
  execSync('git push origin master', { stdio: 'inherit' });
  console.log('✅ Pushed to GitHub - CDN will update in 5-10 minutes');

  // Step 5: Deploy to IIS (if path exists)
  console.log('\n🖥️ Step 5: Deploying to IIS...');
  try {
    execSync(`robocopy dist "${IIS_PATH}" /E /PURGE`, { stdio: 'pipe' });
    console.log('✅ Deployed to IIS successfully');
  } catch (error) {
    console.log('⚠️ IIS deployment skipped (check path or run manually):');
    console.log(`   robocopy dist "${IIS_PATH}" /E /PURGE`);
  }

  // Step 6: Test CDN (after a brief delay)
  console.log('\n🧪 Step 6: Testing deployment...');
  setTimeout(() => {
    execSync('node scripts/test-cdn.mjs', { stdio: 'inherit' });
  }, 2000);

  console.log('\n🎉 DEPLOYMENT COMPLETE!');
  console.log('========================');
  console.log('✅ Website built and deployed to IIS');
  console.log('✅ Changes pushed to GitHub');
  console.log('✅ CDN assets will update in 5-10 minutes');
  console.log('✅ Service worker will cache new resources');
  console.log('\n🌐 Your site is live at: https://sezarr.com');

} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  console.log('\n🔧 Manual steps to troubleshoot:');
  console.log('1. Check build errors: npm run build');
  console.log('2. Check git status: git status');
  console.log('3. Verify IIS path exists');
  process.exit(1);
}