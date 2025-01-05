// ISC
// [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

// License: MIT
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// Mozilla
// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if(license == "ISC") {
    badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license == "MIT") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license == "Mozilla") {
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  if(license == "ISC") {
    link = "https://opensource.org/licenses/ISC"
  } else if (license == "MIT") {
    link = "https://opensource.org/licenses/MIT"
  } else if (license == "Mozilla") {
    link = "https://opensource.org/licenses/MPL-2.0"
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = "";
  let licenseBadge = "";
  if(license == "none") {
    return ""
  } else {
    licenseLink = renderLicenseLink(license)
    licenseBadge = renderLicenseBadge(license)
  }

  const licenseContent = `${licenseBadge} This project is licensed under the ${license} License. You can see the complete details of the license at [${license}](${licenseLink})`
  return licenseContent;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  const licenseSection = renderLicenseSection(license);

  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)
- [Contact](#contact-us)

## Description

${data.description}

## Installation

${data.instructions}

## Usage

${data.information}

## Contributions
${data.contributions}

## Test
${data.test}

## License
${licenseSection}

## Contact Us

* Github: [${data.github}](https://github.com/${data.github})
* Email: ${data.email}
`
;
}

export default generateMarkdown;
