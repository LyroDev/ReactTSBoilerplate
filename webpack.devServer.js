const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.common');

require('dotenv').config();

module.exports = merge(commonConfig, {
  output: { path: path.join(__dirname, 'build'), filename: 'bundle.js' },
  mode: 'development',
  devServer: {
    hot: true,
    port: 3_000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
});
