var expect = require("chai").expect;
var multiply = require("./multiply");

describe("Universe", function() {
  it("should be self-consistent", function() {
    expect(2).to.equal(2);
  });
});

describe("Multiply", function () {
  it("should equal 2", function () {
    var val = multiply(2,2)
    expect(val).to.equal(4);
  });
});

describe("Multiply a letter", function () {
  it("should equal 2", function () {
    var val = multiply(2, "f")
    expect(val).to.equal(4);
  });
});
