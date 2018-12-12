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
            test: /\.(css|scss)$/,
            use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => [require('autoprefixer')({
                                'browsers': ['> 1%', 'last 16 versions']
                            })],
                        }
                    },
                    'sass-loader'
                 ]
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
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/',
                    }
                }
            ]
        },
    ];
};