  // this function takes in the users responses and will generate the README files structure using template literals.
  // adds users input into the file as well.
  const shapes = require('./shapes');
  const triangle = require('./triangle');
  const square = require('./square');
  const circle = require('./circle');

  function generateSvgFile(data) {
    let shape;
    if (data.backgroundShape === "triangle") {
        shape = new triangle();
    } else if (data.backgroundShape === "square") {
        shape = new square();
    } else {
        shape = new circle();
    }
    return `

    `
  }
  
  module.exports = {
    generateSvgFile
  };
  