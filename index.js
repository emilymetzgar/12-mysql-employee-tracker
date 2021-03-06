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
    password: 'rootie',
    database: 'employee_tracker_db',
});
// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    inquirer
        .prompt([{
            type: "list",
            name: "home",
            message: "Hello! Welcome to My Employee Tracker. Please select an Action below.",
            choices: [
                "View By Department",
                "View By Role",
                "View All Employees",
                "Add A Role",
                "Add A Department",
                "Add An Employee",
                "Update A Role",
                "Get Out of Here",
            ],
        }, ])
        //uses inquirer to prompt user
        //depending on users answers, the following functions will run
        //code for each function written below
        .then((answers) => {
            if (answers.home === "View By Department") {
                viewDept();

            } else if (answers.home === "View All Employees") {
                viewEmployee();

            } else if (answers.home === "View By Role") {
                viewRole();

            } else if (answers.home === "Add An Employee") {
                addEmployee();

            } else if (answers.home === "Add A Role") {
                addRole();

            } else if (answers.home === "Add A Department") {
                addDept();

            } else if (answers.home === "Update A Role") {
                updateRole();

            } else if (answers.main === "Get Out of Here") {
                process.exit(1);
            }
        });
}

//function to run when user selects view by department
//queries mysql,schema.sql to get info from tables
function viewDept() {
    const query =
        `SELECT * FROM department`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(' ');
        console.log(` ALL DEPARMENTS:`);
        console.log(' ');
        console.table(res);
        start();
    });
}
//function to run when user selects view all employees
//queries mysql,schema.sql to get info from tables
//uses joins to include info from more than one table
function viewEmployee() {
    const query =
        `SELECT employee.id,
        employee.first_name,
        employee.last_name,
        job.id,
        job.job_title,
        job.salary,
        department.id,
        department.department_name
        FROM employee INNER JOIN job ON employee.job_id = job.id
        INNER JOIN department ON job.department_id = department.id`;
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(' ');
        console.log(` ALL EMPLOYEES:`);
        console.log(' ');
        console.table(res);
        start();
    });
}

function viewRole() {
    const query =
        `SELECT * FROM job`;

    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(' ');
        console.log(` ALL ROLES:`);
        console.log(' ');
        console.table(res);
        start();
    });
}

//function to run when user selects add employee
//queries mysql,schema.sql to get info from tables
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
        ])

        .then((answers) => {
            const query =
                "SELECT * FROM job"
            connection.query(
                query,
                (err, res) => {
                    console.log(res)
                    jobChoices = res.map((job) => {
                        return {
                            value: job.id,
                            name: job.job_title,
                        }
                    })
                    inquirer
                        .prompt([{
                            name: "job",
                            message: "Which role would you like to add to your employee?",
                            type: "list",
                            choices: jobChoices,
                            
                        }]).then((jobAnswers) => {
                            const query =
                                "INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?,?,?,?)"
                            connection.query(
                                query,
                                [
                                    answers.first_name,
                                    answers.last_name,
                                    jobAnswers.job,
                                    null,
                                ],
                                (err, res) => {
                                    if (err) throw err;

                                    const query = "SELECT * FROM employee";
                                    connection.query(query, (err, res) => {
                                        if (err) throw err;

                                        console.log(' ');
                                        console.log(` You Added A New Employee!:`);
                                        console.log(' ');
                                        console.table(res);
                                        start();
                                    });
                                }
                            );
                        })
                }
            )
        });
}
//function to run when user selects add department
//queries mysql,schema.sql to get info from tables
function addDept() {
    inquirer
        .prompt([{
            name: "department_name",
            message: "Type a Department to add",
            type: "input",
        }, ])
        .then((answers) => {
            const query =
                "INSERT INTO department (department_name) VALUES (?)"
            connection.query(
                query,
                [answers.department_name],
                (err, res) => {
                    if (err) throw err;

                    const query = "SELECT * FROM department";
                    connection.query(query, (err, res) => {
                        if (err) throw err;

                        console.log(' ');
                        console.log(` You Added A New Department!:`);
                        console.log(' ');

                        console.table(res);
                        start();
                    });
                }
            );
        });
    }
//function to run when user selects add role
//queries mysql,schema.sql to get info from tables
function addRole() {
    inquirer
        .prompt([{
                name: "job_title",
                message: "Type a Job Title to Add",
                type: "input",
            },
            {
                name: "salary",
                message: "Type the Salary for the New Job Title",
                type: "number",
            },

            {
                name: "department_id",
                message: "Add Department ID",
                type: "list",
                choices: [
                    'Department ID will be 1',
                    'Department has to be 1',
                    'Click here for 1',
                ],
            },
            {
                name: "job_department_name",
                message: "Select One of the Departments for New Job Title",
                type: "list",
                choices: ['Sales',
                    'Engineering',
                    'Finance',
                    'Legal'
                ],
            },

        ])
        .then((answers) => {
            const query =
                `INSERT INTO job (job_title, salary, department_id) VALUES (?,?, 1)`;
            connection.query(
                query,
                [answers.job_title, answers.salary, answers.job_department_name],
                (err, res) => {
                    if (err) throw err

                    const query = "SELECT * FROM job";
                    connection.query(query, (err, res) => {
                        if (err) throw err;

                        console.log(' ');
                        console.log(` You Added A New Role!!:`);
                        console.log(' ');

                        console.table(res);
                        start();
                    });
                }
            );
        });
    }
//function to run when user selects update role
//queries mysql,schema.sql to get info from tables
function updateRole() {
    inquirer
        .prompt([{
                name: "first_name",
                message: "First name of person to update role?",
                type: "input",
            },
            {
                name: "last_name",
                message: "Last name of person to update role?",
                type: "input",
            },
            {
                name: "update_role",
                message: "Which Role to Update to?",
                type: "list",
                choices: [
                    'Sales Lead',
                    'Salesperson',
                    'Lead Engineer',
                    'Software Engineer',
                    'Accountant',
                    'Legal Team Lead',
                    'Lawyer'
                ],
            },
        ])
        .then((answers) => {
            console.log(answers);
            const query =
                "UPDATE employee SET job_title=? WHERE first_name=? AND last_name=?";
            connection.query(
                query,
                [answers.update_role, answers.first_name, answers.last_name],
                (err, res) => {
                    if (err) throw err;
                    const query = "SELECT * FROM employee";
                    connection.query(query, (err, res) => {
                        if (err) throw err;
                        console.table(res);
                        start();
                    });
                }
            );
        });
    }