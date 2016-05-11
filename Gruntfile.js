module.exports = function(grunt){
  grunt.initConfig({
    src: grunt.file.readJSON('grunt/data/src.json')
  });
  grunt.loadTasks('grunt');
}
