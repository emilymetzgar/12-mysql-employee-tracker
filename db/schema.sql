--i need to add manager, foregin key info, and manager id number

DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;


CREATE TABLE department (
     id INTEGER auto_increment NOT NULL,
     department_name VARCHAR (30) NULL,
     PRIMARY KEY (id)
);

CREATE TABLE job  (
    id INTEGER auto_increment NOT NULL,
    job_title VARCHAR (30),
    salary DECIMAL (10,4),
    PRIMARY KEY (id),
    department_id INT NOT NULL
);

CREATE TABLE employee(
id INTEGER auto_increment NOT NULL, 
first_name VARCHAR(30), 
last_name VARCHAR(30),
role_id INT NOT NULL, 
PRIMARY KEY (id)
);

INSERT INTO department 
    (department_name)
VALUES

('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO job
    (job_title, salary, department_id)
VALUES 

('Sales Lead', 100000, 1),
('Salesperson', 80000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 4),
('Accountant', 125000, 6),
('Legal Team Lead', 250000, 7),
('Lawyer', 190000, 8);

INSERT INTO employee 
    (first_name, last_name, role_id, job_title)
VALUES
('John', 'Doe', 1),
('Mike', 'Chan', 2),
('Ashley', 'Rodriguez', 3),
('Kevin', 'Tupik', 4),
('Kunal', 'Singh', 5),
('Malia', 'Brown', 6),
('Sarah', 'Lourd', 7),
('Tom', 'Allen', 8);

