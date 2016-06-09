module.exports = function(grunt){
  grunt.config('uglify', {
    options: {
      mangle: false;
      sourceMap: true,
      sourceMapName: '<%= dest.build.css %>/sourceMap.main.css'
    }
    style: {
      files: {
        '<%= dest.build.css %>/min.main.css': '<%= dest.build.css %>/expanded.main.css'
      }
    }
  });// config
  grunt.loadNpmTasks('grunt-contrib-uglify');
}
