//importing square class
const {square} = require('../lib/square');

//test for square class
describe('square', () => {
    describe('getColor', () => {
        it('it should set the color of the shape', () => {
            const shape = new square();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<rect x="60" y="65" width="250" height="150" fill="blue"/>');
        });
    });
});
