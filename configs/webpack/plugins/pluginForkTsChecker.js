const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// -----------------------------------------------
const CONSTANTS = require('../utils/constants');

const ForkTsCheckerWebpack = (isDev) => {
  const config = {
    async: isDev,
    typescript: {
      configFile: CONSTANTS.PATHS.tsconfig,
    },
    eslint: { enabled: true, files: CONSTANTS.PATHS.appSrc('**/*.{ts,tsx,js,jsx}') },
  };

  return new ForkTsCheckerWebpackPlugin(config);
};

module.exports = ForkTsCheckerWebpack;
