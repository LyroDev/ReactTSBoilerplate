const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[contenthash].js',
  },
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new AssetsPlugin(),
  ],
});
