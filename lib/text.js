class text{
    constructor(shape, txt, txtColor) {
        this.txtColor = txtColor;
        this.shape = shape;
        this.txt = txt;
    }

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