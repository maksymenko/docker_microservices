const webpack = require('webpack');

module.exports = {
     entry: './src/app/app.module.js',
     output: {
         path: './dist',
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loaders: ['ng-annotate-loader', 'babel-loader?presets[]=es2015']
          }, { 
             test: /\.css$/, 
             loader: "style!css" 
          }, {
             test: /\.html$/,
             loader: 'raw'
          }, { 
             test: /\.(woff|woff2|ttf|eot|svg|png|jpg)$/, 
             loader: 'url-loader?limit=8192&name=res/[hash:12].[ext]?' // inline base64 URLs for <=8k images, direct URLs for the rest
          }]
     }
 };