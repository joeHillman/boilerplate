module.exports = function(grunt){
  grunt.config('clean', {
    build: ['<%= dest.build.directory %>/']
  }) //config
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('cleanBuild', 'clean:build')
}
