module.exports = function(grunt){
  grunt.config('availabletasks', {
    tasks: {
      options: {
        descriptions: {
          'compileSass': 'Compiles SASS from main.scss',
          'watchAll': 'Watches assemble assets and all SCSS files.',
          'ls': 'Lists availble tasks.',
          'dir': 'Lists available tasks.',
          'availabletasks': 'Lists available tasks.',
          'lintStyles': 'Lints SCSS styles.',
          'devServer': 'Serves this project from the root directory on port 9001.',
          'concatAll': 'Concatenates multiple sets of files.',
          'assembleAll': 'Assembles static assets for tests, sites, and styleguide assets.',
          'assembleStyleguideAssets': 'Assembles any markup necessary for the documentCSS demos.',
          'documentjs': 'Run as is from the root WITHOUT Grunt, to assemble the styleguide.',
          'cleanBuild': 'Deletes build directory.',
          'minifyStyles': 'Minifies CSS files. Saves to build/css.'
        }
      }
    }
  }); // config
  grunt.loadNpmTasks('grunt-available-tasks');
  // 'availabletasks' is pre-registered as a task with this module and will list top level tasks
  grunt.registerTask('ls', 'availabletasks');
  grunt.registerTask('dir', ['availabletasks', 'lll']);
  grunt.registerTask('documentjs');

}
