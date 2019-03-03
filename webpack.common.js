const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'client', 'public', 'index.html'),
  filename: 'index.html',
  inject: true,
});

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});

const MiniCssExtractPluginConfig = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});

module.exports = {
  entry: ['@babel/polyfill', path.join(__dirname, 'client', 'index.tsx')],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff(2)?|ttf|eot|)$/i,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'assets'
        },
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig, DefinePluginConfig, MiniCssExtractPluginConfig],
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'client'),
  },
};
