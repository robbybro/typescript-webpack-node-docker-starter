'use strict';

process.on('uncaughtException', function (err) {
    console.error(
        (new Date()).toUTCString(),
        `uncaughtException: ${err.message}`
    );
    console.error(err.stack);
    process.exit(1);
});

process.noDeprecation = true

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const _ = require('underscore');
const axios = require('axios');
const Instafeed = require('instafeed.js/instafeed');
const morgan = require('morgan');
const path = require('path');

const express = require('express');
const app = express();
const staticPath = path.join(__dirname, 'build');
app.use(express.static(staticPath));
app.use(morgan('dev'));

if (isDeveloping) {
    console.log('developing!');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    const compiler = webpack(webpackConfig);
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
    }));

    const bundlePath = path.join(staticPath, '/index.html');

    console.log('bundlePath', bundlePath);

    app.use(require('webpack-hot-middleware')(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
    app.get('/', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(bundlePath));
        res.end();
    });
}
else {
    const staticPath = path.join(__dirname, 'build');
    app.use(express.static(staticPath));
}

app.get('/title', function (req, res) {
    return res.json({
        title: 'Hello World!'
    });
});

app.listen(port, function () {
    console.log('Project Running');
});