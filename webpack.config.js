const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    ['multiple-select']: './src/MultipleSelect.js',
    app: './src/app.js'
  },
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  optimization: {
    usedExports: true
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve('src')
    }
  }
}
