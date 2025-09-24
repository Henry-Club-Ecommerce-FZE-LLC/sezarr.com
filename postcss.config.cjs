const config = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // CSS optimization plugins
    ...(process.env.NODE_ENV === 'production' ? [
      require('cssnano')({
        preset: ['advanced', {
          autoprefixer: false, // Already handled by autoprefixer
          calc: false, // Preserve calc() for custom properties
          colormin: true,
          convertValues: true,
          discardComments: { removeAll: true },
          discardDuplicates: true,
          discardEmpty: true,
          discardOverridden: true,
          discardUnused: true,
          mergeIdents: true,
          mergeLonghand: true,
          mergeRules: true,
          minifyFontValues: true,
          minifyGradients: true,
          minifyParams: true,
          minifySelectors: true,
          normalizeCharset: true,
          normalizeDisplayValues: true,
          normalizePositions: true,
          normalizeRepeatStyle: true,
          normalizeString: true,
          normalizeTimingFunctions: true,
          normalizeUnicode: true,
          normalizeUrl: true,
          normalizeWhitespace: true,
          orderedValues: true,
          reduceIdents: true,
          reduceInitial: true,
          reduceTransforms: true,
          svgo: true,
          uniqueSelectors: true,
          zindex: false // Preserve z-index values for components
        }]
      })
    ] : [])
  ],
};

module.exports = config;
