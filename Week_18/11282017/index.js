const Nightmare = require('nightmare');
const nightmare = Nightmare({
	show: true
});

nightmare
	.goto('https://www.google.com')
	.type('#lst-ib', 'github nightmare')
	.click('input[value="Google Search"]')
	.wait('#res')
	.type('input#lst-ib.gsfi', 'github nightmare')
	.click("#_fZl")
	.wait('input#res')
	.end()
	.then(console.log)
	.catch((error) => {
		console.error('Search failed:', error);
	});