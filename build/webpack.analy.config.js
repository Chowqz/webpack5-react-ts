const { merge } = require("webpack-merge");
const SpeedMeasureWebpackPlugin = require("speed-measure-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const buildConfig = require("./webpack.prod.config");

const smp = new SpeedMeasureWebpackPlugin();

module.exports = smp.wrap(
  merge(buildConfig, {
    plugins: [new BundleAnalyzerPlugin()],
  })
);
