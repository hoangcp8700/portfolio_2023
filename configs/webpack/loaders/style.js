const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const styleLoader = (loader) => ({
  test: /\.((c|s[ac])ss)$/i,
  use: [
    loader,
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        importLoaders: 1,
        // modules: true, *.module.css
      },
    },
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: { sourceMap: true },
    },
  ],
});

const styleDevLoader = styleLoader('style-loader');
const styleProdLoader = styleLoader(MiniCssExtractPlugin.loader);

module.exports = {
  styleDevLoader,
  styleProdLoader,
};
