const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const config = {
  minimizer: {
    implementation: ImageMinimizerPlugin.imageminMinify,
    options: {
      plugins: ['imagemin-gifsicle', 'imagemin-mozjpeg', 'imagemin-pngquant', 'imagemin-svgo'],
    },
  },
};

module.exports = new ImageMinimizerPlugin(config);
