module.exports = function(grunt){
  grunt.initConfig({
    src: grunt.file.readJSON('grunt/filePaths/src.json'),
    dest: grunt.file.readJSON('grunt/filePaths/dest.json'),
    watchAndLint: grunt.file.readJSON('grunt/filePaths/watchAndLint.json')
  });
  grunt.loadTasks('grunt');
  grunt.registerTask('buildAll', ['assembleAll', 'compileSass']);
  grunt.registerTask('develop', ['devServer', 'watchAll'])
}
