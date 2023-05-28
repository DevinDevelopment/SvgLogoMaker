const {circle} = require('../lib/circle');

describe('circle', () => {
    describe('getColor', () => {
        it('it should set the color of the shape', () => {
            const shape = new circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<circle cx="175" cy="145" r="80" stroke="black" stroke-width="3" fill="blue"/>');
        });
    });
});
