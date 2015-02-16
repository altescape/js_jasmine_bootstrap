describe "how to run a test", ->
  it "should work...", ->
    add = (x,y) ->
      x + y

    expect(add(5,3)).toBe(8)

describe "how to build a class", ->
  
  class Car
    wheels: 4
    engine: undefined

    constructor: (name) ->
      @name = name

    fit_engine: (engine)  =>
      @engine = engine
  
  class Engine
    power: 300
    sound_level: 9

    constructor: (name) ->
      @name = name

  it "car should return correct default properties...", ->
    c = new Car
    expect(c.wheels).toBe(4)

  it "should return correct name", ->
    c = new Car
    c.name = "Mobile"
    expect(c.name).toBe("Mobile")

  it "should have an engine and and return its name", ->
    # Car spec
    c = new Car
    c.name = "The Beast"
    
    # Engine spec
    e = new Engine("Roaring 38 Moose Squisher")
    e.power = 380
    e.sound_level = 10
    
    # Fit engine
    c.fit_engine(e)
   
    # Report on work done
    console.log(c)

    expect(c.engine.name).toBe("Roaring 38 Moose Squisher")

