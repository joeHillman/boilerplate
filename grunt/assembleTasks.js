module.exports = function(grunt){
  grunt.config('assemble', {
    options: {
      layoutdir: 'src/templates/layout/*.{hbs}',
      partials: '[src/tempaltes/partials/*.{hbs}]'
    },
    site: {
      src: ['src/templates/pages/*.hbs'],
      dest: ['./dist']
    }
  }) // config
  grunt.loadNpmTasks('grunt-assemble');
  grunt.registerTask('default', 'assemble');
}