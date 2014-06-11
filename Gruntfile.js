/* globals module */

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		// https://github.com/sindresorhus/grunt-sass
		sass: {
			all: {
				options : {
					'outputStyle' : 'compressed',
					'imagePath' : 'images'
				},
				files : {
					'dist/main.css' : 'app/sass/main.sass'
				}
			}
		},

		// https://github.com/gruntjs/grunt-contrib-imagemin
		imagemin: {
			all: {                         // Another target
				files: [
					{
						expand: true,                  // Enable dynamic expansion
						cwd   : 'app/images/',                   // Src matches are relative to this path
						src   : ['**/*.{png,jpg,gif}'],   // Actual patterns to match
						dest  : 'dist/images/'                  // Destination path prefix
					}
				]
			}
		},

		// https://github.com/gruntjs/grunt-contrib-clean
		clean: {
			dev: ['dist/'],
			dist: ['dist/', 'tmp/']
		},

		// https://github.com/jmreidy/grunt-browserify
		browserify: {
			all: {
				options: {

				},
				files: {
					'dist/client.js': 'app/application.js'
				}
			}
		}

	});

	// Done
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-browserify');

	// To-do
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean', 'sass', 'imagemin']);
	grunt.registerTask('build', ['clean:dev', 'sass', 'imagemin', 'browserify']);
	grunt.registerTask('ship', ['clean', 'sass', 'imagemin', 'browserify']);

};