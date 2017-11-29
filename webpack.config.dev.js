const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const PUBLIC_DIR_PATH = path.join(__dirname, "public");

module.exports = merge(common, {
  devtool: "source-map",
  devServer: {
    contentBase: PUBLIC_DIR_PATH,
    historyApiFallback: true,
    open: true,
    overlay: {
      error: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index-template.html")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  watch: true
});
