const inquirer = require('inquirer');
const fs = require('fs');

// Questions for the README sections
const questions = [
  { type: 'input', name: 'title', message: 'What is the title of your project?' },
  { type: 'input', name: 'description', message: 'Provide a description of your project:' },
  { type: 'input', name: 'installation', message: 'What are the installation steps?' },
  { type: 'input', name: 'usage', message: 'How is the application used?' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPL', 'Apache', 'None'] },
  { type: 'input', name: 'contributing', message: 'Provide contribution guidelines:' },
  { type: 'input', name: 'tests', message: 'Provide test instructions:' },
  { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' },
];

// Function to generate the README content
function generateReadMe(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  GitHub Profile: [${data.github}](https://github.com/${data.github})  
  For questions, please contact me via email: ${data.email}
  `;
}

// Function to initialize the app
function init() {
  inquirer.prompt(questions)
    .then((responses) => {
      const readmeContent = generateReadMe(responses);
      fs.writeFileSync('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
    });
}

init();
