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


])

.then(function(response) {
 console.log(reponse);
 if (response) {
 const {title, description, installation, usage, contributor, tests}
 console.log(title, description, installation, usage, contributor, tests);
 }

})

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
