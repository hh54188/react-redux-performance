const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const PUBLIC_DIR_PATH = path.join(__dirname, "public");

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: PUBLIC_DIR_PATH,
    publicPath: "/"
  },
  plugins: [new CleanWebpackPlugin(["public/*.js", "public/*.map"])],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
