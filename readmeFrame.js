const readmeFrame = response =>
`
# ${response.title}

## Description
${response.description}

## Table of Contents
* [URLs](#URLs)
* [Usage](#usage)
* [License](#license)


## URLs
1. Deployed URL
https://${response.url}.github.io/${response.title}/

2. Github Page URL
[Github](https://github.com/${response.url}/${response.title}/)


## Usage
![GitHub Logo]()


## License
Copyright (c) 2020 ${response.name}

${response.license}
`

module.exports=readmeFrame;