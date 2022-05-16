// TODO: Include packages needed for this application
const inquirer = require('inquirer');
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
        }
        // questions
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(data => {
        //console.log(data);
        console.log(generateMarkdown(data));
    });
}

// Function call to initialize app
init();
