var expect = require("chai").expect;

function titleize(name) {
	return name.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}
describe('titleize', function () {
	it('should title-case incoming names', function () {
		expect(titleize('mr jones')).to.equal('Mr Jones');
	});
	it('should title-case incoming names', function () {
		expect(titleize('mr lowy')).to.equal('Mr Lowy');
	});
});