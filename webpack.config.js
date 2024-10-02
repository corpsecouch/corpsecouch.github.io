const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const SitemapPlugin = require('sitemap-webpack-plugin').default;

// needed for auto generating the sitemap xml
const routesData = require('./src/data/routes.js');
const paths = routesData.map((route) => {
  return '/#' + route.path;
});

module.exports = {
  mode: 'development',
  //mode: 'production',

  entry: {
    app: {
      import: './src/app.js',
      filename: 'app.js'
    }
  },

  output: {
    chunkFilename: 'bundles/[id].js',
    //publicPath: 'dist/',
    path: path.resolve(__dirname, 'dist'),  // tells webpack to compile everything to 'dist'
    clean: true
  },

  performance: {
    hints: false,
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js'); // don't process js files
    }
  },

  // webpack-dev-server
  devServer: {
    hot: true,
    open: true,
    client: {
      logging: 'verbose',
      overlay: true
    },
    static: [
      /*{
        directory: './',
        publicPath: '/'
      },*/
      {
        directory: './dist',  // serve files from dist as if it's serving from the root directory
        publicPath: '/'
      }
    ],
    watchFiles: ['src/**/*'] // watch for file changes in dist
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

      // enables source map for easier debugging
      /*{
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: ['source-map-loader']
      },*/

      // this will apply to both plain `.css` files AND `<style>` blocks in `.vue` files
      /*{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },*/

      {
        test: /\.s[ac]ss$/i,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
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
        test: /\.(png|jpe?g|gif|mp4|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          //publicPath: '/dist/assets/',
          publicPath: '/assets/',
          outputPath: 'assets/',
          filename: '[hash][ext][query]'
        }
      },

    ]
  },

  resolve: {
    extensions: ['.vue', '.js', '.css', '.scss'],
    alias: {
      // https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags
      'vue$': 'vue/dist/vue.esm-bundler.js',
      'components': path.resolve(__dirname, 'src/components'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'data': path.resolve(__dirname, 'src/data'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'globals': path.resolve(__dirname, 'src/globals')
    }
  },

  plugins: [
    new VueLoaderPlugin(),

    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "*.*",        // move everything (files with an extension) at the root of src to dist
          context: "src/",
          globOptions: {
            ignore: "app.js"  // except app.js because that gets processed
          }
        },
        {
          from: "CNAME",        // move CNAME
          context: "src/"
        }
      ]
    }),

    // auto generates the sitemap xml
    new SitemapPlugin({ base: 'https://jasonbejot.com', paths: paths })
  ]
};
