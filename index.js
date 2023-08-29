// TODO: Include packages needed for this application ✅
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./Develop/utils/generateMarkdown')
//require the generate markdown folder to write rules to get the license ✅



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a project description.',
        },
        // {
        //     type: 'checkbox',
        //     name: 'table of contents',
        //     message: 'Which sections would youl like to inlude?',
        //     choices: 'Instillation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions',
        // },
        {
            type: 'input',
            name: 'instillation',
            message: 'Please describe your project instillation.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe your projects usage.',
        }, 
        {
            type: 'input',
            name: 'license',
            message: 'Please select your license.',
        }, 
        {
            type: 'input',
            name: 'contributers',
            message: 'Please list project contributers.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please describe your project testing.',
        },
        
        // sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
    ];
    );
};

// TODO: Create a function to write README file
const writeToFile = ({ title, description, instillation, usage, license, contributers, tests}) => 
`# Title

${title}

## Description

${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${instillation}

## Usage

${usage}

## Credits

${contributers}

## License

${license}

##Tests

${tests}

##Questions`


// --> this came from the read/write file exercise in the node week
// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
