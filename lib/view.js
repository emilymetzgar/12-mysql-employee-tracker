  const connection = require("../config/connection");
  const mysql = require("mysql");
  const inquirer = require("inquirer");
  const cTable = require('console.table');


  // constructor to view all depts and run query 

  const viewAllDepts = () => {
      connection.query(
          "SELECT FROM ",
          function (err, res) {
              if (err) throw (err);
              console.table(res); //need to work on console.table
          }
      );
  };


  // constructor to view all employees and run query 

  const viewAllEmployees = () => {
      connection.query(
          "SELECT FROM ",
          function (err, res) {
              if (err) throw (err);
              console.table(res); //need to work on console.table
          }
      );
  };

  // constructor to view all roles and run query 

  const viewAllRoles = () => {
      connection.query(
          "SELECT FROM ",
          function (err, res) {
              if (err) throw (err);
              console.table(res); //need to work on console.table
          }
      );
  };

  module.exports = {
      viewAllDepts,
      viewAllEmployees,
      viewAllRoles,
  }