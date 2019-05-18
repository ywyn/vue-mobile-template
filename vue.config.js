module.exports = {
  publicPath: '',
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  }
}
