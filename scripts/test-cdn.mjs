#!/usr/bin/env node
/**
 * CDN Testing Script - Automated verification of CDN optimizations
 */

import { createHash } from 'crypto';
import https from 'https';
import { performance } from 'perf_hooks';

const SITE_URL = 'https://sezarr.com';
const CDN_DOMAINS = [
  'cdn.jsdelivr.net',
  'fonts.googleapis.com', 
  'fonts.gstatic.com',
  'unpkg.com'
];

console.log('🧪 CDN Optimization Testing');
console.log('==========================');

/**
 * Test DNS resolution time
 */
async function testDNS(domain) {
  const start = performance.now();
  
  return new Promise((resolve) => {
    const dns = require('dns');
    dns.lookup(domain, (err, address) => {
      const time = performance.now() - start;
      resolve({
        domain,
        time: Math.round(time * 100) / 100,
        success: !err,
        address: address || 'Failed'
      });
    });
  });
}

/**
 * Test HTTP response time
 */
async function testResponse(url) {
  const start = performance.now();
  
  return new Promise((resolve) => {
    https.get(url, (res) => {
      const time = performance.now() - start;
      resolve({
        url,
        time: Math.round(time * 100) / 100,
        status: res.statusCode,
        headers: {
          'cache-control': res.headers['cache-control'],
          'server': res.headers['server'],
          'content-encoding': res.headers['content-encoding']
        }
      });
    }).on('error', (err) => {
      resolve({
        url,
        time: -1,
        status: 'ERROR',
        error: err.message
      });
    });
  });
}

/**
 * Check HTML for CDN optimizations
 */
async function checkHTMLOptimizations(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      let html = '';
      res.on('data', chunk => html += chunk);
      res.on('end', () => {
        const checks = {
          dnsPrefetch: (html.match(/dns-prefetch/g) || []).length,
          preconnect: (html.match(/preconnect/g) || []).length,  
          preload: (html.match(/preload/g) || []).length,
          serviceWorker: html.includes('sw.js'),
          themeScript: html.includes('enhancedThemeScript')
        };
        resolve(checks);
      });
    });
  });
}

/**
 * Run all tests
 */
async function runTests() {
  console.log('\n1️⃣ Testing DNS Resolution Times...');
  console.log('------------------------------------');
  
  const dnsResults = await Promise.all(
    CDN_DOMAINS.map(domain => testDNS(domain))
  );
  
  dnsResults.forEach(result => {
    const status = result.success ? '✅' : '❌';
    console.log(`${status} ${result.domain}: ${result.time}ms`);
  });

  console.log('\n2️⃣ Testing Site Response Time...');
  console.log('---------------------------------');
  
  const siteResponse = await testResponse(SITE_URL);
  const status = siteResponse.status === 200 ? '✅' : '❌';
  console.log(`${status} ${SITE_URL}: ${siteResponse.time}ms (${siteResponse.status})`);
  
  if (siteResponse.headers['cache-control']) {
    console.log(`   Cache-Control: ${siteResponse.headers['cache-control']}`);
  }

  console.log('\n3️⃣ Testing HTML CDN Optimizations...');
  console.log('------------------------------------');
  
  const htmlChecks = await checkHTMLOptimizations(SITE_URL);
  
  console.log(`✅ DNS Prefetch links: ${htmlChecks.dnsPrefetch} found`);
  console.log(`✅ Preconnect links: ${htmlChecks.preconnect} found`);
  console.log(`✅ Preload links: ${htmlChecks.preload} found`);
  console.log(`${htmlChecks.serviceWorker ? '✅' : '❌'} Service Worker: ${htmlChecks.serviceWorker ? 'Present' : 'Missing'}`);
  console.log(`${htmlChecks.themeScript ? '✅' : '❌'} Theme Script: ${htmlChecks.themeScript ? 'Present' : 'Missing'}`);

  console.log('\n4️⃣ CDN Resource Tests...');
  console.log('-------------------------');
  
  // Test service worker
  const swUrl = `${SITE_URL}/sw.js`;
  const swResponse = await testResponse(swUrl);
  const swStatus = swResponse.status === 200 ? '✅' : '❌';
  console.log(`${swStatus} Service Worker: ${swResponse.time}ms (${swResponse.status})`);
  
  // Test theme script
  const themeUrl = `${SITE_URL}/scripts/enhancedThemeScript.js`;
  const themeResponse = await testResponse(themeUrl);
  const themeStatus = themeResponse.status === 200 ? '✅' : '❌';
  console.log(`${themeStatus} Theme Script: ${themeResponse.time}ms (${themeResponse.status})`);

  console.log('\n📊 Summary & Recommendations');
  console.log('============================');
  
  const avgDNS = dnsResults.reduce((sum, r) => sum + (r.success ? r.time : 0), 0) / dnsResults.filter(r => r.success).length;
  console.log(`• Average DNS lookup: ${Math.round(avgDNS * 100) / 100}ms`);
  console.log(`• Site response time: ${siteResponse.time}ms`);
  console.log(`• CDN optimizations: ${htmlChecks.dnsPrefetch + htmlChecks.preconnect + htmlChecks.preload} implemented`);
  
  if (avgDNS < 50) {
    console.log('🚀 Excellent: DNS lookups are fast (< 50ms)');
  } else if (avgDNS < 100) {
    console.log('⚡ Good: DNS lookups are reasonable (50-100ms)'); 
  } else {
    console.log('⚠️  Consider: DNS lookups could be faster (> 100ms)');
  }
  
  if (siteResponse.time < 500) {
    console.log('🚀 Excellent: Site loads quickly (< 500ms)');
  } else if (siteResponse.time < 1000) {
    console.log('⚡ Good: Site loads reasonably (500ms-1s)');
  } else {
    console.log('⚠️  Consider: Site could load faster (> 1s)');
  }

  console.log('\n✨ CDN Testing Complete!');
}

// Run tests if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runTests().catch(console.error);
}

export { runTests, testDNS, testResponse, checkHTMLOptimizations };