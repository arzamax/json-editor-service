const webpack = require('webpack');
const path = require('path');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(commonConfig, {
  devServer: {
    host: 'localhost',
    port: 1337,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    contentBase: path.join(__dirname, 'dist'),
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
