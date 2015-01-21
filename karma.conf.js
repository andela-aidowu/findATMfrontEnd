'use strict';
// Karma configuration
// Generated on Tue Jan 20 2015 19:44:55 GMT+0100 (WAT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // 'app/lib/**/*js',
      'app/lib/angular/angular.js',
       'app/lib/angular-mocks/angular-mocks.js',
      'app/lib/angular-ui-router/release/angular-ui-router.js',
       'app/lib/angular-resource/angular-resource.js',
       'app/lib/angular-cookies/angular-cookies.js',
      'app/partials/**/tests/*test.js',
      'app/js/application.js',
      'app/lib/angular-animate/*.js',
      'app/lib/angular-bootstrap/*.js',
      'app/lib/angular-ui-utils/ui-utils*.js',
      'app/partials/**/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      // 'app/lib/angular-animate/*.js',
      // 'app/lib/angular-bootstrap/*.js'
      // 'app/lib/angular-cookies/*.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
