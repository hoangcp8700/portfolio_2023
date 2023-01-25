// ----------------------------------------------------
const { loaderProd } = require('./loaders');
const CONFIGS = require('./configs');
const PLUGINS = require('./plugins');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: loaderProd,
  },
  cache: true,
  performance: CONFIGS.PERFORMANCE.performanceProduct,
  optimization: {
    ...CONFIGS.OPTIMIZE.optimizationBase,
    ...CONFIGS.OPTIMIZE.optimizationProduct,
  },

  plugins: [
    PLUGINS.pluginHtml(false),
    PLUGINS.pluginForkTsChecker(false),
    PLUGINS.pluginCleanWebpack,
    PLUGINS.pluginMiniCssExtract,
    // ...PLUGINS.pluginComspression, // [gzip, brotli]
    PLUGINS.pluginCssoWebpack,
  ],
};
