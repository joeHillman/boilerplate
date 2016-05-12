module.exports = function(grunt){
  grunt.initConfig({
    src: grunt.file.readJSON('grunt/data/src.json'),
    dest: grunt.file.readJSON('grunt/data/dest.json')
  });
  grunt.loadTasks('grunt');
  grunt.registerTask('buildAll', ['assembleAll', 'compileSass']);
}
