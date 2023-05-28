//creating class text that will take in 3 properties and will tie together both the text class and shape class to be sent to one file
class text{
    constructor(shape, txt, txtColor) {
        this.txtColor = txtColor;
        this.shape = shape;
        this.txt = txt;
    }

    //returns a complete render class that takes in the render from the proper shape class to be tied together with our text classes render
    render(){
      return `
      <svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        ${this.shape.render()}
        <text x="150" y="150" fill="${this.txtColor}" font-size="2em">${this.txt}</text>
      </svg>
    `
    }
  }

  module.exports = {
    text
};