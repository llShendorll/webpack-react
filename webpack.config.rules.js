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
            test: /\.hbs/,
            loader: 'handlebars-loader'
        },
        {
            test: /\.(jpe?g|png|gif|svg|)$/i,
            loader: 'file-loader?name=images/[hash].[ext]'
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=fonts/[hash].[ext]'
        }
    ];
};