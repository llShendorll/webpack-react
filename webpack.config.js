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
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'main.[hash].js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        // new HtmlWebpackPlugin({
        //     inject: false,
        //     hash: true,
        //     template: './template/page/index.pug'
        // }),

        new HtmlWebpackPlugin({
            template: './template/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'app.[chunkhash].css',
        }),

        new CleanWebpackPlugin(['dist']),
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};