const CONSTANTS = require('./utils/constants');
const CONFIGS = require('./configs');
const PLUGINS = require('./plugins');
const webpack = require('webpack');

// ----------------------------------------------------

module.exports = (envVars) => {
  const { ANALYZER } = envVars;

  return {
    entry: {
      app: CONSTANTS.PATHS.appIndexJs,
    },
    output: CONFIGS.OUTPUT,

    resolve: {
      extensions: CONSTANTS.VARIABLES.EXTENSIONS,
      alias: {
        '@': CONSTANTS.PATHS.appSrc(),
      },
      plugins: [PLUGINS.pluginTsconfigPath],
    },
    plugins: [
      PLUGINS.pluginCopy,
      PLUGINS.pluginDotenv,
      PLUGINS.pluginEslint,
      PLUGINS.pluginBundleAnalyzer(ANALYZER),

      // working in dev
      new webpack.DefinePlugin({
        'process.env.name': JSON.stringify('name development'), // NOTE: use to test, place new env name
      }),
    ],
  };
};
