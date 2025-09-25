/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./pages/**/*.{astro,html,md,mdx}"
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