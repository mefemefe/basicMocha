// .only() exclusive
// .skip() inclusive
// Test without Callback function are Pending Tests

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){

    it.skip('Addition of two numbers', function(){

        var a = 10;
        var b = 10;

        var c = a + b;

        assert.equal(c, 20);

    });

    it('Substraction of two numbers', function(){

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

    it('This is a pending test');

});