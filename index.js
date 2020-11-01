const fs = require('fs');
const inquirer = require('inquirer');
const readmeFrame = require('./readmeFrame.js');
const util = require('util');
const licenseArray = require('./license.js');

const userPrompt = inquirer.prompt([
    {
        type:'input',
        name:'name',
        message: "What is your full name?"
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your Project title?'
    },
    {
        type:'input',
        name: 'description',
        message: "Add your description: "
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add installation process: '
    },
    {
        type: 'input',
        name: 'url',
        message:'Enter your github ID: '
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add contributing description for user: '
    },
    {
        type: 'input',
        name: 'test',
        message: "Provide example how to run the code: "
    },
    {
        type: 'input',
        name: 'question',
        message: "Provide your e-mail address: "
    },
    {
        type: 'list',
        name: 'license',
        message: "Select license type: ",
        choices: ["Apache License", "ISC License", "MIT License", "Public License"]
    },
]);

const writeFileAsync = util.promisify(fs.writeFile);

const generateReadme = async () =>{
    try{
        let userInput = await userPrompt;
        userInput.name = userInput.name.toUpperCase();
            if (userInput.license == 'Apache License'){
                userInput.license = licenseArray[0];
            }else if(userInput.license == 'ISC License'){
                userInput.license = licenseArray[1];
            }else if(userInput.license == 'MIT License'){
                userInput.license = licenseArray[2];
            }else{
                userInput.license =  licenseArray[3];
            }
        const frameWork = readmeFrame(userInput);
        const final = await writeFileAsync('README.md', frameWork);
        return final;
    }catch{
        err => {throw (err)}
    }
};

generateReadme();

