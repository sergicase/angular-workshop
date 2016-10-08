module.exports = config => {
  config.set({
    frameworks: [
      'jasmine',
    ],

    reporters: [
      'progress',
    ],

    files: [
      'src/tests.webpack.js'
    ],

    preprocessors: {
      'src/tests.webpack.js': ['webpack', 'sourcemap'],
    },

    browsers: [
      'Chrome',
    ],

    singleRun: true,

    webpack: require('./webpack.config'),

    webpackMiddleware: {
      noInfo: 'errors-only',
    },
  });
};
