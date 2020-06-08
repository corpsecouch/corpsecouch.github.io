const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js'
  },

  output: {
    filename: 'main.js',
    //chunkFilename: 'bundles/[id].js',
    publicPath: 'dist/',
    path: path.resolve(__dirname, 'dist')
  },

  // webpack-dev-server
  devServer: {
    //contentBase: path.join(__dirname, 'dist'),
    //contentBase: './dist',
    //compress: true,
    //port: 9000,
    hot: true
  },

  module: {
    rules: [

      // this will apply to `.vue` files AND `<template>` blocks in `.vue` files
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      // this will apply to both plain `.js` files AND `<script>` blocks in `.vue` files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // this will apply to both plain `.css` files AND `<style>` blocks in `.vue` files
      /*{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },*/

      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          //'css-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          //'sass-loader'
          {
            loader: 'sass-loader',
            options: {
              data: `
                @import "styles/_fonts.scss";
                @import "styles/_colors.scss";
                @import "styles/_mixins.scss";
                @import "styles/_variables.scss";
              `
            }
          }
        ]
      },

      {
        test: /\.(png|jpg|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'assets',
              publicPath: 'dist/assets'
            }
          }
        ]
      },

      /*{
        test: /\.html$/i,
        loader: 'html-loader',
      },*/

    ]
  },

  resolve: {
    extensions: ['.vue', '.js', '.css', '.scss'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'data': path.resolve(__dirname, 'src/data'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'globals': path.resolve(__dirname, 'src/globals')
    }
  },

  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
};
