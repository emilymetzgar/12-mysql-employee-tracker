const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: ' ',
    database: 'employee_tracker_db',
});
// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
});

function start() {
    inquirer
        .prompt([{
            type: "list",
            name: "home",
            message: "Hello! Welcom to My Employee Tracker. Please select an Action below.",
            choices: [
                "View All From Department",
                "View All Roles",
                "View All Employees",
                "Add A Role",
                "Add A Department",
                "Add An Employee",
                "Update A Role",
                "Update The Manager",
                "Get Out of Here",
            ],
        }, ])

        .then((answers) => {
            if (answers.home === "View All From Department") {
                viewDept();

            } else if (answers.home === "View All Employees") {
                viewEmployee();

            } else if (answers.home === "View All Roles") {
                viewRole();

            } else if (answers.home === "Add An Employee") {
                addEmployee();

            } else if (answers.home === "Add A Role") {
                addRole();

            } else if (answers.home === "Add A Department") {
                addDept();

            } else if (answers.home === "Update A Role") {
                updateRole();

            } else if (answers.home === "Update The Manager") {
                updateManager();

            } else if (answers.home === "Get Out of Here") {
                connection.end();
            }
        });
}
start();

function viewDept() {
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewEmployee() {
    const query = "SELECT * FROM employee";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

function viewRole() {
    const query = "SELECT * FROM job";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
}

//add employee

function addEmployee() {
    inquirer
        .prompt([{
                name: "first_name",
                message: "Add Employee's first name",
                type: "input",
            },
            {
                name: "last_name",
                message: "Add Employee's last name",
                type: "input",
            },

            {
                name: "role_id",
                message: "Add Employee's ID",
                type: "list",
                choices: [
                 'Employee ID will be 1',
                 'Employee has to be 1',
                 'Click here for 1',
                ],
            },
    
            {
                name: "job_name",
                message: "Add Employee's role",
                type: "list",
                choices: [
                    'Sales Lead',
                    'Salesperson',
                    'Lead Engineer',
                    'Software Engineer',
                    'Accountant',
                    'Legal Team Lead',
                    'Lawyer',
                ],
            },
            //fix manager here, add it
        ])

        .then((answers) => {
            const query =
                "INSERT INTO employee (first_name, last_name, role_id, job_name) VALUES (?,?, 1 ,?)"
            connection.query(
                query,
                [
                    answers.first_name,
                    answers.last_name,
                    answers.job_name,
                ],
                (err, res) => {
                    if (err) throw err;
                    console.log(answers);

                    const query = "SELECT * FROM employee";
                    connection.query(query, (err, res) => {
                        if (err) throw err;
                        console.log();
                        console.table(res);
                        start();
                    });
                }
            );
        });
}