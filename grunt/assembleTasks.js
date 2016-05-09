module.exports = function(grunt){
  grunt.config('assemble', {
    options: {
      flatten: 'true',
      layoutdir: 'src/templates/layout/',
      partials: ['src/tempaltes/partials/*.{hbs}']
    },
    site: {
      src: ['src/templates/pages/*.hbs'],
      dest: './dist/'
    }
  }) // config
  grunt.loadNpmTasks('grunt-assemble');
  grunt.registerTask('default', 'assemble');
}
