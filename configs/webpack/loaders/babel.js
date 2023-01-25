const CONSTANTS = require('../utils/constants');

const babelDevLoader = {
  test: /\.(js|ts)x?$/i,
  include: CONSTANTS.PATHS.appSrc(),
  use: [
    {
      loader: 'babel-loader',
      options: {
        plugins: ['react-refresh/babel'],
      },
    },
  ],
};
const babelProdLoader = {
  test: /\.(js|ts)x?$/i,
  exclude: /node_modules/,
  // [/node_modules/,, CONSTANTS.PATHS.src('src/stories')]
  loader: 'babel-loader',
};

module.exports = {
  babelDevLoader,
  babelProdLoader,
};
