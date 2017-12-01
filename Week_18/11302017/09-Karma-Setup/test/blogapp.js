function Blog(numberOfPosts, postsPerPage) {
	this.numberOfPosts = numberOfPosts;
	this.postsPerPage = postsPerPage;

	this.getNumberOfPosts = function () {
		return this.numberOfPosts;
	}
	this.getPostsPerPage = function () {
		return this.postsPerPage;
	}
	this.getNumberOfPostsOnPage = function (pageNumber) {
		return 3;
	}
}

module.exports = Blog;