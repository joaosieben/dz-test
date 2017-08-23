module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'css/main.css': 'css/sass/main.scss',
        },
        options:{
          style: 'expanded'
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/build/main.min.js': ['js/*.js']
        }
      }
    },

    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1,
        processImport: false
      },
      target: {
        files: {
          'build/main.min.css': ['css/main.css']
        }
      }
    },

    watch: {
      style: {
        files: ['css/sass/**/**/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
          spawn: false,
        },
      },
      scripts: {
        files: ['js/*.js', '!js/build/*.min.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
};
