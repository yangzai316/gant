const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        clean: true,
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/
        }, {
            test: /(\.less|\.css)$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ],
        },]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })],
    devServer: {
        static: './dist',
    },
};