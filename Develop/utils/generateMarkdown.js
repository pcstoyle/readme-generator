// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let licenseBadge = ''
  if (licenseType === 'MIT') {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/license-mit-green.svg)`
  } else if (licenseType === 'Apache') {
    licenseBadge = `![License: Appache](https://img.shields.io/github/license/saltstack/salt)`
  } else if (licenseType === 'ISC') {
    licenseBadge = `![License: ISC](https://img.shields.io/pypi/l/xpanse)`
  } else {
    license.license = ''
  }
  return licenseBadge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseType = license;
  let licenseLink = ''
  if (licenseType === 'MIT') {
    licenseLink = `[License: MIT](https://www.mit.edu/~amini/LICENSE.md)`
  } else if (licenseType === 'Apache') {
    licenseLink = `[License: Appache](https://www.apache.org/licenses/LICENSE-2.0.txt)`
  } else if (licenseType === 'ISC') {
    licenseLink = `[License: ISC](https://www.mozilla.org/en-US/MPL/2.0/)`
  } else {
    license.license = ''
  }
  return licenseLink;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  if(license != "None"){

    return `## License 
${license}\n
${renderLicenseBadge(license)}\n
${renderLicenseLink(license)}`
  }

  return ""
};


module.exports = renderLicenseSection;
