const {shapes} = require('./shapes');
//setting the circle class and inheriting color property from shape class
class circle extends shapes{
    constructor(color) {
      super(color);
    }
    setColor(col){
      this.color = col;
      return this.color
    }
    //returning class render that sets the text to proper svg shape
    render(){
      return `<circle cx="175" cy="145" r="80" stroke="black" stroke-width="3" fill="${this.color}"/>`
    }
  }

  module.exports = {
    circle
};