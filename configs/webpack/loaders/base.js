module.exports = [
  {
    test: /\.json$/,
    type: 'json',
  },
  {
    test: /\.txt$/i,
    type: 'asset/source',
  },
  {
    test: /\.(ico|png|jpe?g|gif|webp)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'media/images/[hash][ext][query]',
    },
  },
  {
    test: /\.(woff(2)?|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'media/fonts/[hash][ext][query]',
    },
  },
];
