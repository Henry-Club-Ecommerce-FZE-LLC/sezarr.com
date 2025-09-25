/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./pages/**/*.{astro,html,md,mdx}"
  ],
  
  // Aggressive purging for Speed Index optimization - only essential classes
  safelist: [
    // Critical layout classes (LCP related)
    'flex', 'flex-col', 'grid', 'block', 'inline-block', 'hidden',
    'w-full', 'h-full', 'min-h-full', 'min-h-screen', 'mx-auto', 'container',
    'sticky', 'relative', 'absolute', 'fixed', 'top-0', 'z-50', 'z-40', 'z-30',
    
    // Critical spacing (above-the-fold)
    'p-2', 'p-3', 'p-4', 'p-6', 'p-8', 'px-2', 'px-3', 'px-4', 'px-6', 'py-2', 'py-3', 'py-4', 'py-6', 'py-8', 'py-12', 'py-16',
    'mb-2', 'mb-4', 'mb-6', 'mb-8', 'mt-2', 'mt-4', 'mt-6', 'gap-1', 'gap-2', 'gap-4', 'gap-6', 'gap-8',
    'max-w-none', 'max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl', 'max-w-7xl',
    
    // Critical typography (hero section)
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
    'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold',
    'text-center', 'text-left', 'text-right', 'leading-tight', 'leading-normal', 'leading-relaxed',
    
    // Critical colors (above-the-fold)
    'text-white', 'text-black', 'text-gray-50', 'text-gray-100', 'text-gray-200', 'text-gray-300', 'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900',
    'text-blue-50', 'text-blue-100', 'text-blue-400', 'text-blue-500', 'text-blue-600', 'text-blue-700',
    'text-purple-600', 'text-green-600', 'text-red-600', 'text-yellow-600', 'text-indigo-600',
    'bg-white', 'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-800', 'bg-gray-900',
    'bg-blue-50', 'bg-blue-500', 'bg-blue-600', 'bg-green-600', 'bg-red-600', 'bg-yellow-500',
    'bg-gradient-to-r', 'from-blue-600', 'to-purple-600', 'bg-clip-text', 'text-transparent',
    'border-gray-200', 'border-gray-300', 'border-gray-700', 'border-blue-600',
    
    // Dark mode essentials (critical)
    'dark:bg-gray-800', 'dark:bg-gray-900', 'dark:text-gray-50', 'dark:text-gray-100', 'dark:text-gray-200', 'dark:text-gray-300',
    'dark:border-gray-600', 'dark:border-gray-700', 'dark:hover:text-blue-400', 'dark:hover:bg-gray-800',
    
    // Interactive states (navigation/CTA)
    'hover:text-blue-600', 'hover:text-blue-500', 'hover:bg-blue-50', 'hover:bg-blue-600', 'hover:bg-gray-50', 'hover:bg-gray-100',
    'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500', 'focus:ring-blue-600', 'focus:ring-offset-2',
    'transition-colors', 'transition-all', 'transition-transform', 'duration-150', 'duration-200', 'duration-300', 'ease-in-out',
    
    // Essential responsive (mobile-first)
    'sm:text-lg', 'sm:text-xl', 'sm:text-2xl', 'sm:px-6', 'sm:py-4',
    'md:flex', 'md:hidden', 'md:block', 'md:text-2xl', 'md:text-3xl', 'md:text-4xl', 'md:text-5xl', 'md:text-6xl', 'md:px-6', 'md:py-3',
    'lg:text-4xl', 'lg:text-5xl', 'lg:text-6xl', 'lg:text-7xl', 'lg:px-8',
    'xl:text-7xl', 'xl:text-8xl',
    
    // Essential layout helpers
    'items-center', 'items-start', 'items-end', 'justify-center', 'justify-between', 'justify-start', 'justify-end',
    'flex-wrap', 'flex-nowrap', 'flex-grow', 'flex-shrink-0',
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4',
    'space-y-2', 'space-y-3', 'space-y-4', 'space-y-6', 'space-x-2', 'space-x-4',
    
    // Essential borders & shadows
    'border', 'border-b', 'border-t', 'border-l', 'border-r', 'border-0',
    'rounded', 'rounded-sm', 'rounded-md', 'rounded-lg', 'rounded-xl', 'rounded-full',
    'shadow', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl',
    
    // Essential positioning & visibility
    'sr-only', 'not-sr-only', 'focus:not-sr-only',
    'opacity-0', 'opacity-25', 'opacity-50', 'opacity-75', 'opacity-100',
    'visible', 'invisible',
    'overflow-hidden', 'overflow-x-hidden', 'overflow-y-auto',
    
    // Essential backdrop & effects
    'backdrop-blur', 'backdrop-blur-sm', 'backdrop-blur-md',
    'bg-opacity-80', 'bg-opacity-90'
  ],
  
  theme: {
    fontFamily: {
      'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
    },
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff", 
          500: "#357eff",
          600: "#1f63f2",
          700: "#194fd2",
          800: "#1a43a8",
          900: "#1a3a85"
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '72ch',
            p: { 
              marginTop: theme('spacing.3'), 
              marginBottom: theme('spacing.3'), 
              lineHeight: '1.7' 
            },
            h1: { 
              marginTop: theme('spacing.6'), 
              marginBottom: theme('spacing.3'),
              fontSize: theme('fontSize.3xl'),
              fontWeight: theme('fontWeight.bold')
            },
            h2: { 
              marginTop: theme('spacing.5'), 
              marginBottom: theme('spacing.2'),
              fontSize: theme('fontSize.2xl'),
              fontWeight: theme('fontWeight.bold')
            },
            h3: { 
              marginTop: theme('spacing.4'), 
              marginBottom: theme('spacing.2'),
              fontSize: theme('fontSize.xl'),
              fontWeight: theme('fontWeight.semibold')
            },
            ul: { 
              marginTop: theme('spacing.3'), 
              marginBottom: theme('spacing.3') 
            },
            li: { 
              marginTop: theme('spacing.1'), 
              marginBottom: theme('spacing.1') 
            },
            img: { 
              marginTop: theme('spacing.4'), 
              marginBottom: theme('spacing.4'), 
              borderRadius: theme('borderRadius.lg') 
            },
            a: { 
              color: theme('colors.blue.600'),
              textDecoration: 'underline',
              textUnderlineOffset: '2px'
            }
          }
        },
        invert: {
          css: {
            p: { color: theme('colors.slate.200') },
            a: { color: theme('colors.sky.300') }
          }
        }
      }),
    },
  },
  plugins: [
    typography,
  ]
};