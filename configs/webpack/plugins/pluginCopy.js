const CopyPlugin = require('copy-webpack-plugin');
// -----------------------------------------------
const CONSTANTS = require('../utils/constants');

const config = {
  patterns: [
    {
      from: CONSTANTS.PATHS.src('src/assets/dataDummy'),
      to: CONSTANTS.PATHS.src('dist/media/data'),
      toType: 'dir',
    },
    {
      from: CONSTANTS.PATHS.src('public'),
      to: CONSTANTS.PATHS.src('dist'),
      globOptions: {
        ignore: ['**/index.html'],
      },
    },
  ],
};

module.exports = new CopyPlugin(config);
