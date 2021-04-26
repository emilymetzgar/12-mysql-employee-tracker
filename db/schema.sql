DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  deptName VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10, 3) NOT NULL,
  deptId INT NOT NULL, 
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  roleId INT NOT NULL,
  managerId INT NULL references employee,
  FOREIGN KEY (roleId) REFERENCES role(id)
);

SELECET * FROM department;
SELECET * FROM role;
SELECET * FROM employee;