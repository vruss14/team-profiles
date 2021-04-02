const fs = require('fs');
const inquirer = require('inquirer');

let employeeOptions = ["Engineer", "Intern", "Finished building my team!"];

const profileQuestions = {
    Standard: [
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
    ],

    Engineer: [
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
    ],

    Intern: [

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
    ]
}

const askProfileQuestions = async () => {
    const { employee } = await inquirer.prompt(profileQuestions.Standard)

    switch (employee.toLowerCase()) {
        case "engineer":
            await inquirer.prompt(profileQuestions.Engineer);
            inquirer.prompt(profileQuestions.Standard[4]);
            break;

        case "intern":
            await inquirer.prompt(profileQuestions.Intern);
            inquirer.prompt(profileQuestions.Standard[4]);
            inquirer.prompt(profileQuestions.Intern);
            break;

        case "Finished building my team!":
            break;
    }
}

askProfileQuestions();
