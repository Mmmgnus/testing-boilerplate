import myObject from './o-my-object';

describe('My Object', function () {
	it('return a string', function () {
		expect(myObject('teststring!')).to.be.equal('teststring!');
	});

	it('return a string with !', function () {
		expect(myObject('teststring!')).to.be.equal('teststring!');
	})
});