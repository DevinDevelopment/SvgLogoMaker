const {shapes} = require('./shapes');

//setting the square class and inheriting color property from shape class
class square extends shapes{
    constructor(color) {
      super(color);
    }
    setColor(col){
      this.color = col;
      return this.color
    }
    //returning class render that sets the text to proper svg shape
    render(){
      return `<rect x="60" y="65" width="250" height="150" fill="${this.color}"/>`
    }
  }

  module.exports = {
    square
};