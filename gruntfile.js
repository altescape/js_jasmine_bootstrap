module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ["app", "bower_components"]
        }
      }
    },
    coffee: {
      options: {
        sourceMap: true
      },
      compile: {
        files: {
          "app/dist/mySpec.js" : "app/src/mySpec.coffee"
        } 
      },
    },
    watch: {
      all: {
        files: "app/**/*.*",
        options: {
          reload: true,
          livereload: true
        }
      },
      js: {
        files: ["app/js/*.js"],
        tasks: []
      },
      coffee: {
        files: ["app/src/*.coffee"],
        tasks: ["coffee"]
      }
    },
    open: {
      all: {
        //path: "http://localhost:9000/index.html"
        path: "http://localhost:9000/index.coffee.html"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-express");
  grunt.loadNpmTasks("grunt-open");
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.registerTask("default", ["coffee", "express", "open", "watch"]);
};
