const fs = require('fs');
const inquirer = require('inquirer');

let employeeOptions = ["Engineer", "Intern"];

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

        {
            type: 'list',
            message: 'Would you like to add an engineer or an intern?',
            name: 'employee',
            choices: employeeOptions
        },

    ])