const devMode = process.env.NODE_ENV === 'development'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ].filter(Boolean),
  plugins: [
    // 开发模式下，启动react热更新插件
    devMode && require.resolve('react-refresh/babel'),
  ].filter(Boolean),
}
