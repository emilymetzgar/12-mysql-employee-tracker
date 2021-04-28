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

            } else if (answers.home === "View All Employees") {
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

function viewDept () {
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      start();
    });
  }

  function viewEmployee () {
    const query= "SELECT * FROM employee";
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
  
