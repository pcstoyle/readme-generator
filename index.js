// TODO: Include packages needed for this application ✅
// const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./Develop/utils/generateMarkdown')
//require the generate markdown folder to write rules to get the license ✅

const { writeFile } = require('fs').promises;

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
            type: 'checkbox',
            name: 'license',
            choices: ["MIT", "Apache", "ISC"],
            message: 'Please select your license.',
        }, 
        {
            type: 'input',
            name: 'contributers',
            message: 'Please list project contributers and their GitHub links.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please describe your project testing.',
        },
    ]);
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

## Tests

${tests}

## Questions`

// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeFile('BonusREADME.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to BonusREADME.md'))
    .catch((err) => console.error(err));
 }

// Function call to initialize app
init();
