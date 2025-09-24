import { readdirSync, mkdirSync, existsSync, copyFileSync } from 'fs';
import { join, extname, basename } from 'path';
import sharp from 'sharp';

const SRC_DIR = join(process.cwd(), 'public', 'images', 'src');
const OUT_DIR = join(process.cwd(), 'public', 'images');

// Ensure directories exist
mkdirSync(SRC_DIR, { recursive: true });
mkdirSync(OUT_DIR, { recursive: true });

// Copy existing favicon and logo files to src if they don't exist there
const existingImages = [
  { src: 'public/favicon.svg', dest: 'public/images/src/favicon.svg' },
  { src: 'public/logo-192.png', dest: 'public/images/src/logo-192.png' },
  { src: 'public/logo-512.png', dest: 'public/images/src/logo-512.png' }
];

for (const { src, dest } of existingImages) {
  const srcPath = join(process.cwd(), src);
  const destPath = join(process.cwd(), dest);
  if (existsSync(srcPath) && !existsSync(destPath)) {
    copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} to ${dest}`);
  }
}

// Image generation for common website needs
const generatedImages = [
  {
    name: 'hero-insurance',
    width: 1920,
    height: 1080,
    background: { r: 59, g: 130, b: 246 }, // Blue gradient
    overlay: 'Insurance Protection & Peace of Mind'
  },
  {
    name: 'auto-insurance-hero',
    width: 1200,
    height: 600,
    background: { r: 16, g: 185, b: 129 }, // Emerald
    overlay: 'Auto Insurance Coverage'
  },
  {
    name: 'health-insurance-hero',
    width: 1200,
    height: 600,
    background: { r: 239, g: 68, b: 68 }, // Red
    overlay: 'Health Insurance Plans'
  },
  {
    name: 'home-insurance-hero',
    width: 1200,
    height: 600,
    background: { r: 168, g: 85, b: 247 }, // Purple
    overlay: 'Home Protection Insurance'
  },
  {
    name: 'life-insurance-hero',
    width: 1200,
    height: 600, 
    background: { r: 34, g: 197, b: 94 }, // Green
    overlay: 'Life Insurance Security'
  },
  {
    name: 'disability-insurance-hero',
    width: 1200,
    height: 600,
    background: { r: 16, g: 185, b: 129 }, // Emerald
    overlay: 'Disability Income Protection'
  },
  {
    name: 'business-insurance-hero',
    width: 1200,
    height: 600,
    background: { r: 99, g: 102, b: 241 }, // Indigo
    overlay: 'Business Insurance Protection'
  },
  {
    name: 'business-insurance-calculator',
    width: 1200,
    height: 600,
    background: { r: 59, g: 130, b: 246 }, // Blue
    overlay: 'Business Insurance Calculator'
  },
  {
    name: 'travel-insurance-hero',
    width: 1200,
    height: 600,
    background: { r: 147, g: 51, b: 234 }, // Purple
    overlay: 'Travel Insurance Protection'
  },
  {
    name: 'travel-insurance-calculator',
    width: 1200,
    height: 600,
    background: { r: 99, g: 102, b: 241 }, // Indigo
    overlay: 'Travel Insurance Calculator'
  },
  {
    name: 'pet-insurance-hero',
    width: 1200,
    height: 600,
    background: { r: 168, g: 85, b: 247 }, // Purple
    overlay: 'Pet Insurance Protection'
  },
  {
    name: 'pet-insurance-calculator',
    width: 1200,
    height: 600,
    background: { r: 236, g: 72, b: 153 }, // Pink
    overlay: 'Pet Insurance Calculator'
  }
];

// Generate placeholder images if they don't exist
for (const img of generatedImages) {
  const outputPath = join(SRC_DIR, `${img.name}.png`);
  if (!existsSync(outputPath)) {
    await sharp({
      create: {
        width: img.width,
        height: img.height,
        channels: 4,
        background: img.background
      }
    })
    .png({ quality: 90 })
    .toFile(outputPath);
    console.log(`Generated placeholder: ${img.name}.png`);
  }
}

const files = readdirSync(SRC_DIR).filter(f => ['.jpg','.jpeg','.png'].includes(extname(f).toLowerCase()));

if(files.length === 0){
  console.log('No source images found in public/images/src');
  process.exit(0);
}

// Advanced image processing with responsive sizes
async function processOne(file){
  const input = join(SRC_DIR, file);
  const name = basename(file, extname(file));
  const base = join(OUT_DIR, name);
  
  try {
    const metadata = await sharp(input).metadata();
    const originalWidth = metadata.width;
    
    // Generate multiple responsive sizes
    const sizes = [
      { suffix: '', width: Math.min(1920, originalWidth) },
      { suffix: '-lg', width: Math.min(1200, originalWidth) },
      { suffix: '-md', width: Math.min(768, originalWidth) },
      { suffix: '-sm', width: Math.min(480, originalWidth) }
    ];
    
    for (const size of sizes) {
      if (size.width <= 0) continue;
      
      const image = sharp(input).resize({ 
        width: size.width, 
        withoutEnlargement: true,
        fastShrinkOnLoad: false 
      });
      
      // Generate optimized formats
      await Promise.all([
        // AVIF (best compression, modern browsers)
        image.clone().avif({ 
          quality: 60,
          effort: 6
        }).toFile(`${base}${size.suffix}.avif`),
        
        // WebP (excellent compression, wide support)
        image.clone().webp({ 
          quality: 80,
          effort: 6,
          nearLossless: false
        }).toFile(`${base}${size.suffix}.webp`),
        
        // JPEG fallback (universal support)
        image.clone().jpeg({ 
          quality: 85, 
          progressive: true,
          mozjpeg: true
        }).toFile(`${base}${size.suffix}.jpg`)
      ]);
    }
    
    console.log(`✅ Optimized ${file} (${originalWidth}px → responsive sizes)`);
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
}

await Promise.all(files.map(processOne));

console.log('\n🎉 Image optimization complete!');
console.log('Generated formats: AVIF, WebP, JPEG');
console.log('Responsive sizes: Original, Large (1200px), Medium (768px), Small (480px)');
console.log('Use the ResponsiveImage component with these optimized images.');
