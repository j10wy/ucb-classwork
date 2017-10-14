var bands = {
	'punk': 'Anti-Flag',
	'rap': 'Wu-Tang',
	'rock': 'The Beatles',
	'merge': function(){
		return `${this.punk}, ${this.rap}, ${this.rock}`;
	}
}

module.exports = bands;