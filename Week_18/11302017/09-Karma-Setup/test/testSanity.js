var expect = require("chai").expect;
var multiply = require("./multiply");
var Blog = require("./blogapp");
var blog = new Blog(9, 3);

// UNIVERSE TEST

// describe("Universe", function () {
//   it("should be self-consistent", function () {
//     expect(2).to.equal(2);
//   });
// });

// // MULTIPLY TESTS

// describe("Multiply", function () {
//   it("should equal 2", function () {
//     var val = multiply(2, 2)
//     expect(val).to.equal(4);
//   });
// });

// describe("Multiply a letter", function () {
//   it("should equal 2", function () {
//     var val = multiply(2, "f")
//     expect(val).to.equal(4);
//   });
// });

// // BLOG TESTS

describe("Number of posts", function () {
  it("should have 9 posts", function () {
    expect(blog.getNumberOfPosts()).to.equal(9);
  });
});

describe("Number of posts per page", function () {
  it("should have 3 posts per page", function () {
    expect(blog.getPostsPerPage()).to.equal(3);
  });
});

describe("Page 2", function () {
  it("should have 3 posts", function (done) {
    try {
      expect(blog.getNumberOfPostsOnPage(2)).to.equal(3);
    } catch (e) {
      done();
    }
    
  });
});