// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license; 
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://https://img.shields.io/badge/license-mit-green.svg)`
  } else if (licenseType === 'Apache') {
    yourLicense = `![License: Appache](https://ihttps://img.shields.io/github/license/saltstack/salt)`
  } else if (licenseType === 'ISC') {
    yourLicense = `![ISC](https://img.shields.io/pypi/l/xpanse)`
  } else {
    license.license = " "
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
