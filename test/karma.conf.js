'use strict';

module.exports = function(config) {

    config.set({
        basePath: '..', //!\\ Ignored through gulp-karma //!\\

        files: [ //!\\ Ignored through gulp-karma //!\\
            'src/app/utils.js',
            'src/app/Board.js',
            'test/unit/**/*.js'
        ],
 
        autoWatch: true,

        frameworks: ['jasmine'],

        //browsers: ['PhantomJS'],
        browsers: ['Chrome'],

        reporters: ['progress'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-coverage'
        ]
    });

};
