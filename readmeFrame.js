const readmeFrame = response =>
`
# ${response.title}

## Description
${response.description}

## Table of Contents
* [Installation](#installation)
* [URLs](#URLs)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#questions)
* [License](#license)

## Installation
${response.installation}

## URLs
1. Deployed URL: 
https://${response.url}.github.io/${response.title}/

2. Github Page URL: 
[Github](https://github.com/${response.url}/${response.title}/)


## Usage
${response.resource}


## Contribution
${response.contributing}


## Test
${response.test}


## Questions
If you have any questions or need any help, feel free to contact me here <br>
Github page: [Github](https://github.com/${response.url}/) <br>
Email: ${response.question}


## License
Copyright (c) 2020 ${response.name}

${response.license}
`

module.exports=readmeFrame;