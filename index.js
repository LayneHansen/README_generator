const fs = require("fs");
const gm = require("./generateMarkdown");

// array of questions for user
var inquirer = require("inquirer");
console.log(inquirer);

inquirer
.prompt([
{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
},
{
    type: "input",
    message: "What is the description of your project?",
    name: "description"
},
{
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation"
},
{
    type: "input",
    message: "What is the usage information for your project?",
    name: "usage"
},
{
    type: "input",
    message: "Who contributed to your project?",
    name: "contributor"
},
{
    type: "input",
    message: "Are there any tests included in your project?",
    name: "tests"
},

{
    type: "list",
    message: "Which open source license would you like to attach to your README?",
    choices: 
        [
        "Apache License 2.0",
        "BSD 3-Clause 'New' or 'Revised' license",
        "BSD 2-Clause 'Simplified or 'FreeBSD' license",
        "GNU General Public License (GPL)",
        "GNU Library or 'Lesser' General Public License (LGPL)",
        "MIT license",
        "Mozilla Public License 2.0",
        "Common Development and Distribution License",
        "Eclipse Public License version 2.0",
    ]    

}


])

.then(function(response) {
    console.log(reponse);
    if (response) {
    const {title, description, installation, usage, contributor, tests}
    console.log(title, description, installation, usage, contributor, tests);
    }

})

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    const

}

// function call to initialize program
init();
