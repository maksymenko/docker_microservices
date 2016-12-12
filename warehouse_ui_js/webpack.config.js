const webpack = require('webpack');

module.exports = {
     entry: './src/js/app.js',
     output: {
         path: './dist',
         filename: 'app.bundle.js'
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             options: {
               presets: ["es2015"]
             }
          }, { 
            test: /\.css$/, 
            loader: "style!css" 
          }, {
            test: /\.html$/,
            loader: 'raw'
          }]
     }
 };