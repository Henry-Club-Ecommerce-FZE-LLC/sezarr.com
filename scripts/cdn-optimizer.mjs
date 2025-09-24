#!/usr/bin/env node
/**
 * CDN Asset Optimization Script for jsDelivr
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const CDN_DIR = path.join(__dirname, '..', 'cdn-assets');

console.log('🚀 Creating CDN-optimized assets...');

// Ensure CDN directory exists
try {
  await fs.mkdir(CDN_DIR, { recursive: true });
  await fs.mkdir(path.join(CDN_DIR, 'scripts'), { recursive: true });
  
  // Copy critical assets
  const criticalAssets = [
    'scripts/enhancedThemeScript.js',
    'sw.js',
    'favicon.ico',
    'favicon.svg'
  ];
  
  for (const asset of criticalAssets) {
    try {
      const content = await fs.readFile(path.join(PUBLIC_DIR, asset));
      await fs.writeFile(path.join(CDN_DIR, asset), content);
      console.log(`✅ Copied: ${asset}`);
    } catch (error) {
      console.log(`⚠️  Skipped: ${asset} (${error.message})`);
    }
  }
  
  // Create manifest
  const manifest = {
    version: new Date().toISOString(),
    baseUrl: 'https://cdn.jsdelivr.net/gh/mirzadev/insurance-site@main/public',
    assets: criticalAssets
  };
  
  await fs.writeFile(path.join(CDN_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2));
  
  console.log('✨ CDN assets created successfully!');
  console.log(`📦 Ready for deployment to jsDelivr`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
}