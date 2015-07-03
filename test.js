var utils = require('./utils'),
    expect =  require('expect.js');

describe('Utils', function() {

	describe('#sort()', function() {
		it('should sort given array of numbers with ascending ordering', function() {
			expect(utils.sort([2, 1, 3, 0])).to.equal([0, 1, 2, 3]);
		});

		//TODO: don't forget about custom comparator function
	});

	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('just do it!')).to.equal('Just do it!');
		});
	});
	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('JUST DO IT')).to.equal('Just do it');
		});
	});
	describe('#capitalize()', function() {
		it('should make first letter of given string upper case', function() {
			expect(utils.capitalize('jUST DO IT')).to.equal('Just do it');
		});
	});

	describe('#camelize()', function() {
		it('should make all first letter to upper case', function() {
			expect(utils.camelize('just do it')).to.equal('Just Do It');
		})
	});

	//describe('#camelize()', function() {
	//	it('should make all first letter to upper case', function() {
	//		expect(utils.camelize(['just', 'do', 'it'])).to.equal('Just Do It');
	//	})
	//});

	describe('#camelize()', function() {
		it('should make all first letter to upper case', function() {
			expect(utils.camelize('JUST DO IT')).to.equal('Just Do It');
		})
	});

	describe('#trim()', function() {
		it('should make one word', function() {
			expect(utils.trim(' just  do  it ')).to.equal('justdoit');
		})
	});
	describe('#reverse()', function() {
		it ('should show word reverse', function() {
			expect(utils.reverse('just do it')).to.equal('ti od tsuj');
		})
	});


	//TODO: Add your specs for other methods

});