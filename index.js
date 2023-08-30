const inquirer = require('inquirer');
const renderLicenseSection = require('./Utilities/generateMarkdown')

const { writeFile } = require('fs').promises;

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
            type: 'list',
            name: 'license',
            choices: ["MIT", "Apache", "ISC", "None",],
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

${renderLicenseSection(license)}

## Tests

${tests}

## Questions`

const init = () => {
    questions()
    .then((answers) => writeFile('BonusREADME.md', writeToFile(answers)))
    .then(() => console.log('Successfully wrote to BonusREADME.md'))
    .catch((err) => console.error(err));
 }

init();
