const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const path = require('path')
module.exports = {
   outputDir: 'public_html',
   configureWebpack: {
      output: {
         publicPath: '/',
         path: path.resolve(__dirname, './public_html')
      },
      plugins: [
         new FaviconsWebpackPlugin({
            logo: './src/assets/multimedia/icons/icon.png',
            prefix: 'icons/',
            persistentCache: true,
            inject: true,
            background: '#fff',
            title: 'Coretabs Academy',
            icons: {
               android: true,
               appleIcon: true,
               appleStartup: true,
               coast: false,
               favicons: true,
               firefox: true,
               opengraph: true,
               twitter: true,
               yandex: true,
               windows: true
            }
         })
      ]
   }
}
