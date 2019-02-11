const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [

      // this will apply to `.vue` files AND `<template>` blocks in `.vue` files
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      // this will apply to both plain `.js` files AND `<script>` blocks in `.vue` files
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },*/

      // this will apply to both plain `.css` files AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.vue', '.js', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'components': path.resolve(__dirname, 'src/components/'),
      'pages': path.resolve(__dirname, 'src/pages/')
    }
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};
