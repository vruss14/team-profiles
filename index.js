// To run the application, fs and inquirer are needed as well as the created classes
// The employee array and createdHTML array are accessible to all functions
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];
const createdHTML = [];

let employeeOptions = ["Engineer", "Intern", "Finished building my team!"];


// The manager questions are asked when the application first begins

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

    // The employee array is updated with user inputs to the manager questions
    .then (function(response) {

        const manager = new Manager (response.manager, response.managerID, response.manageremail, response.manageroffice);
        employeeArray.push(manager);

        // The next function will not run until the last manager question has been answered

        if (response.manageroffice !== "") {
            runAddEmployee();
        }
    })
}

askManagerQuestions();

// Based on the user's response, the user will then be asked the engineer or intern questions
// This question is in a separate function so that the application can return to it easily if the user wants to add more than one employee

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
            createPage();
        }
    })
}

// This function contains the questions unique to engineer employees

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

        // The employee array is updated with all engineer user inputs

        const engineer = new Engineer (response.engineername, response.engineerID, response.engineeremail, response.engineergithub);
        employeeArray.push(engineer);

        // If the last engineer question is not blank (i.e. the user has answered the last question), then they will be prompted again to add another employee

        if (response.engineergithub !== "") {
            runAddEmployee();
        }
    })
}

// Function that contains questions unique to intern employees

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

        // User inputs are added to the employee array

        const intern = new Intern (response.internname, response.internID, response.internemail, response.internschool);
        employeeArray.push(intern);

        // Ensures that the user has answered the last intern question before returning to the submenu

        if (response.internschool !== "") {
            runAddEmployee();
        }
    })
}

// Function that runs when the user responds that they have finished building their team

function createPage() {
    let cardsArray = [];

// The beginning HTML in the page is consistent no matter what the user responds

let headerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team Profile</title>
</head>
<body>

    <div class="jumbotron text-center">
        <h1 class="display-4">Meet Our Team!</h1>
        <p class="lead">Our team members are full of enthusiasm and are ready to assist your business in projects related to digital marketing, software development, and quality assurance. </p>
        <hr class="my-4">
        <p>Learn more about each of our team members below.</p>
      </div>

    <div class = "container d-flex flex-wrap justify-content-center">

        <div class = "row d-flex flex-wrap justify-content-center"> `

createdHTML.push(headerHTML);

// This is the part of the HTML that will change depending on user inputs

    for (let i = 0; i < employeeArray.length; i++) {

        // Because no other employees have the property officeNumber, this can be used to identify the manager
        // Using a template literal, the cards array innerHTML is updated to reflect HTML unique to the manager

        if(employeeArray[i].officeNumber) {

            cardsArray.innerHTML = `
        
            <div class="card text-center ml-4 mr-4 mb-5 border-info" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employeeArray[i].name}</h5>
                    <h5 class="card-title">${employeeArray[i].getRole()}</h5>
                </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                    <li class="list-group-item">Email: ${employeeArray[i].email}</li>
                    <li class="list-group-item">Office Number: ${employeeArray[i].officeNumber}</li>
                    </ul>
            </div>`

        // This conditional statement is unique to engineer employees
        // The cardsArray innerHTML is updated for each of the engineer inputs

        } else if (employeeArray[i].github) {

            cardsArray.innerHTML += `
        
            <div class="card text-center ml-4 mr-4 mb-5 border-info" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employeeArray[i].name}</h5>
                    <h5 class="card-title">${employeeArray[i].getRole()}</h5>
                </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                    <li class="list-group-item">Email: ${employeeArray[i].email}</li>
                    <li class="list-group-item">GitHub: ${employeeArray[i].github}</li>
                    </ul>
            </div>`

        // This conditional statement is unique to interns
        // The cardsArray innerHTML is updated for each of the intern inputs   

        } else if (employeeArray[i].school) {

            cardsArray.innerHTML += `
        
            <div class="card text-center ml-4 mr-4 mb-5 border-info" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employeeArray[i].name}</h5>
                    <h5 class="card-title">${employeeArray[i].getRole()}</h5>
                </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employeeArray[i].id}</li>
                    <li class="list-group-item">Email: ${employeeArray[i].email}</li>
                    <li class="list-group-item">School: ${employeeArray[i].school}</li>
                    </ul>
            </div>`

        }
    }

createdHTML.push(cardsArray.innerHTML);

// The closing HTML is consistent no matter how the user responds

let closingHTML = `
</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>`

//The createdHTML array now contains three things that have been pushed to it: the beginning HTML, the cardsArray, and the closing HTML

createdHTML.push(closingHTML);

// The file is written in the correct directory (dist), and the createdHTML array is joined together
// Feedback is logged in the console to determine if the page has been successfully created.

    fs.writeFile("./dist/team.html", createdHTML.join(""), function (err) {
        err ? console.error(err) : console.log('Thanks for your responses! Your page has been created!')
    })
}
