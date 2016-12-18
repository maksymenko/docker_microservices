const webpack = require('webpack');

module.exports = {
    devtool: 'sourcemap',
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
             test: /\.svg$/,
             loader: 'raw'
        }]
     }
 };