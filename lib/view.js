  const connection = require("../config/connection");
  const mysql = require("mysql");
  const inquirer = require("inquirer");
  const cTable = require('console.table');


  // constructor to view all depts and run query 

  const viewAllEmployees = () => {
      connection.query(
        "SELECT employee.id as ID, employee.firstName as First, employee.lastName as Last, deptName as Department, title as Role, salary as Salary, CONCAT(manager.firstName, ' ', manager.lastName) as Manager FROM employee LEFT JOIN employeeRole ON employee.roleId = employeeRole.id LEFT JOIN department ON department.id = employeeRole.deptId LEFT JOIN manager on manager.id = employee.managerId",
          function(err, res) {
              if (err) throw (err);
              console.table("\n", res, "\n");
          }
      );
  };
  
  // View All Roles
  
  const viewAllRoles = () => {
      connection.query(
          "SELECT employeeRole.id as ID, title as Role, salary as Salary, deptName as Department FROM employeeRole LEFT JOIN department ON employeeRole.deptId = department.id",
          function(err, res) {
              if (err) throw (err);
              console.table("\n", res, "\n");
          }
      );
  };
  
  // View All Departments  
  
  const viewAllDepts = () => {
      connection.query(
          "SELECT department.id as ID, deptName as Department FROM department",
          function(err, res) {
              if (err) throw (err);
              console.table("\n", res);
          }
      );
  };
  
  
  module.exports = {
      viewAllEmployees,
      viewAllRoles,
      viewAllDepts,
  }
  
