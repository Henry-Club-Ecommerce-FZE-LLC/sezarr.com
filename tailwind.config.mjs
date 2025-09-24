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
      'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      'serif': ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcd9ff",
          300: "#90c0ff",
          400: "#5c9eff",
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
            p: { marginTop: theme('spacing.3'), marginBottom: theme('spacing.3'), lineHeight: '1.8' },
            h1: { marginTop: theme('spacing.6'), marginBottom: theme('spacing.3') },
            h2: { marginTop: theme('spacing.6'), marginBottom: theme('spacing.3') },
            h3: { marginTop: theme('spacing.5'), marginBottom: theme('spacing.2') },
            ul: { marginTop: theme('spacing.3'), marginBottom: theme('spacing.3') },
            ol: { marginTop: theme('spacing.3'), marginBottom: theme('spacing.3') },
            li: { marginTop: theme('spacing.1'), marginBottom: theme('spacing.1') },
            img: { marginTop: theme('spacing.5'), marginBottom: theme('spacing.5'), borderRadius: theme('borderRadius.lg') },
            a: { textDecoration: 'underline', textUnderlineOffset: '3px' }
          }
        },
        invert: {
          css: {
            p: { color: theme('colors.slate.200') },
            a: { color: theme('colors.sky.300') }
          }
        }
      })
    }
  },
  plugins: [typography]
};
