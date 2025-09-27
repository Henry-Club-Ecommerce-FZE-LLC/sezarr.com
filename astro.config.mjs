import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkHeadingId from "remark-heading-id";

/** @type {import('astro').AstroUserConfig} */
export default {
  site: "https://sezarr.com",
  output: "static",
  image: {
    domains: ["sezarr.com"],
    remotePatterns: [{
      protocol: "https",
      hostname: "sezarr.com"
    }],
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: 268402689
      }
    }
  },
  integrations: [
    tailwind({ 
      applyBaseStyles: true,
      config: {
        // Optimize for smaller bundle size
        corePlugins: {
          preflight: true,
        },
        // Purge unused styles
        purge: {
          enabled: true,
          content: [
            './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
          ],
          safelist: [
            'text-2xl',
            'text-3xl',
            'text-4xl',
            'font-bold',
            'font-semibold',
            'text-gray-800',
            'text-gray-900'
          ]
        },
        // Minimize CSS
        cssnano: {
          preset: ['advanced', {
            discardComments: { removeAll: true },
            discardUnused: true,
            mergeIdents: true,
            reduceIdents: true
          }]
        }
      }
    }), 
    mdx(), 
    sitemap({
      customPages: [
        'https://sezarr.com/',
        'https://sezarr.com/auto-insurance/',
        'https://sezarr.com/health-insurance/',
        'https://sezarr.com/homeowners-insurance/',
        'https://sezarr.com/life-insurance/',
        'https://sezarr.com/tools/',
        'https://sezarr.com/about/',
        'https://sezarr.com/contact/',
        'https://sezarr.com/authors/',
        'https://sezarr.com/search/',
        'https://sezarr.com/privacy/',
        'https://sezarr.com/terms/',
        'https://sezarr.com/disclaimer/',
        'https://sezarr.com/affiliate-disclosure/'
      ]
    })
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkHeadingId]
  },
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
      sourcemap: false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log'],
        },
        format: {
          comments: false
        }
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            // Vendors
            if (id.includes('node_modules')) {
              if (id.includes('@astrojs')) return 'vendor-astro';
              if (id.includes('react')) return 'vendor-react';
              if (id.includes('tailwind')) return 'vendor-tailwind';
              return 'vendor';
            }
            // Route-based code splitting
            if (id.includes('/pages/')) {
              const match = id.match(/\/pages\/([^/]+)/);
              if (match) return `page-${match[1]}`;
            }
          },
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/\.(png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif)$/i.test(assetInfo.name)) {
              return `assets/images/[name]-[hash][extname]`;
            }
            if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name)) {
              return `assets/fonts/[name]-[hash][extname]`;
            }
            return `assets/[name]-[hash][extname]`;
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js'
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          outputStyle: 'compressed'
        }
      }
    },
    // Optimize dependencies
    optimizeDeps: {
      exclude: ['@astrojs/mdx']
    },
    // CDN environment variables
    define: {
      'import.meta.env.CDN_BASE_URL': JSON.stringify(
        process.env.NODE_ENV === 'production' 
          ? 'https://cdn.jsdelivr.net/gh/Henry-Club-Ecommerce-FZE-LLC/sezarr.com@latest/cdn-assets'
          : ''
      ),
      'import.meta.env.USE_CDN': JSON.stringify(process.env.NODE_ENV === 'production')
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
};
