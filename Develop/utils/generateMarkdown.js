// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadges(data) {
  return (
    `![](https://img.shields.io/github/issues/${data.username}/${data.repo})
    ![](https://img.shields.io/github/forks/${data.username}/${data.repo})
    ![](https://img.shields.io/github/stars/${data.username}/${data.repo})
    ![](https://img.shields.io/github/license/${data.username}/${data.repo})`
  )
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data.license){
    case 'None':
      return ``;
      break;
    case 'Unlicensed':
    return `https://choosealicense.com/licenses/unlicense/`;
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;
      break;
    case 'Apache':
      return `https://choosealicense.com/licenses/apache-2.0/`;
      break;
      case 'GPLv3':
        return `https://choosealicense.com/licenses/gpl-3.0/`;
        break;
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === 'None'){
    return '';
  }else{
    return `© ${data.year} ${data.name}
  License under the [${data.license}](${renderLicenseLink(data)}) license.`
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
 return `# ${data.title}

 ${renderBadges(data)}
 ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

  ## Description 

  ${data.description}
  ---

  ![Demo](${data.demo})

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [Credits](#credits)

  * [License](#license)
  ---

  ## Installation

  ${data.install}
  ---

  ## Usage 

  ${data.usage}
  ---

  ## Credits

  [${data.credit}](${data.creditGit})
  ---

  ## License & Copyright
  ${renderLicenseSection(data)}

  ---
  © 2021 Eamon McHugh, MBA
  `;
  }

module.exports = generateMarkdown;



