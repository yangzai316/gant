const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
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
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        library: {
            name: 'gant',
            type: 'umd',
        },
    },
    externals: ['react', 'react-dom']
};
