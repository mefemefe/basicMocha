// this.timeout(); can be used at:
// suite level
// test level
// hook level

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

    this.timeout(500); // suite level

    it('Addition of two numbers', function(done){

        var a = 10;
        var b = 10;

        setTimeout(done,3000); // this will make it fail because of suite level timeout

        var c = a + b;

        assert.equal(c, 20);

    });

    it('Substraction of two numbers', function(done){

        this.timeout(100); // test level

        setTimeout(done,400); // this will make it fail because of test level timeout

        var a = 10;
        var b = 10;

        var c = a - b;

        assert.equal(c, 0);

    });

    it('Multiplication of two numbers', function(){

        var a = 10;
        var b = 10;

        var c = a * b;

        assert.equal(c, 100);

    });

    it('Division of two numbers', function(){

        var a = 10;
        var b = 10;

        var c = a / b;

        assert.equal(c, 1);

    });

});