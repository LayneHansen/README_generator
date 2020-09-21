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
* [Questions](#)

## Description
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contributors
${data.contributor}

## Tests 
${data.tests}

## License
${data.license}

<br>

## Questions and Comments

For questions and comments, contact me at:

Github: [${data.username}](https://github.com/LayneHansen)

Email: [${data.email}](https://github.com/LayneHansen)
    
  `;
}
  
  module.exports = generateMarkdown;