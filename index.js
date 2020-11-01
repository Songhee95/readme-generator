const fs = require('fs');
const inquirer = require('inquirer');
const readmeFrame = require('./readmeFrame.js');
const util = require('util');

const userPrompt = inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the README title?'
    },
    {
        type:'input',
        name: 'description',
        message: "Add your description: ",
        choices: ['Installation', 'URLs', 'Usage', 'Credits', 'License']
    },
    {
        type: 'input',
        name: 'url',
        message:'Enter your github ID'
    },
]);

const writeFileAsync = util.promisify(fs.writeFile);

userPrompt
.then(response => readmeFrame(response))
.then(result => writeFileAsync('README.md', result))
.catch(err => console.log(err));

