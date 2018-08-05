module.exports = {
  map: false,
  plugins: [
    require('autoprefixer')(),
    require('postcss-import-url')({
      modernBrowser: true
    }),
    require('cssnano')({
      preset: [
        'default', {
          mergeLonghand: false
        }
      ]
    })
  ]
};
