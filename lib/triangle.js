const {shapes} = require('./shapes');

class triangle extends shapes{
    constructor(color) {
      super(color);
    }

    render(){
      return `
        <polygon transform="translate(25,25)" points="150, 18 244, 182 56, 182" fill="${this.color}">
        </polygon>
    `
    }
  }

  module.exports = {
    triangle
};