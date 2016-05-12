module.exports = function(grunt){
  grunt.config('assemble', {
    options: {
      layoutdir: '<%= src.assemble.layout %>',
      partials: ['<%= src.assemble.partials %>/*.hbs']
    },
    tests: {
      options: {
        flatten: true
      },
      src: ['<%= src.assemble.tests %>/*.hbs'],
      dest: '<%= dest.assemble.tests %>/'
    },
    site: {
      options: {
        flatten: true
      },
      src: ['<%= src.assemble.pages %>/*.hbs'],
      dest: '<%= dest.assemble.pages %>/'
    }
  }) // config
  grunt.loadNpmTasks('grunt-assemble');
  grunt.registerTask('assembleAll', 'assemble');
}
