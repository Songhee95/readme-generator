const fs = require('fs');
const inquirer = require('inquirer');
const readmeFrame = require('./readmeFrame.js');


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

userPrompt
.then(response => readmeFrame(response))
.then(result => fs.writeFile('README.md', result, 'utf-8', err => {
    if(err) throw err;
}));


