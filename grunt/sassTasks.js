module.exports = function(grunt){
  grunt.config('sass', {
    options: {
      sourceMap: true
    }, //options
    dist: {
      files: {
        'dist/css/main.css': 'src/scss/main.scss',
      }
    }
  }) //config
  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('compileSass', 'sass');
}
