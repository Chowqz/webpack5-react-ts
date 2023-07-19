const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    port: 3006,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: 'eval-cheap-module-source-map',
})
