module.exports = function(grunt){
  grunt.initConfig({
    src: grunt.file.readJSON('grunt/data/src.json'),
    dest: grunt.file.readJSON('grunt/data/dest.json'),
    watchAndLint: grunt.file.readJSON('grunt/data/watchAndLint.json')
  });
  grunt.loadTasks('grunt');
  grunt.registerTask('buildAll', ['assembleAll', 'compileSass']);
}
