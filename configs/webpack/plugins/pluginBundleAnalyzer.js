const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// -----------------------------------------------
const BundleAnalyzer = (isAnalyzer) => {
  const config = {
    ...(!isAnalyzer && { analyzerMode: 'disabled', generateStatsFile: true }),
    statsOptions: { source: false },
  };
  return new BundleAnalyzerPlugin(config);
};
module.exports = BundleAnalyzer;
