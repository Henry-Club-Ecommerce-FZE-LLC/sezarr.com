// CSS Purge Configuration for Maximum Performance
import fs from 'fs';
import path from 'path';

// Extract all CSS classes used in the project
const extractUsedClasses = () => {
  const sourceFiles = [
    'src/**/*.astro',
    'src/**/*.jsx',
    'src/**/*.tsx',
    'src/**/*.js',
    'src/**/*.ts',
    'public/**/*.html'
  ];
  
  const usedClasses = new Set();
  
  // Read all source files and extract class names
  const glob = import('glob');
  
  sourceFiles.forEach(pattern => {
    const files = glob.sync(pattern);
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        
        // Extract class attributes
        const classMatches = content.match(/class[^=]*=['"]\s*([^'"]*)\s*['"]/g);
        if (classMatches) {
          classMatches.forEach(match => {
            const classes = match.replace(/class[^=]*=['"]\s*/, '').replace(/\s*['"].*$/, '');
            classes.split(/\s+/).forEach(cls => {
              if (cls && cls !== '') {
                usedClasses.add(cls);
              }
            });
          });
        }
        
        // Extract className attributes (JSX)
        const classNameMatches = content.match(/className[^=]*=['"]\s*([^'"]*)\s*['"]/g);
        if (classNameMatches) {
          classNameMatches.forEach(match => {
            const classes = match.replace(/className[^=]*=['"]\s*/, '').replace(/\s*['"].*$/, '');
            classes.split(/\s+/).forEach(cls => {
              if (cls && cls !== '') {
                usedClasses.add(cls);
              }
            });
          });
        }
        
        // Extract template literal classes
        const templateMatches = content.match(/`[^`]*\$\{[^}]*\}[^`]*`/g);
        if (templateMatches) {
          templateMatches.forEach(match => {
            // Simple extraction of likely class names
            const possibleClasses = match.match(/\b[a-z-]+:[a-z0-9-]+|\b[a-z-]+\[\[[^\]]+\]\]|\b[a-z]+(-[a-z0-9]+)*\b/g);
            if (possibleClasses) {
              possibleClasses.forEach(cls => {
                if (cls.match(/^[a-z]/)) {
                  usedClasses.add(cls);
                }
              });
            }
          });
        }
      } catch (error) {
        console.warn(`Could not read file ${file}:`, error.message);
      }
    });
  });
  
  return Array.from(usedClasses);
};

// Critical classes that should always be included
const criticalClasses = [
  // Layout
  'container', 'mx-auto', 'flex', 'flex-col', 'flex-row', 'grid',
  'block', 'inline', 'inline-block', 'hidden', 'sticky', 'relative', 'absolute',
  
  // Sizing
  'w-full', 'w-auto', 'h-full', 'h-auto', 'min-h-full', 'min-h-screen',
  'max-w-none', 'max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl',
  'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'max-w-7xl',
  
  // Spacing
  'p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-6', 'p-8',
  'px-4', 'px-6', 'py-2', 'py-3', 'py-4', 'py-6', 'py-8', 'py-12',
  'm-0', 'mx-auto', 'my-4', 'mb-4', 'mb-6', 'mt-2', 'mt-4',
  
  // Typography
  'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl',
  'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold',
  'text-center', 'text-left', 'text-right',
  'leading-tight', 'leading-normal', 'leading-relaxed',
  
  // Colors (most used)
  'text-white', 'text-black', 'text-gray-100', 'text-gray-200', 'text-gray-300',
  'text-gray-700', 'text-gray-800', 'text-gray-900',
  'text-blue-600', 'text-blue-400', 'text-purple-600',
  'bg-white', 'bg-gray-50', 'bg-gray-100', 'bg-gray-900',
  'bg-blue-600', 'bg-purple-600',
  
  // Interactive states
  'hover:text-blue-600', 'hover:bg-blue-50', 'focus:outline-none',
  'focus:ring-2', 'focus:ring-blue-500',
  'transition-colors', 'transition-all',
  
  // Dark mode
  'dark:bg-gray-900', 'dark:text-gray-100', 'dark:text-gray-300',
  'dark:border-gray-700', 'dark:hover:text-blue-400',
  
  // Responsive
  'md:flex', 'md:hidden', 'md:block', 'md:text-6xl', 'md:py-3',
  'lg:text-7xl', 'sm:text-xl'
];

// Generate the safelist
const generateSafelist = () => {
  const usedClasses = extractUsedClasses();
  const allClasses = [...new Set([...criticalClasses, ...usedClasses])];
  
  console.log(`Found ${usedClasses.length} used classes, ${criticalClasses.length} critical classes`);
  console.log(`Total safelist: ${allClasses.length} classes`);
  
  return allClasses;
};

export { generateSafelist };