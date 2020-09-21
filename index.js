const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user

var inquirer = require("inquirer");

// console.log(inquirer);

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
            name: "license",
            message: "Which open source license would you like to attach to your README?",
            choices: 
                [
                "Apache_License_2.0",
                "BSD_3-Clause_'New'_or_'Revised' license",
                "BSD_2-Clause_'Simplified_or_'FreeBSD'_license",
                "GNU_General_Public_License_(GPL)",
                "GNU_Library_or_'Lesser'_General_Public_License_(LGPL)",
                "MIT_license",
                "Mozilla_Public_License_2.0",
                "Common_Development_and_Distribution_License",
                "Eclipse_Public_License_version_2.0",
            ]    

        },

       { 
            type: "input",
            message: "Do you have further questions?",
            name: "questions"
        },
       { 
            type: "input",
            message: "What is your Github username?",
            name: "username"
        },
       { 
            type: "input",
            message: "What is your email?",
            name: "email"
        }


    ])

    .then(function(response) {
        // generateMarkdown(response);
        var input = generateMarkdown(response);
        console.log(input)
        writeToFile("READMEgen.md", input);
    })


// function to write README file

function writeToFile(fileName, data) {
    // console.log("writeToFile");

    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
      
    });
}



// // // function to initialize program
// function init() {
//     prompt(inquirer).then(input => {
    
//     const response = generateMarkdown()
//     writeToFile("READMEgen.md", response);
// }
// )};

// // // function call to initialize program
// init();
