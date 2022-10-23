const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // port: 8020,
    proxy: {
      '/api/v1/': {
        target: 'http://127.0.0.1:8000', // Django WSGI
        pathRewrite: { '^/api/v1/': '/' }
      }
    }
  }
})
