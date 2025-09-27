import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Pre-compress files for better performance
const compressFile = (filePath) => {
  const content = fs.readFileSync(filePath);
  
  // Create gzip version
  const gzipped = zlib.gzipSync(content);
  fs.writeFileSync(filePath + '.gz', gzipped);
  
  console.log(`Compressed: ${path.basename(filePath)}`);
};

// Find and compress CSS and JS files
const findAndCompress = (dir) => {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      findAndCompress(fullPath);
    } else if (file.name.endsWith('.css') || file.name.endsWith('.js')) {
      compressFile(fullPath);
    }
  }
};

// Start compression
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  console.log('Pre-compressing files...');
  findAndCompress(distPath);
  console.log('Pre-compression complete!');
} else {
  console.log('Dist directory not found, skipping pre-compression');
}