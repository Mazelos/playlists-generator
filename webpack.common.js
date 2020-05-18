const path = require("path");
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'client'),
  // plugins: [
  //   new FaviconsWebpackPlugin('src/client/public/assets/favicon.png') 
  // ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs"
          }
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ]
  }
}