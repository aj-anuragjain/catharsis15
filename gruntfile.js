//Gruntfile
module.exports = function(grunt) {

//Initializing the configuration object
  grunt.initConfig({

    // Task configuration
    concat: {
      options: {
        separator: ';',
      },
      js: {
        src: [
          'js/jquery.scrollLock.min.js',
          'js/jquery.scrollLock.simple.min.js',
          'js/jquery.min.js',
          'js/jquery.easing.1.3.min.js',
          'js/jquery.nicescroll.min.js',
          'js/jquery.sticky.min.js',
          'js/jquery.parallax.min.js',
          'js/jquery.bxslider.min.js',
          'js/jquery.timelinr-0.9.53.min.js',
          'js/jquery.appear.min.js',
          'js/jquery.isotope.min.js',
          'js/retina.min.js',
          'js/supersized.3.2.7.min.js',
          'js/supersized.shutter.min.js',
          'js/main.min.js',
          'js/jquery.superslides.min.js',
          'js/jquery.sudoslider.min.js',
          'js/service-js.min.js',
        ],
        dest: 'js/frontend.js',
      },
    },
    cssmin: {
      options: {
        shorethandcompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/output.css' : ['css/bootstrap.min.css', 'css/font-awesome.min.css', 'css/icons.css', 'css/jquery.bxslider.css', 'css/supersized.css', 'css/effect.css', 'css/style.css', 'css/styletry.css', 'css/responsive-body.css', 'css/responsive.css', 'css/metro-style.css', 'css/Met-Js.css'],
          'css/styleforeventlist.min.css': 'css/styleforeventlist.css',
        }
      }
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          //... output:input
          'js/jquery.scrollLock.min.js':'js/jquery.scrollLock.js',
          'js/jquery.scrollLock.simple.min.js':'js/jquery.scrollLock.simple.js',
          'js/jquery.easing.1.3.min.js':'js/jquery.easing.1.3.js',
          'js/jquery.sticky.min.js':'js/jquery.sticky.js',
          'js/jquery.parallax.min.js':'js/jquery.parallax.js',
          'js/jquery.timelinr-0.9.53.min.js':'js/jquery.timelinr-0.9.53.js',
          'js/jquery.appear.min.js':'js/jquery.appear.js',
          'js/main.min.js':'js/main.js',
          'js/service-js.min.js':'js/service-js.js',
        }
      },
    },
    phpunit: {
      //...
    },
    watch: {
      //...
    }
  });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-phpunit');

  // Task definition
  grunt.registerTask('default', ['watch']);

};
