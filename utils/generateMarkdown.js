function generateMarkdown(data) {
  return `
${generateTitle( data.title )}
${generateDescription( data.description)}

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


module.exports = generateMarkdown;
