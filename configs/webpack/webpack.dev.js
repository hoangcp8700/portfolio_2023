const WebpackNotifierPlugin = require('webpack-notifier');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const serverConfig = require('./webpack.server');
const { merge } = require('webpack-merge');

// ----------------------------------
const { loaderDev } = require('./loaders');
const CONFIGS = require('./configs');
const PLUGINS = require('./plugins');

module.exports = merge(serverConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  module: {
    rules: loaderDev,
  },

  performance: CONFIGS.PERFORMANCE.performanceDev,
  optimization: CONFIGS.OPTIMIZE.optimizationBase,
  plugins: [
    PLUGINS.pluginHtml(true),
    PLUGINS.pluginForkTsChecker(true),
    PLUGINS.pluginStyleLint,
    new WebpackNotifierPlugin(),
    new ReactRefreshWebpackPlugin(),
  ],
});
