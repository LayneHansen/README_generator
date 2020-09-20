// function to generate markdown for README
function generateMarkdown(data) {
    // console.log("generateMarkdown", data.title);
    return `
# ${data.title}
## ${data.description}
## ${data.installation}
## ${data.usage}
## ${data.contributor}
## ${data.tests}
## ${data.license}
    
  `;
  }
  
  module.exports = generateMarkdown;