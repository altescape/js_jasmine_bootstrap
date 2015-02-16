(function() {
  var Car,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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

  describe("how to run a test", function() {
    return it("should work...", function() {
      var add;
      add = function(x, y) {
        return x + y;
      };
      return expect(add(5, 3)).toBe(8);
    });
  });

}).call(this);

//# sourceMappingURL=mySpec.js.map
