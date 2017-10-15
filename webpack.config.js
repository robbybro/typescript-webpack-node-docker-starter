'use strict';

var webpack = require('webpack');

var webpackConfig = require('./webpack.common.config.js');
webpackConfig.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'),
webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin())
module.exports = webpackConfig;