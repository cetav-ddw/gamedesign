'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Watch for changes and trigger compass
        watch: {
            sass: {
                files: ['sass/**/*.{scss,sass}','sass/partials/**/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: []
            }
        },

        // Compass and scss
        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'nested'
            },
            dist: {
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            },
            prod: {
                options: {
                  outputStyle: 'compressed'
                },
                files: {
                    'css/style.css': 'sass/style.scss'
                }
            }
        },

        uglify: {
            all: {
                options: {
                    sourceMap: true
                },
                files: {
                    'js/main.min.js': ['js/main.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['sass:dist', 'watch']);
    grunt.registerTask('prod', ['sass:prod', 'uglify']);
};