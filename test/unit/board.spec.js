'use strict';

describe('board test', function() {
    beforeEach(function() {
        this.addMatchers({
            toBeInstanceOf: function(expectedInstance) {
                var actual = this.actual;
                var notText = this.isNot ? " not" : "";
                this.message = function() {
                    return "Expected " + actual.constructor.name + notText + " is instance of " + expectedInstance.name;
                };
                return actual instanceof expectedInstance; 


            }
        });
    });

    it('there should be Board constructor', function() {
        expect(Board).toBeDefined();
        expect(Board).toBeInstanceOf(Function);
        var board = new Board();
        console.log(board);
    });
});
