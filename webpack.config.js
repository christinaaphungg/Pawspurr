const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '/dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ],
    module: {
        rules:[
            {
                test:  /\.jsx?/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                  },
                },
            },
        ]
    }
}