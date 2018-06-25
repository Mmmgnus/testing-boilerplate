exports.config = {
	user: process.env.BROWSERSTACK_USER || '',
	key: process.env.BROWSERSTACK_KEY || '',
  
	updateJob: false,
	specs: [
		'project/**/*.int.js'
	],
	exclude: [],

	capabilities: [
		{
			browser: 'edge',
			name: 'single_test',
			build: process.env.BROWSERSTACK_BUILD
		},
		{
			browser: 'safari',
			name: 'single_test',
			build: process.env.BROWSERSTACK_BUILD
		},
		{
			browser: 'iphone',
			name: 'single_test',
			build: process.env.BROWSERSTACK_BUILD
		}

	],
  
	logLevel: 'silent',
	coloredLogs: true,
	screenshotPath: './errorShots/',
	baseUrl: '',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	host: 'hub.browserstack.com',
	reporters: ['spec'],
	framework: 'mocha',
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
  };