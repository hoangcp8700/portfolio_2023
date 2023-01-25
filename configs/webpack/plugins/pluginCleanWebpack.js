const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// -----------------------------------------------
const CONSTANTS = require('../utils/constants');

const config = {
  cleanOnceBeforeBuildPatterns: [CONSTANTS.PATHS.src('dist/**/*'), '**/*', '!profile.json', '!tsconfig.tsbuildinfo'],
};

module.exports = new CleanWebpackPlugin(config);
