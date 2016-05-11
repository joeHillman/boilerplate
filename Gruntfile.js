module.exports = function(grunt){
  grunt.initConfig({
    src: grunt.file.readJSON('grunt/src.json')
  });
  grunt.loadTasks('grunt');
}
