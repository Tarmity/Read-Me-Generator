const inquirer = require ("inquirer");
const fs = require ('fs');

// array of questions for user
inquirer.prompt([
   {
       type: "input",
       name: "title",
       message: "What is the title of you project?"
   },
   {
      type: "input",
      name: "description",
      message: "What is the description of you project?",
   },
   {
      type: "input",
      name: "installation",
      message:"Describe the installation insructions?"
   },
   {
      type: "input",
      name: "usage",
      message:"What is the Usage information?"
   },
   {
      type: "input", 
      name: "usage",
      message:"What are the contribution guidelines?"
   },
   {
      type: "input",
      name: "test",
      message:"What are the test instructions?"
   },
   {
      type: "input",
      name: "license",
      message:"What license would you like to use?"
   },
   {
      type: "input",
      name: "username",
      message:"what is your GitHub username?"
   },
   {
      type: "input",
      name: "email",
      message:"What is you email address?"
   }
]).then (function(response){
    if (response.input === response.message){
        console.log("Success!");
    }
    else{
        console.log("Wrong");
    }
});


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
