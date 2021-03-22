const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");

const render = require("./lib/htmlRender")
const path = require("path");
const fs = require("fs");
const employeeList = []



const promptArray = [{
    type: "input",
    message: "What is your name?",
    name: "name"
},{
    type: "input",
    message: "What is your email?",
    name: "email"
},{
    type: "input",
    message: "What is your ID?",
    name: "id"
}, {
    type: "list",
    message: "What is your title",
    choices: ["Manager", "Engineer", "Intern", "Quit"],
    name: "title"
}];
const managerPrompt = [{
    type: "input",
    message: "What is your office number?",
    name: "officeNumber"
}]

const engineerPrompt = [{
    type: "input",
    message: "What is your GitHub?",
    name: "github"
}]

const internPrompt = [{
    type: "input",
    message: "What is your School?",
    name: "school"
}]
// --notes from tutoring session--
// have inquirer prompts that will ask user to builder engineer, intern, manager
// ask which they want to make
// have a function for each
// in the dot then of inquirer prompts, you will use your classes to create a new employee and added it to a list (golbal veriable)
// have an exit function 
// when you run exit function, check to see if output folder exists, if it doesnt create it. 
// fs write file sync that will take the result of using html render function that you import to make your html file

function runInquirer() {
  
 

    inquirer.prompt(promptArray).then(answers => {
        if(answers.title === "Manager"){
            inquirer.prompt(managerPrompt).then(extra => {
                const manager = new Manager(answers.name, answers.email, answers.id, extra.officeNumber)
                 employeeList.push(manager) 
                runInquirer()
            })
        }
        if(answers.title === "Engineer"){
            inquirer.prompt(engineerPrompt).then(extra => {
                const engineer = new Engineer(answers.name, answers.email, answers.id, extra.github)
                 employeeList.push(engineer) 
                runInquirer()
            })
        }
        if(answers.title === "Intern"){
            inquirer.prompt(internPrompt).then(extra => {
                const intern = new Intern(answers.name, answers.email, answers.id, extra.school)
                 employeeList.push(intern) 
                runInquirer()
            })
        }
        if(answers.title === "Quit") {
            console.log(employeeList)
            const dir = path.join(__dirname, "output")
            if(!fs.existsSync(dir)){
                fs.mkdirSync(dir)
            }
            fs.writeFileSync(path.join(dir, "team.html"),render(employeeList),"utf8")
        }
    })
}
runInquirer()