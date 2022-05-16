// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        // title
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?(Required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        // description
        {
            type: 'input',
            name: 'description',
            message: 'Describe the project?(Required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a description!');
                    return false;
                }
            }
        },
        // table of contents
        // installation
        {
            type: 'input',
            name: 'installation',
            message: 'How is the project installed?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions!');
                    return false;
                }
            }
        },
        // usage
        {
            type: 'input',
            name: 'usage',
            message: 'How is the project used?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        // license
        {
            type: 'list',
            name: 'license',
            message: 'What license is this project?',
            choices: ['AGPL-3.0', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'BSL-1.0', 'EPL-2.0', 'GPL-2.0', 'GPL-3.0', 'LGPL-2.1', 'MIT', 'MPL-2.0', 'Unlicense']
        },
        // contributing
        {
            type: 'input',
            name: 'contributing',
            message: 'How do you contribute to the project?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter contributions instructions!');
                    return false;
                }
            }
        },
        // tests
        {
            type: 'input',
            name: 'tests',
            message: 'How do you test the project?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter testing instructions!');
                    return false;
                }
            }
        },
        // questions
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your github!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}.md`, data, err => {
        if (err) throw err;
    }
    );
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        .then(data => {
            //console.log(data);
            return generateMarkdown(data);
        })
        .then(markdown => {
            writeToFile('README', markdown);
        });
}

// Function call to initialize app
init();
