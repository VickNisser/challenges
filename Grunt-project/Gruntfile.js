'use strict';
module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      sass:{
        dist:{
          files:{
            'main.css':'style.scss'
          }
        }
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      } 
});
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);

}
