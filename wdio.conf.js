exports.config = {
	specs: [
		'project/**/*.int.js'
	],
	port: '9515',
	path: '/',
	exclude: [
		// 'path/to/excluded/files'
	],
	
	/* CAPABILITIES
	============================================================================= */
	capabilities: [{
		maxInstances: 5,
		browserName: 'chrome',
		chromeOptions: {
			args: ['--headless', '--disable-gpu']
		}
	}],

	/* TEST CONFIGURATIONS 
	============================================================================= */
	sync: true,
	logLevel: 'silent',
	coloredLogs: true,
	deprecationWarnings: true,
	bail: 0,
	// Saves a screenshot to a given path if a command fails.
	screenshotPath: './errorShots/',
	// Set a base URL in order to shorten url command calls. If your `url` parameter starts
	// with `/`, the base url gets prepended, not including the path portion of your baseUrl.
	// If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
	// gets prepended directly.
	baseUrl: 'http://testing-boilerplate:8888',
	// Default timeout for all waitFor* commands.
	waitforTimeout: 10000,
	// Default timeout in milliseconds for request
	// if Selenium Grid doesn't send response
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
   
	/* TEST RUNNER SERVICES
	 * Services take over a specific job you don't want to take care of. They enhance
	 * your test setup with almost no effort. Unlike plugins, they don't add new
	 * commands. Instead, they hook themselves up into the test process.
	----------------------------------------------------------------------------- */
	services: ['chromedriver'],
  
	/* FRAMEWORK YOU WANT TO RUN YOUR SPECS WITH.
	* The following are supported: Mocha, Jasmine, and Cucumber
	* see also: http://webdriver.io/guide/testrunner/frameworks.html
   ----------------------------------------------------------------------------- */
	framework: 'mocha',

	/* TEST REPORTER FOR STDOUT
	 * The only one supported by default is 'dot'
	 * see also: http://webdriver.io/guide/reporters/dot.html
	----------------------------------------------------------------------------- */
	reporters: ['spec'],

	/* MOCHA OPTIONS
	 * See the full list at http://mochajs.org/
	----------------------------------------------------------------------------- */
	mochaOpts: {
		ui: 'bdd'
	},


	/* HOOKS
	============================================================================= */
  
	/**
	 * Gets executed before test execution begins. At this point you can access to all global
	 * variables like `browser`. It is the perfect place to define custom commands.
	 * @param {Array.<Object>} capabilities list of capabilities details
	 * @param {Array.<String>} specs List of spec file paths that are to be run
	 */
	before: function (capabilities, specs) {
		var chai = require('chai');
		global.expect = chai.expect;
		chai.Should();
	}
}
