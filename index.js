const fs = require('fs');
const inquirer = require('inquirer');
const readmeFrame = require('./readmeFrame.js');

const userPrompt = inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the README title?'
    }
])
