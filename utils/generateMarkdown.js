function generateMarkdown(data) {
  return `
${generateTitle( data.title )}
## Description
${generateDescription( data.description)}
## Table of Contents \n
1.) Installation information \n
2.) Usage Information \n
3.) License Information \n
4.) Contribution Information \n
5.) Testing Information \n 
6.) Github Information \n 

## Installation information:
${generateInstallation(data.installation)}
## Usage Information:
${generateUsage(data.usage)}
## License Information:
${generateLicense(data.license)}
## Contribution Information:
![contributors badge](https://img.shields.io/badge/Contributors-${generateContribution(data.contribute)}-brightgreen)

## Testing Information:
${generateTests(data.tests)}
## Github Information:
![Github Picture](${generateProfile(data.profile)})

${generateEmail(data.email)}
`;
}

function generateTitle (title) {
  return `# ${title}
  `;
} 

function generateDescription (description) {
  return `${description}
  `;
} 

function generateInstallation (installation) {
  return `${installation}
  `;
} 

function generateUsage (usage) {
  return `${usage}
  `;
} 
function generateLicense (license) {
  // console.log(`${license}`)
  return `${license}
  `;
} 
function generateContribution (contribute) {
  // console.log(`${contribute}`)
  return `${contribute}`;

} 
function generateTests(tests) {
  return `${tests}
  `;
} 
function generateProfile (profile) {
  return `${profile}`;
} 
function generateEmail(email) {
  return `${email}
  `;
} 

module.exports = generateMarkdown;
