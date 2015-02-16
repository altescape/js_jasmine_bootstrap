"use strict";

describe("how to run a test", function() {
  it("should work...", function() {
    var add = (function(x, y) {
      return x + y;
    });
    expect(add(5, 3)).toBe(8);
  });
});

describe("properties of an object", function() {

  it("it should return a property", function() {
  
    var CAR = function () {
      var wheels = 4;

      return {
        number_of_wheels: wheels
      };
    };

    var c = new CAR();

    expect(c.number_of_wheels).toEqual(4);

  });
  
});
