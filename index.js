const inquirer = require('inquirer');
const fs = require('fs');
//const util = require('util');

//const writeFileAsync = util.promisify(fs.writefile);



const questions = () => 
     inquirer.prompt([
         
         {   type: "input",
            name: "author",
            message: "What is the author's name?"
         },
         {
            type: "input",
            name: "username",
            message: "What is your Github username?"
         },
         {
            type: "input",
            name: "email",
            message: "What is your email address?"
         },
         {
            type: "input",
            name: "title",
            message: "What is your project title?"
         },
         {
            type: "input",
            name: "description",
            message: "Write a description of your app"
         },
         {
           type: "input",
           name: "license",
           message: "What kind of license should your project have?"
          
         },
         {
           type: "input",
           name: "installations",
           message: "What command should be run to install dependencies?"
         },
         {
           type: "input",
           name: "tests",
           message: "What command should be run to run tests?"
         },
         {
           type: "input",
           name: "usage",
           message: "What the user need to know about using the repo?"
         },
         {
           type: "input",
           name: "contribute",
           message: "What the user need to know about contributing to the repo?"
         },
]);
      




function generateMD(data){

    return `# ${data.title}
    
    ${data.description}
    ## Table of contents:
    *[Installation](#installation)
    *[Usage](#usage)
    *[License](#license)
    *[Contributing](#contributing)
    *[Tests](#tests)
    *[Questions](#questions)
    ### Installation:
    In order to install the necessary dependencies, open the console and run the following:
    \`\`\`${data.installations}\`\`\`
    ### Usage:
    ${data.usage}
    ### License:
    ${data.license}
    ### Contributing:
    ${data.contribute}
    ### Tests:
    In order to test open the console and run the following:
    \`\`\`${data.tests}\`\`\`
    ### Questions:
    If you have any questions contact me on [Github](https://github.com/${data.username}) or contact ${data.author} at ${data.email}
      `
}
    
    
    
    
    
    questions()
    //.then((data) => writeFileAsync('generatedREADME.md',
   // generateMD(data)))
    .then((data) => fs.writeFileSync('generatedREADME.md' , generateMD(data)))
    .then(() => console.log('Succes!'))
    .catch((err) => console.error(err));
    
    
    
    
    
    
    
    
    
    
    
 