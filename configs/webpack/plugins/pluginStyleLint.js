

const StyleLintPlugin = require('stylelint-webpack-plugin'); // format code with stylelint

// -----------------------------------------------
const CONSTANTS = require('../utils/constants');

const config = {
  configFile: CONSTANTS.PATHS.stylelint,
  context: 'src',
  files: '**/*.scss',
  failOnError: false,
  quiet: false,
  emitErrors: true, // by default this is to true to check the CSS lint errors
}

module.exports = new StyleLintPlugin(config);