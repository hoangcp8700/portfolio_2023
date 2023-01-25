const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');
// -----------------------------------------------

// const config = {
//   filename: '[path][base].gz[query]',
//   algorithm: 'gzip',
//   test: /.(js|jsx|css|html|svg|png|jpg|jpeg)$/,
//   threshold: 10240,
//   minRatio: 0.8,
//   deleteOriginalAssets: true,
// };

// module.exports = new CompressionPlugin(config);

module.exports = [
  new CompressionPlugin({
    filename: '[path][base].gz[query]',
    algorithm: 'gzip',
    test: /.(js|jsx|css|html|svg|png|jpg|jpeg)$/,
    threshold: 10240,
    minRatio: 0.8,
    deleteOriginalAssets: true,
  }),

  new CompressionPlugin({
    filename: '[path][base].br[query]',
    algorithm: 'brotliCompress',
    test: /.(js|jsx|css|html|svg|png|jpg|jpeg)$/,
    compressionOptions: {
      params: {
        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      },
    },
    threshold: 10240,
    minRatio: 0.8,
  }),
];
