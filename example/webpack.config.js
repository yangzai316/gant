const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /(\.less|\.css)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: "./dist",
  },
};
