DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  deptName VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (9, 2) NOT NULL,
  deptId INTEGER, 
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

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;



INSERT INTO department 
    (deptName)
VALUES

('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role 
    (title, salary, deptId)
VALUES 

('Sales Lead', 100000, 1),
('Salesperson', 80000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 4),
('Accountant', 125000, 6),
('Legal Team Lead', 250000, 7),
('Lawyer', 190000, 8);

INSERT INTO employee 
    (firstName, lastName, roleId, managerId)
VALUES
('John', 'Doe', 1, NULL),
('Mike', 'Chan', 2,1),
('Ashley', 'Rodriguez', 3, NULL),
('Kevin', 'Tupik', 4, 3),
('Kunal', 'Singh', 5, NULL),
('Malia', 'Brown', 6, 5),
('Sarah', 'Lourd', 7, NULL),
('Tom', 'Allen', 8, 7);
