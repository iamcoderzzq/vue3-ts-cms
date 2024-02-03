const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const Icons = require('unplugin-icons/webpack')
const IconsResolver = require('unplugin-icons/resolver')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://codercba.com:5000/',
        pathRewrite: {
          '^/api': ''
        },
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      },
      extensions: ['.less']
    },
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [
          IconsResolver({
            prefix: 'icon',
            enabledCollections: ['ep']
          }),
          ElementPlusResolver()
        ]
      }),
      Icons({
        autoInstall: true
      })
    ]
  }
})
