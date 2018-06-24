module.exports = function(grunt) {

	/* CONFIGURATIONS
	============================================================================= */
	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},
		webdriver: {
			integration: {
				configFile: './wdio.conf.js'
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