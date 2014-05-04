module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    lsc: {
      main: {
        // Target-specific file lists and/or options go here.
        files: {
          'app/js/app.js': ['app/js/app.ls'],
          'app/js/controllers.js': ['app/js/controllers.ls'],
          'app/js/directives.js': ['app/js/directives.ls'],
          'app/js/filters.js': ['app/js/filters.ls'],
          'app/js/services.js': ['app/js/services.ls'],
        }
      },
    }
  });

// Livescript compiler
grunt.loadNpmTasks('grunt-lsc');

// Default task(s).
grunt.registerTask('default', ['lsc']);

};