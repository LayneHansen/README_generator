// function to generate markdown for README
function generateMarkdown(data) {

    return `# ${data.title}

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation)
* [Usage Information](#usage)
* [Contributors](#contributor)
* [Tests](#tests)
* [License](#license)

## ${data.description}
## ${data.installation}
## ${data.usage}
## ${data.contributor}
## ${data.tests}
## ${data.license}

## Questions and Comments

For questions and comments, contact me at:

Github: [${data.username}](https://github.com/LayneHansen)

Email: [${data.email}](https://github.com/LayneHansen)
    
  `;
}
  
  module.exports = generateMarkdown;