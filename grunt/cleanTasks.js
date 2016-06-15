module.exports = function(grunt){
  grunt.config('clean', {
    build: ['build/']
  }) //config
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.registerTask('cleanBuild', 'clean:build:css')
}
