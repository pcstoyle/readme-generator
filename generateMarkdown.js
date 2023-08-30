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
