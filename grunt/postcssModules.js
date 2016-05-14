module.exports = function(grunt){
  grunt.config('postcss', {
    options: {
      syntax: require('postcss-scss'),
      writeDest: false,
      processors: [
        require('stylelint'),
        require('postcss-reporter')({
          plugins: 'stylelint',
          clearMessages: true
        })
      ]
    },
    src: [
      '<%= watchAndLint.allStyles %>',
      '<%= watchAndLint.butExcludeStyles %>'
    ]
  })// config
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('lintStyles', 'postcss');
}
