const {shapes} = require('./shapes');

class circle extends shapes{
    constructor(color) {
      super(color);
      this;
    }

    render(){
      return ` 
        <circle cx="175" cy="145" r="80" stroke="black" stroke-width="3" fill="${this.color}">
        </circle>
    `
    }
  }

  module.exports = {
    circle
};