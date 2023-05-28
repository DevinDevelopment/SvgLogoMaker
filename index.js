// imports. requrire is needed to use functions defined in generateMarkdown file
// inquirer is a node.js library and is need to ask questions in command line and store answers
// fs needed to gain access to file structor functions 
const inquirer = require('inquirer');
const fs = require('fs');
const {circle} = require('./lib/circle');
const {triangle} = require('./lib/triangle');
const {square} = require('./lib/square');
const {text} = require('./lib/text');



// this is used as a question bank
const questions = [
  'What would you like your logo text to be? (3 characters)',
  'What would you like your text color to be?',
  'What shape would you like your logo background to be?',
  'what would you like your background color to be?',
];

// this is a function created to write to a file. 
// we will use this function in the .then section of the inquirer function.
function writeToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Success'))
}

// this function is the actuall inquirer which will ask questions in the command line 
// then will store answers in response
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'text',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'textColor',
    },
    {
      type: "list",
      message: questions[2],
      choices: ["triangle", "square", "circle"],
      name: "backgroundShape",
    },
    {
      type: 'input',
      message: questions[3],
      name: 'backgroundColor',
    },
  ])
  // take the respone(users answers) and call the writeToFile function we created
  // the data perameter will take the users response and push to our generateMarkdown function from the generateMarkdown file
  // generateMarkdown will be a function we are calling from another file which is why import require is needed
  .then((response) => {
      if(response.backgroundShape === "triangle"){
        let tri = new triangle(response.backgroundColor);
        let txt = new text(tri, response.text, response.textColor);
        writeToFile('logo.svg', txt.render());
      }
      if(response.backgroundShape === "circle"){
        let cir = new circle(response.backgroundColor);
        let txt = new text(cir, response.text, response.textColor);
        writeToFile('logo.svg', txt.render());
      }
      if(response.backgroundShape === "square"){
        let sqr = new square(response.backgroundColor);
        let txt = new text(sqr, response.text, response.textColor);
        writeToFile('logo.svg', txt.render());
      }
    });
}

// Function call to initialize app
init();
