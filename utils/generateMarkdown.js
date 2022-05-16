// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if(!license){
    return;
  }

  return `![${license}](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return;
  }

  //license = license.replace(/-/g, "--")

  return `
  ## License

  This project is licensed under: ${renderLicenseBadge(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseClean = data.license.replace(/-/g, "--")
  return `

  ${renderLicenseBadge(licenseClean)}
  
  # ${data.title}
  ## Description

  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(licenseClean)}

  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}

  ## Questions
  
  ${data.questions}
  
`;
}

module.exports = generateMarkdown;
