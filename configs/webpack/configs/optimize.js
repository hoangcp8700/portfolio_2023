const PLUGINS = require('../plugins');

const optimizationBase = {
  // runtimeChunk: false,
  moduleIds: 'deterministic', //Added this to retain hash of vendor chunks.
  runtimeChunk: 'single',
  removeEmptyChunks: true,
  splitChunks: {
    // to avoid module duplication
    chunks: 'all',
    minSize: 1000 * 600,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      },
    },
  },
};

const optimizationProduct = {
  minimize: true,
  minimizer: [
    PLUGINS.pluginTerser,
    PLUGINS.pluginCssMinimizer,
    PLUGINS.pluginJsonMinimizer,
    PLUGINS.pluginImageMinimizer,
  ],
};
module.exports = {
  optimizationBase,
  optimizationProduct,
};
