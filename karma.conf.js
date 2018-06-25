/* =============================================================================
* KARMA CONFIGURATION
============================================================================= */
module.exports = function(config) {
	config.set({
		basePath: '',

		frameworks: ['mocha', 'chai'],
		preprocessors: {
			"**/*.unit.js": ["webpack"]
		},

		browsers: ['ChromeHeadless'],
		// How many browser should be started simultaneous
		concurrency: Infinity,

		/* FILES
		============================================================================= */
		files: [
			{ pattern: '**/*.unit.js', watched: false }
		],
		exclude: [],
		
		/* WEBPACK CONFIGURATION
		============================================================================= */
		webpack: require("./webpack.config.js"),
		webpackMiddleware: {
			stats: "errors-only"
		},
	
		/* REPORTER
		 * Available reporters: https://npmjs.org/browse/keyword/karma-reporter
		============================================================================= */
		reporters: ['mocha'],
		mochaReporter: {
			output: 'full'
		},
	
		// web server port
		port: 9876,
	
		// enable / disable colors in the output (reporters and logs)
		colors: true,
	
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
	
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	})
}