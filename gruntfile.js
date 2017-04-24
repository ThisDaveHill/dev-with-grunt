module.exports = function(grunt) {

  var path = require('path');

  // Load all the tasks from config/
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt')
  });

  // Load custom tasks
  grunt.loadTasks('tasks');

  grunt.registerTask('default', ['browserSync:main']);

};
