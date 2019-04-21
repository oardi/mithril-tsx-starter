const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {

    return {
        context: path.resolve(__dirname, './src'),
        entry: {
            app: './app.tsx'
        },

        output: {
            filename: '[name].[contenthash].bundle.js',
            chunkFilename: '[name].[contenthash].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },

        devtool: 'source-map',

        resolve: { extensions: ['.ts', '.tsx', '.js', '.jsx'] },

        module: {
            rules: [
                { test: /\.tsx?$/, loader: 'ts-loader', options: { transpileOnly: true } },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                },
                { test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader?name=assets/[name].[ext]' },
                {
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'assets/img',
                                publicPath: 'assets/img'
                            }
                        }
                    ]
                }
            ],
        },

        plugins: [
            new CleanWebpackPlugin(['dist']),
            new HtmlWebpackPlugin({
                template: "./index.html",
                title: 'MY TITLE (TODO - customize through JSON)',
                filename: "index.html",
                chunksSortMode: "manual",
                chunks: ['polyfills', 'vendors', 'app'],
                favicon: 'favicon.ico'
            }),
            new MiniCssExtractPlugin({
                filename: "style.css",
                chunkFilename: "style.css"
            }),
            new CopyWebpackPlugin([
                // copy static assets here
            ]),
            new webpack.DefinePlugin({
                // define environment vars here
            })
        ],

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    uglifyOptions: {
                        output: {
                            comments: false
                        }
                    }
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    }
}