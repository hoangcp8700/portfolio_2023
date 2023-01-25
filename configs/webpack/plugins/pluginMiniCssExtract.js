const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// -----------------------------------------------

const config = {
  filename: 'styles/[name].[contenthash].min.css',
  chunkFilename: 'styles/[name].[contenthash].min.css',
  ignoreOrder: true,
};

module.exports = new MiniCssExtractPlugin(config);
