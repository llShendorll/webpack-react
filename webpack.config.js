const webpack = require('webpack');
const rules = require('./webpack.config.rules')();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            ...rules,
        ]
    },
    mode: "development",
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'main.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './template/page/index.pug'
        }),

        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),

        new CleanWebpackPlugin(['dist'])

    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};