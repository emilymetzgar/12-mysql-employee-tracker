const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

//create constructor to add employee, connect to query, and prompt user w/inquirer


const addEmployee = () => {
    connection.query(
    "SELECT title FROM employeeRole",
    function(err, res) {
    if (err) throw (err);
    const employeeRoleData = res.map((employeeRole) => {
        return employeeRole.title;
    });
    inquirer.prompt([
        {
            type: "input",
            name: "firstname",
            message: "Employee's first name"
        },
        {
            type: "input",
            name: "lastname",
            message: "Employee's last name",
        },
        {
            type: "list",
            name: "role",
            message: "Select their role",
            choices: employeeRoleData,
        },
    ]).then((data) => {
        connection.query(
            "SELECT employeeRole.id FROM employeeRole WHERE ?",
            [
                {
                   title : data.employeeRole
                },
            ],
            function(err, res) {
                if (err) throw err;
                const employeeRoleId = res[0].id
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    firstName: data.firstname,
                    lastName: data.lastname,
                    roleId: employeeRoleId,
                    managerId: 1,
                },
                function(err, res) {
                    if (err) throw err;
                    console.log("\n New employee added: " + data.firstname + " " + data.lastname + "\n");
                });
                connection.query(
                    "INSERT INTO manager SET ?",
                    {
                        firstName: data.firstname,
                        lastName: data.lastname,
                    },
                    function(err, res) {
                        if (err) throw err;
                        return res;
                    });
                });  
         });  
    });
};

module.exports = {
    addEmployee }