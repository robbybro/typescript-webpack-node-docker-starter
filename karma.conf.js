const webpackConfig = require('./webpack.config.js');
// Karma configuration
// Generated on Sun Oct 15 2017 14:03:03 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    webpack: webpackConfig,
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // files: ['./test/**/*.spec.js'],
    files: [
      {pattern: 'test/**/*spec.ts', included: true},
      {pattern: 'test/**/*spec.ts', included: true}
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test/**/*.ts': ['webpack', 'sourcemap'],
        'test/**/*.tsx': ['webpack', 'sourcemap'],
    },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-spec-reporter',
      'karma-phantomjs-launcher',
      'karma-webpack',
    ],

    mime: {
        'text/x-typescript': ['ts','tsx'],
    },

    specReporter: {
        maxLogLines: 5,
        // suppressPassed: true,
    },
  })
}
