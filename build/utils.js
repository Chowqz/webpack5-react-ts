const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV === 'development'

const loaderConfig = {
  css: {
    test: /\.css$/i,
  },
  less: {
    test: /\.less$/i,
    loader: 'less-loader',
  },
  sass: {
    test: /\.s[ac]ss$/i,
    loader: 'sass-loader',
  },
  stylus: {
    test: /\.styl$/i,
    loader: 'stylus-loader',
  },
}

const generateLoader = loader => {
  const config = loaderConfig[loader]
  return {
    test: loaderConfig[loader].test,
    use: [
      devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            localIdentName: '[local]__[hash:base64:5]',
            exportLocalsConvention: 'camelCaseOnly',
          },
        },
      },
      !devMode && 'postcss-loader',
      config.loader,
    ].filter(loader => Boolean(loader)),
    include: [path.resolve(__dirname, '../src')],
  }
}

exports.cssLoaderConfig = [
  generateLoader('css'),
  generateLoader('less'),
  generateLoader('sass'),
  generateLoader('stylus'),
]
