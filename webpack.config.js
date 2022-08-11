const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.ts",
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
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
    library: {
      name: "gant",
      type: "umd",
    },
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  externals: ["react", "react-dom"],
};
