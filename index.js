const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")

// --notes from tutoring session--
// have inquirer prompts that will ask user to builder engineer, intern, manager
// ask which they want to make
// have a function for each
// in the dot then of inquirer prompts, you will use your classes to create a new employee and added it to a list (golbal veriable)
// have an exit function 
// when you run exit function, check to see if output folder exists, if it doesnt create it. 
// fs write file sync that will take the result of using html render function that you import to make your html file
