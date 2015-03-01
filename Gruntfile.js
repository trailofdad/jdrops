/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    
    sass: {                              // Task 
      dist: {                            // Target 
        options: {                       // Target options 
          style: 'expanded'     
          
          },
        
        files: {                         // Dictionary of files 
          'css/jdrops.css': 'scss/jdrops.scss'    // 'destination': 'source'           
        }
      }
    },
    
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {}
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      sass: { files: '**/*.scss',
			 tasks: ['sass'] },
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  // Plugins added for jdrop
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);

};
