module.exports = function(grunt){
  grunt.config('assemble', {
    options: {
      layoutdir: 'src/templates/layout/',
      partials: ['src/templates/partials/*.hbs']
    },
    tests: {
      options: {
        flatten: true
      },
      src: ['src/templates/tests/*.hbs'],
      dest: './dist/tests/'
    },
    site: {
      options: {
        flatten: true
      },
      src: ['src/templates/pages/*.hbs'],
      dest: './dist/'
    }
  }) // config
  grunt.loadNpmTasks('grunt-assemble');
  grunt.registerTask('assembleAll', 'assemble');
}
