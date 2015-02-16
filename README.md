# JS Jasmine Bootstrap
A Bootstrap App for practicing and testing your JavaScript - Clean to start, only dependency is Jasmine.

It uses Grunt, (grunt-contrib-watch, grunt-express (for localserver), grunt-contrib-coffee and grunt-open).

Can also test CoffeeScript.

#### To switch between CoffeeScript and JavaScript

Uncomment/comment out the lines below:

```

open: {
      all: {
        //path: "http://localhost:9000/index.html"
        path: "http://localhost:9000/index.coffee.html"
      }
    }

```

and edit relevant JS/Coffee file, then run grunt.
