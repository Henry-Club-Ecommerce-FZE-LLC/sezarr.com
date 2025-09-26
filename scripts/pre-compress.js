import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

// Get directory paths for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pre-compress files for better server response time
const DIST_DIR = path.join(__dirname, '../dist');
const COMPRESS_EXTENSIONS = ['.html', '.css', '.js', '.json', '.svg', '.xml'];

async function preCompressAssets() {
  console.log('🗜️  Pre-compressing assets for faster server response...');
  
  const walkDir = (dir) => {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else {
        const ext = path.extname(file);
        if (COMPRESS_EXTENSIONS.includes(ext)) {
          compressFile(filePath);
        }
      }
    }
  };
  
  const compressFile = (filePath) => {
    const content = fs.readFileSync(filePath);
    
    // Generate Brotli compression
    const brotliCompressed = zlib.brotliCompressSync(content, {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11, // Maximum compression
        [zlib.constants.BROTLI_PARAM_SIZE_HINT]: content.length,
      }
    });
    
    // Generate Gzip compression
    const gzipCompressed = zlib.gzipSync(content, { level: 9 });
    
    // Save compressed versions
    fs.writeFileSync(filePath + '.br', brotliCompressed);
    fs.writeFileSync(filePath + '.gz', gzipCompressed);
    
    console.log(`✅ Compressed: ${path.relative(DIST_DIR, filePath)}`);
    console.log(`   Original: ${content.length} bytes`);
    console.log(`   Brotli: ${brotliCompressed.length} bytes (${Math.round((1 - brotliCompressed.length/content.length) * 100)}% smaller)`);
    console.log(`   Gzip: ${gzipCompressed.length} bytes (${Math.round((1 - gzipCompressed.length/content.length) * 100)}% smaller)`);
  };
  
  walkDir(DIST_DIR);
  console.log('🎉 Pre-compression complete!');
}

// Run if called directly
console.log('Starting pre-compression script...');
console.log('Script path:', import.meta.url);
console.log('Process argv[1]:', process.argv[1]);

preCompressAssets().catch(console.error);

export { preCompressAssets };