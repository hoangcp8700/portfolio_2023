const HtmlWebpackPlugin = require('html-webpack-plugin');

// -----------------------------------------------
const CONSTANTS = require('../utils/constants');

const HtmlWebpack = (isDev) => {
  const config = {
    inject: true,
    title: CONSTANTS.VARIABLES.VARIABLES,
    template: CONSTANTS.PATHS.appHtml,
    // jsExtension: '.gz',
    // favicon: paths.src + '/assets/icons/favicon.png',
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeAttributeQuotes: false,
      ...(!isDev && {
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }),
    },
  };
  return new HtmlWebpackPlugin(config);
};

module.exports = HtmlWebpack;
