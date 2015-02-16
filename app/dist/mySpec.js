(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  describe("how to run a test", function() {
    return it("should work...", function() {
      var add;
      add = function(x, y) {
        return x + y;
      };
      return expect(add(5, 3)).toBe(8);
    });
  });

  describe("how to build a class", function() {
    var Car, Engine;
    Car = (function() {
      Car.prototype.wheels = 4;

      Car.prototype.engine = void 0;

      function Car(name) {
        this.fit_engine = __bind(this.fit_engine, this);
        this.name = name;
      }

      Car.prototype.fit_engine = function(engine) {
        return this.engine = engine;
      };

      return Car;

    })();
    Engine = (function() {
      Engine.prototype.power = 300;

      Engine.prototype.sound_level = 9;

      function Engine(name) {
        this.name = name;
      }

      return Engine;

    })();
    it("car should return correct default properties...", function() {
      var c;
      c = new Car;
      return expect(c.wheels).toBe(4);
    });
    it("should return correct name", function() {
      var c;
      c = new Car;
      c.name = "Mobile";
      return expect(c.name).toBe("Mobile");
    });
    return it("should have an engine and and return its name", function() {
      var c, e;
      c = new Car;
      c.name = "The Beast";
      e = new Engine("Roaring 38 Moose Squisher");
      e.power = 380;
      e.sound_level = 10;
      c.fit_engine(e);
      console.log(c);
      return expect(c.engine.name).toBe("Roaring 38 Moose Squisher");
    });
  });

}).call(this);

//# sourceMappingURL=mySpec.js.map
