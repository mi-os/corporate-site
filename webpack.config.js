const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {app: './src/app.js'},
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: `[name].bundle.js`,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(jpe?g|png|woff2?|ttf|eot)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `[contenthash].[ext]`,
                            outputPath: 'images',
                            inputPath: 'images'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader']                
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `[name].css`
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ]
};