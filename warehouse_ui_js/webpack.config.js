const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');
const pkg = require('./package.json');

const srcPath = path.join(__dirname, 'src');
const distPath = path.join(__dirname, 'dist');

const minimizeOptions = {
    conservativeCollapse: false,
    preserveLineBreaks: false
};

module.exports = {
  entry: {
    app: [path.join(srcPath, 'app/app.module.js')]
  },
  output: {
    path: path.join(distPath),
    filename: 'app.bundle-[hash:8].js'
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
             exclude: [path.join(srcPath, 'index.html')], 
            loader: 'ng-cache?minimizeOptions=' + JSON.stringify(minimizeOptions)
        },
       {
        test: /\.(woff|woff2|ttf|eot|svg|png|jpg)$/, 
        loader: 'url-loader?limit=8192&name=res/[hash:12].[ext]?' // inline base64 URLs for <=8k images, direct URLs for the rest
      }],
      preLoaders: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'jshint'
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg: pkg,
      template: path.join(srcPath, 'index.html')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: false,
      mangle: false,
      beautify: true,
      sourceMap: false
  })]
};