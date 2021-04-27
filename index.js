const connection = require("./config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const view = require('./lib/view');
const add = require('./lib/add');
const update = require('./lib/update');



const start = () => {
    inquirer
    .prompt([
        {
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: ["View All Employees", 
            "Add Employee", 
            "Update Employee Role", 
            "View All Roles", "Add Role", 
            "View All Departments", "Add Department", 
            "Exit"]
        }
        
    ]).then((answer) => { 
        switch (answer.action) {
            case "View All Employees":
                view.viewAllEmployees();
                break;

            case "Add Employee":
                add.addEmployee();
                break;

            case "Update Employee Role":
                update.updateRoles();
                break;

            case "View All Roles":
                view.viewAllRoles();
                break;

            case "Add Role":
                add.addRoles();
                break;

            case "View All Departments":
                view.viewAllDepts();
                break;

            case "Add Department":
                add.addDepts();
                break;

            case "Exit":
                connection.end();
                break;

            default:
                break;
        };
    });
}

