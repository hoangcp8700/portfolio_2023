const path = require('path');
const { default: TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  framework: '@storybook/react',
  features: {
    babelModeV7: true,
    storyStoreV7: true,
  },
  core: {
    builder: {
      name: 'webpack5',
      options: {
        lazyCompilation: true,
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  reactOptions: {
    fastRefresh: true,
  },
  webpackFinal: async (config) => {
    // Extensions resolve
    config.resolve.extensions.push('.js', '.ts', '.tsx', '.mdx');

    // Alias resolve
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    };

    // // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules.push({
      test: /\.(js|ts)x?$/i,
      exclude: /node_modules/,
      // [/node_modules/,, CONSTANTS.PATHS.src('src/stories')]
      loader: 'babel-loader',
      loader: require.resolve('babel-loader'),
    });

    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-react'),
      require.resolve('@babel/preset-env'),
    ];

    // 2b. Run `source-loader` on story files to show their source code
    //     automatically in `DocsPage` or the `Source` doc block.
    config.module.rules.push({
      test: /\.(stories|story)\.[tj]sx?$/,
      loader: require.resolve('@storybook/source-loader'),
      exclude: [/node_modules/],
      enforce: 'pre',
    });

    // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/i,
      enforce: 'pre',
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
      include: path.resolve(__dirname, '../src'),
    });

    // config txt
    config.module.rules.push({
      test: /\.txt$/i,
      type: 'asset/source',
    });

    // config style loader
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src'),
    });

    // PLUGINS
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
      }),
    ];
    return config;
  },
};
