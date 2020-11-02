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
        name: 'resource',
        message: 'Add resource links: '
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
let resourceContent = value => {
    value.resource = value.resource.split(',');
    const links = [];
    value.resource.map((link) => {
        links.push(`![GitHub Logo](${link}) <br>`);
    })
    value.resource = links;
} 
let licensePick = value => {
    if (value.license == 'Apache License'){
        value.license = licenseArray[0];
    }else if(value.license == 'ISC License'){
        value.license = licenseArray[1];
    }else if(value.license == 'MIT License'){
        value.license = licenseArray[2];
    }else{
        value.license =  licenseArray[3];
    }
}

const generateReadme = async () =>{
    try{
        let userInput = await userPrompt;
        userInput.name = userInput.name.toUpperCase();
        licensePick(userInput);
        resourceContent(userInput);
        const frameWork = readmeFrame(userInput);
        const final = await writeFileAsync('README.md', frameWork);
        return final;
    }catch{
        err => {throw (err)}
    }
};

generateReadme();

