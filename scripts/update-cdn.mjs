// scripts/update-cdn.mjs - Automated CDN asset preparation and deployment
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const colors = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function execCommand(command, description) {
  log(`🔧 ${description}...`, 'blue');
  try {
    execSync(command, { stdio: 'inherit' });
    log(`✅ ${description} completed`, 'green');
  } catch (error) {
    log(`❌ Failed: ${description}`, 'red');
    throw error;
  }
}

try {
  log('🚀 Starting CDN Asset Update Process', 'green');
  
  // 1. Build the site
  execCommand('npm run build', 'Building site');
  
  // 2. Run CDN optimization
  if (existsSync('scripts/cdn-optimizer.mjs')) {
    execCommand('node scripts/cdn-optimizer.mjs', 'Optimizing assets for CDN');
  }
  
  // 3. Copy optimized assets to CDN repo
  log('📦 Copying assets to CDN repository...', 'blue');
  execCommand('robocopy cdn-assets cdn-repo\\assets /E /PURGE /NFL /NDL /NJH /NJS', 'Copying CDN assets');
  execCommand('robocopy dist\\assets\\js cdn-repo\\assets\\js /E /NFL /NDL /NJH /NJS', 'Copying JavaScript assets');
  
  // 4. Update version in CDN package.json
  const cdnPkgPath = 'cdn-repo/package.json';
  if (existsSync(cdnPkgPath)) {
    log('📝 Updating CDN package version...', 'blue');
    const pkg = JSON.parse(readFileSync(cdnPkgPath, 'utf8'));
    const [major, minor, patch] = pkg.version.split('.').map(Number);
    const newVersion = `${major}.${minor}.${patch + 1}`;
    pkg.version = newVersion;
    writeFileSync(cdnPkgPath, JSON.stringify(pkg, null, 2));
    log(`✅ Version updated to v${newVersion}`, 'green');
    
    // 5. Provide deployment instructions
    log('\n🎯 CDN Assets Ready for Deployment!', 'green');
    log('━'.repeat(50), 'blue');
    log(`📦 Version: v${newVersion}`, 'yellow');
    log(`📁 Assets ready in: cdn-repo/assets/`, 'yellow');
    log('', 'reset');
    log('📋 Next Steps:', 'blue');
    log('1. cd cdn-repo', 'yellow');
    log('2. git add .', 'yellow');
    log(`3. git commit -m "Release v${newVersion} - Updated CDN assets"`, 'yellow');
    log(`4. git tag v${newVersion}`, 'yellow');
    log('5. git push origin main --tags', 'yellow');
    log('', 'reset');
    log('⏰ jsDelivr will update within 12 hours of push', 'blue');
    log(`🔗 CDN URL: https://cdn.jsdelivr.net/gh/yourusername/sezarr-insurance-cdn@${newVersion}/assets/`, 'blue');
  }
  
  log('\n🎉 CDN update process completed successfully!', 'green');
  
} catch (error) {
  log('\n❌ CDN update process failed:', 'red');
  console.error(error.message);
  process.exit(1);
}