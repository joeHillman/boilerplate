module.exports = function(grunt){
  grunt.config('watch', {
    assemble: {
      files: ['src/**/**/*.hbs'],
      tasks: ['assembleAll']
    },
    sass: {
      files: ['<%= watchAndLint.allStyles %>'],
      tasks: ['compileSass']
    }
  }) // config
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('watchAll', 'watch');
}
