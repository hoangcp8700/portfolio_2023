module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {},
          //  reduce the file size is to remove any unrequired styles from the final CSS file.
          '@fullhuman/postcss-purgecss': {
            content: ['./dist/*.html'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
};
