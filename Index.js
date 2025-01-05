import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe",
    name: "description",
  },
  {
    type: "input",
    message: "Here are the Installation Instructions",
    name: "instructions",

  },
  {
    type: "input",
    message: "How to use",
    name: "information",
  },
  {
    type: "input",
    message: "How to contribute",
    name: "contributions",
  },
  {
    type: "input",
    message: "Test Instructions",
    name: "test",
  },
{
  type: "list",
  name:"license",
  message: "chose a license for your application",
  choices: ["MIT","ISC","Mozilla", "none"]
},
{
  type: "input",
  message: "What is your Github username?",
  name: "github",
},
{
  type: "input",
  message: "What is your email address?",
  name: "email",
},
];



// TODO: Create a function to write README file
const writeToFile = (README, content, err) => {
  if (err) {
    console.error('Error writing README file:', err);
  } else {
    fs.writeFileSync(README, content);
    console.log(README + " file has been generated successfully");
  }
};

// console.log(data);

//const writeToFile = fs.writeFile

// TODO: Create a function to initialize app
function init() {
 
  inquirer
  .prompt(questions)

  .then((answers) => {
    // Use user feedback for... whatever!!
    const README = generateMarkdown (answers)
    writeToFile("README.md", README);
  })


}

// Function call to initialize app
init();

