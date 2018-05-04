module.exports = {
  rules: [
    {
      test: /\.ts$/,
      enforce: 'pre',
      loader: 'tslint-loader',
      exclude: /(node_modules)/,
      options: {
        configFile: 'tslint.json'
      }
    },
    {
      test: /\.(ts|tsx)?(\.erb)?$/,
      use: [{
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }]
    }
  ]
}
