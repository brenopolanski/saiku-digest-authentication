module.exports = function(grunt) {
	grunt.initConfig({

		// Lint definitions
		jshint: {
			files: ['Digest/plugin.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});

	// This plugin provide necessary task
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// By default lint
	grunt.registerTask('default', ['jshint']);
};