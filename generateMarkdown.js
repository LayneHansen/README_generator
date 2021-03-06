// function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}

![License Badge](https://img.shields.io/badge/License-${data.license}-brightgreen)

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation)
* [Usage Information](#usage)
* [Contributors](#contributor)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

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
<br><br>
<br>

## Questions

For questions and comments, contact me at:

Github: [${data.username}](https://github.com/LayneHansen)

Email: ${data.email}
    
  `;
}
  
  module.exports = generateMarkdown;