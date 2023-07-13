const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV === "development";

module.exports = {
  entry: path.resolve(__dirname, "../src/index.tsx"),
  output: {
    filename: "[name].js",
    // filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
        include: [path.resolve(__dirname, "../src")],
      },
      {
        test: /\.less$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
        ],
        include: [path.resolve(__dirname, "../src")],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: "static/images/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset",
        generator: {
          filename: "static/fonts/[name].[contenthash:8][ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
        type: "asset",
        generator: {
          filename: "static/media/[name].[contenthash:8][ext]",
        },
      },
    ],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "../src"),
    },
    extensions: [".js", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash:8].css",
      chunkFilename: devMode ? "[id].css" : "[id].[contenthash:8].css",
    }),
  ],
  cache: {
    type: "filesystem",
  },
};
