const {shapes} = require('./shapes');

class square extends shapes{
    constructor(color) {
      super(color);
    }
    setColor(col){
      this.color = col;
      return this.color
    }
    render(){
      return `<rect x="60" y="65" width="250" height="150" fill="${this.color}"/>`
    }
  }

  module.exports = {
    square
};