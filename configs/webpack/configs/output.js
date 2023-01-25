const CONSTANTS = require('../utils/constants');

module.exports = {
  // --Support Lazy Loading / Code Splitting ---
  chunkFilename: 'static/[name].[contenthash].bundle.js',
  filename: 'static/[name].[contenthash].bundle.js',
  // ---- ---- ---- ---- ---- ---- ---- ---- ---- //
  path: CONSTANTS.PATHS.appBuild,
  clean: true,
};
