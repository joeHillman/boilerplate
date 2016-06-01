module.exports = function(grunt){
  grunt.config('concat', {
    options: {
      separator: '// End of file \n\n'
    },
    dist: {
      src: ['src/js/main.js', 'src/js/plugins.js'],
      dest: 'dist/js/scripts-concat.js'
    }

  }) // config
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('concatAll', 'concat');
}
