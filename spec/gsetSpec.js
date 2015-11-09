var expect = require('chai').expect;
var GSet = require('../lib/gset');

describe('GSet', function(){
    it('should determine if element is contained', function(){
        var gset = GSet.of(1, 2);

        expect(gset.contains(1)).to.be.ok;
        expect(gset.contains(3)).to.be.not.ok;
    });
});
