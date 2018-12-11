const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function() {
    return [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.pug$/,
            exclude: /node_modules/,
            loader: 'pug-loader',
            options: {
                pretty: true,
            }
        },
        {
            test: /\.scss$/,
            use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
            test: /\.hbs/,
            loader: 'handlebars-loader'
        },
        {
            test: /\.json$/i,
            loader: 'file-loader?name=[name].[ext]'
        },
        {
            test: /\.(jpe?g|png|gif|svg|)$/i,
            loader: 'file-loader?name=images/[name].[ext]'
        },
    ];
};