const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

 // constructor to make updates, prompts user and and runs query 

 const updateRoles = () => {
     connection.query(
        "SELECT concat(firstName, ' ' , lastName) as Employee Name, id FROM employee",
     function(err, res) {
         if (err) throw (err);
            //i may need to change employee here to something else bc schema
         const employeeInfo = res.map ((employee) => {
             return {name: employee.employeeName, value: employee.id}
         });

         inquirer.prompt([
             {
                 type: "list",
                 name: "employeeIdNew",
                 message: "Choose an Employee to Update",
                 choices: employeeInfo,
             }

         ]).then((data) => {
             const employeeIdNew = data.employeeIdNew;
             connection.query(
                 "SELECT title, employeeRole.id FROM employeeRole",
             )
         }
     
 