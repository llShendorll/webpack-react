const webpack = require('webpack');
const rules = require('./webpack.config.rules')();
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            ...rules,
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'main.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            inject: true,
            template: './template/page/index.pug'
        }),
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};