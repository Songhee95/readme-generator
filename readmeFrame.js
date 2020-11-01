const readmeFrame = response =>
`
# ${response.title}

## Description
${response.description}

## Table of Contents
* [URLs](#URLs)
* [Usage](#usage)
* [License](#license)

## Installation
${response.installation}

## URLs
1. Deployed URL
https://${response.url}.github.io/${response.title}/

2. Github Page URL
[Github](https://github.com/${response.url}/${response.title}/)


## Usage
![GitHub Logo]()


## Contribution Guidelines
${response.contributing}


## Test Instructions Information
${response.test}


## Questions
If you have any questions or need any help, feel free to contact me here
Github page: [Github](https://github.com/${response.url}/)
Email: ${response.question}


## License
Copyright (c) 2020 ${response.name}

${response.license}
`

module.exports=readmeFrame;