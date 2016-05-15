module.exports = function(grunt){
  grunt.config('connect', {
    devServer: {
      options: {
        port: 9001,
        base: './',
        livereload: 35729,
        open: {
          open: true,
          target: 'http://127.0.0.1:9001'
        }
      }
    }
  }) // config
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('devServer', 'connect');
}
