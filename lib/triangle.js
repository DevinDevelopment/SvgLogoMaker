const {shapes} = require('./shapes');

//setting the triangle class and inheriting color property from shape class
class triangle extends shapes{
    constructor(color) {
      super(color);
    }
    setColor(col){
      this.color = col;
      return this.color
    }
    //returning class render that sets the text to proper svg shape
    render(){
      return `<polygon transform="translate(25,25)" points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
  }

  module.exports = {
    triangle
};