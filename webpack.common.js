const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

require('babel-polyfill');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.tsx'],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.jsx', '.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
};
