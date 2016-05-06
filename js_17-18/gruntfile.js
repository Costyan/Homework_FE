module.exports = function(grunt) {
  grunt.initConfig({
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true
        },
        files: {
          'production/index.html': 'development/index.html',
        }
      },
    },
    concat: {
      concatJs: {
        files: {
          'production/js/script.main.min.js' : ['development/js/*.js'],
        },
      },
      concatCss: {
        files: {
          'production/css/main.min.css' : ['development/css/*.css'],
        },
      },
    },
    uglify: {
      dist: {
        files: {
          'production/js/script.main.min.js' : ['production/js/script.main.min.js'],
        },
      }
    },
    cssmin: {
      target: {
        files: {
          'production/css/main.min.css' : ['production/css/main.min.css'],
        },
      },
    },
    copy: {
      main: {
        expand: true,
        cwd: 'development/img',
        src: '**',
        dest: 'production/img/',
      },
    },
    watch: {
      html: {
        files: ['development/index.html'],
        tasks: ['htmlmin'],
        options: {
          spawn: false,
        },
      },
      scripts: {
        files: ['development/js/*.js'],
        tasks: ['concat:concatJs', 'uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['development/css/*.css'],
        tasks: ['concat:concatCss', 'cssmin'],
        options: {
            spawn: false,
        },
      },
      img: {
        files: ['development/img/*'],
        tasks: ['copy'],
        options: {
            spawn: false,
        },
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['htmlmin', 'concat', 'uglify', 'cssmin', 'copy', 'watch']);

};
