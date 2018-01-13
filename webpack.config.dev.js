const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
module.exports = {
    devtool: 'source-map',
    target: 'web',
    entry: ['webpack-hot-middleware/client', srcPath + '/index.tsx'],
    output: {
        path: srcPath,
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
                WEBPACK: true,
            },
        }),
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
                include: srcPath,
            },
            {
                test: /\.jsx?$/,
                use: ['strict-loader', 'babel-loader'],
                include: srcPath,
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
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
                include: srcPath,
            },
        ],
    },
    resolve: {
        modules: [__dirname, path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
};
