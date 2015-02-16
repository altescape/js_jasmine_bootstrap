describe "how to run a test", ->
  it "should work...", ->
    add = (x,y) ->
      x + y

    expect(add(5,3)).toBe(8)

describe "how to build a class", ->
  it "car should have 4 wheels...", ->

    class Car
      wheels: 4
      engine: undefined

      constructor: (name) ->
        @name = name

      fit_engine: (engine)  =>
        @engine = engine

    c = new Car

    expect(c.wheels).toBe(4)

