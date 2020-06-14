const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  output: {
    filename: "./assets/js/[name].bundle.[contentHash].js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "./assets/css/[name].[contentHash].css",
    }),
  ],
});
