const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// -----------------------------------------------
const config = {
  generateStatsFile: true,
  statsOptions: { source: false },
};

module.exports = new BundleAnalyzerPlugin(config);
