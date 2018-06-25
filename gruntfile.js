module.exports = function(grunt) {

	/* LOADING TESTING CONFIGURATIONS FILE
	============================================================================= */
	var test = grunt.file.readJSON('.testingrc');
	process.env.BROWSERSTACK_USER = test.browserstack.user;
	process.env.BROWSERSTACK_KEY = test.browserstack.key;
	process.env.BROWSERSTACK_BUILD = test.browserstack.build;

	/* CONFIGURATIONS
	============================================================================= */
	grunt.initConfig({
		karma: {
			unit: {
				configFile: './karma.conf.js',
				singleRun: true
			}
		},
		webdriver: {
			integration: {
				configFile: './wdio.conf.js'
			},
			remote: {
				configFile: './wdio.remote.conf.js'
			}
		},
	});

	/* LOADING TASKS
	============================================================================= */
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-webdriver');

	/* TASKS
	============================================================================= */
	grunt.registerTask('default', ['karma', 'webdriver']);
	grunt.registerTask('unit', ['karma:unit']);
	grunt.registerTask('integration', ['webdriver:integration']);
	grunt.registerTask('remote', ['webdriver:remote']);
};