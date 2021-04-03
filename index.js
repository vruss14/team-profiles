const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employeeArray = [];
const createdHTML = [];

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

        const manager = new Manager (response.manager, response.managerID, response.manageremail, response.manageroffice);
        employeeArray.push(manager);

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
            createPage();
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

        const engineer = new Engineer (response.engineername, response.engineerID, response.engineeremail, response.engineergithub);
        employeeArray.push(engineer);

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

        const intern = new Intern (response.internname, response.internID, response.internemail, response.internschool);
        employeeArray.push(intern);

        if (response.internschool !== "") {
            runAddEmployee();
        }
    })
}



function createPage() {
    console.log(employeeArray);
    let cardsArray = [];

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

        <div class = "row"> `

createdHTML.push(headerHTML);

    for (let i = 0; i < employeeArray.length; i++) {

        if(employeeArray[i].officeNumber) {

            cardsArray.innerHTML = `
        
            <div class="card text-center ml-4 mr-4 border-info" style="width: 18rem;">
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

        } else if (employeeArray[i].github) {

            cardsArray.innerHTML += `
        
            <div class="card text-center ml-4 mr-4 border-info" style="width: 18rem;">
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
        } else if (employeeArray[i].school) {

            cardsArray.innerHTML += `
        
            <div class="card text-center ml-4 mr-4 border-info" style="width: 18rem;">
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

let closingHTML = `
</div>

</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</body>
</html>`

createdHTML.push(closingHTML);

console.log(cardsArray);

    fs.writeFile("./dist/test7.html", createdHTML.join(""), function (err) {
        err ? console.error(err) : console.log('Your page has been created!')
    })
}
