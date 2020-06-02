function generateMarkdown(data) {
  return `
${generateTitle( data.title )}
## Description
${generateDescription( data.description)}
## Installation information:
${generateInstallation(data.installation)}
## Usage Information:
${generateUsage(data.usage)}
## License Information:
${generateLicense(data.license)}

## Contribution Information:
${generateContribution(data.contribution)}

## Testing Information:
${generateTests(data.tests)}
## Questions:
${generateQuestions(data.questions)}
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
  return `${license}
  `;
} 
function generateContribution (contribution) {
  return `${contribution}
  `;
} 
function generateTests(tests) {
  return `${tests}
  `;
} 
function generateQuestions (questions) {
  return `${questions}
  `;
} 

module.exports = generateMarkdown;
