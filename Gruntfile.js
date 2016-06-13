module.exports = function (grunt) {

  grunt.initConfig({
    browserify: {
      specs: {
        src: 'js/specs/*.spec.js',
        dest: 'js/specs/specs.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify']);
};