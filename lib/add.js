const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

//create constructor to add employee, connect to query, and prompt user w/inquirer


const addEmployees = () => {
    connection.query(
        "SELECT title FROM employeeRole",
        function (err, res) {
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
                    [{
                        title: data.employeeRole
                    }, ],
                    function (err, res) {
                        if (err) throw err;
                        const employeeRoleId = res[0].id
                        connection.query(
                            "INSERT INTO employee SET ?", {
                                firstName: data.firstname,
                                lastName: data.lastname,
                                roleId: employeeRoleId,
                                managerId: 1,
                            },
                            function (err, res) {
                                if (err) throw err;
                                console.log("\n New employee added: " + data.firstname + " " + data.lastname + "\n");
                     
                        connection.query(
                            "INSERT INTO manager SET ?", {
                                firstName: data.firstname,
                                lastName: data.lastname,
                            },
                            function (err, res) {
                                if (err) throw err;
                                return res;
                    });
                });  
         });  
    });

                        
                      
const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "addDeptName",
            message: "Type New Department Name Here",
        }
    ]).then((data) => {
        connection.query(
            "INSERT INTO department SET ?",
            {
                addDeptname: data.addDeptName,
            },
            function(err, res) {
                if (err) throw err;
                console.log("\n New department added: " + data.addDeptName + "\n");
                return res;
            });
        }
    );
};
const addRoles = () => {
    connection.query(
        "SELECT name FROM department",
        function (err, res) {
            if (err) throw (err);
            const departmentInfo = res.map((employeeRole) => {
                return employeeRole.name;
            });
            inquirer.prompt([{
                    type: "input",
                    name: "roleTitle",
                    message: "Type new role title here",
                },
                {
                    type: "input",
                    name: "salary",
                    message: "Type salary for new role title here",

                },
                {
                    type: "list",
                    name: "department",
                    message: "Type department title here",
                }
            ]).then((data) => {
                const chooseId = (data.dept);
                connection.query(
                    "SELECT id FROM department WHERE ?",
                    [{
                        name: chooseId,
                    }, ],
                    function (err, res) {
                        if (err) throw err;
                        connection.query(
                            "INSERT INTO employeeRole SET ?", {
                                title: data.title,
                                salary: data.salary,
                                deptId: res[0].id,
                            },
                            function (err, res) {
                                if (err) throw err;
                                console.log("\n New role is: " + data.title + "\n");
                                return res;
                            });
                        });  
                 });  
            });
               
                


module.exports = {
    addEmployees,
    addDepartment,
    addRoles,
}
        