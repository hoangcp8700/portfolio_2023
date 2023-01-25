const TerserPlugin = require('terser-webpack-plugin'); //  minify/minimize your JavaScript.
// -----------------------------------------------

const config = {
  parallel: true,
  extractComments: false,
  terserOptions: {
    compress: true,
    mangle: false,
    output: {
      beautify: true,
    },
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info'], // Delete console
    },
  },
};

module.exports = new TerserPlugin(config);
