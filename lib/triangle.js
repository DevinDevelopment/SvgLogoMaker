const {shapes} = require('./shapes');

class triangle extends shapes{
    constructor(color) {
      super(color);
    }
    setColor(col){
      this.color = col;
      return this.color
    }
    render(){
      return `<polygon transform="translate(25,25)" points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
  }

  module.exports = {
    triangle
};