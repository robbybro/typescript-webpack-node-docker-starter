const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const entry = path.resolve(__dirname, 'src', 'index.tsx');
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                WEBPACK: true,
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'src', 'assets'),
                to: path.resolve(__dirname, 'dist', 'assets'),
            },
        ]),
        new ExtractTextPlugin('bundle.css'),
    ],
    module: {
        loaders: [
            // fonts and images
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jp(e*)g|svg|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            name: 'images/[hash]-[name].[ext]',
                        },
                    },
                ],
            },
            // code
            {
                test: /\.tsx?$/,
                use: [
                    'strict-loader',
                    'babel-loader',
                    'awesome-typescript-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function() {
                                    return [require('autoprefixer')];
                                },
                            },
                        },
                    ],
                }),
                include: path.resolve(__dirname, 'src'),
            },
        ],
    },
    resolve: {
        modules: [__dirname, path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
};
