const path = require("path");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'client'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/',
  },
  module: {
    rules: [
      {
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}