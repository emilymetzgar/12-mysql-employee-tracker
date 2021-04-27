const connection = require("../config/connection");
const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');



 // constructor to make updates, prompts user and and runs query 