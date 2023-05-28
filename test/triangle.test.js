const {triangle} = require('../lib/triangle');

describe('triangle', () => {
    describe('getColor', () => {
        it('it should set the color of the shape', () => {
            const shape = new triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon transform="translate(25,25)" points="150, 18 244, 182 56, 182" fill="blue"/>');
        });
    });
});
