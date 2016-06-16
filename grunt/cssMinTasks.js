module.exports = function(grunt){
  grunt.config('cssmin', {
    options: {
      sourceMap: true
    },
    target: {
      files: [{
        src: ['<%= src.build.css %>/main.expanded.css'],
        dest: '<%= dest.build.css %>/main.min.css'
      }]
    }
  })// config
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('minifyStyles', 'cssmin');
}
