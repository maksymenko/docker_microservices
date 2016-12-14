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
             loader: 'babel-loader'
          }, { 
            test: /\.css$/, 
            loader: "style!css" 
          }, {
            test: /\.html$/,
            loader: 'raw'
          }]
     }
 };