const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employeeOptions = ["Engineer", "Intern", "Finished building my team!"];

function askManagerQuestions () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of the team manager?',
            name: 'manager'
        },

        {
            type: 'input',
            message: "What is the team manager's employee ID?",
            name: 'managerID'
        },

        {
            type: 'input',
            message: "What is the team manager's email address?",
            name: 'manageremail'
        },

        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'manageroffice'
        },
    ])

    .then (function(response) {
        if (response.manageroffice !== "") {
            runAddEmployee();
        }
    })

}

askManagerQuestions();

function runAddEmployee () {
    inquirer.prompt([

        {
            type: 'list',
            message: 'Would you like to add an engineer or an intern to your team?',
            name: 'employee',
            choices: employeeOptions
        },

    ])

    .then (function(response) {
        if (response.employee === "Engineer") {
            askEngineerQuestions();
        } else if (response.employee === "Intern") {
            askInternQuestions();
        } else {
            return;
        }
    })
}

function askEngineerQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: "engineername",
        },

        {
            type: 'input',
            message: "What is the engineer's employee ID?",
            name: "engineerID",
        },

        {
            type: 'input',
            message: "What is the engineer's email address?",
            name: "engineeremail",
        },

        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: "engineergithub",
        },

    ])

    .then (function(response) {
        if (response.engineergithub !== "") {
            runAddEmployee();
        }
    })
}

function askInternQuestions() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: "internname",
        },

        {
            type: 'input',
            message: "What is the intern's employee ID?",
            name: "internID",
        },

        {
            type: 'input',
            message: "What is the intern's email address?",
            name: "internemail",
        },

        {
            type: 'input',
            message: "What is the intern's school?",
            name: "internschool",
        },
    ])

    .then (function(response) {
        if (response.internschool !== "") {
            runAddEmployee();
        }
    })
}
