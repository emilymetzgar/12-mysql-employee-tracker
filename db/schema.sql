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
    salary DECIMAL (15,3nod),
    PRIMARY KEY (id),
    department_id INT NOT NULL,
    job_department_name VARCHAR (30) NULL
);

CREATE TABLE employee(
id INTEGER auto_increment NOT NULL, 
first_name VARCHAR(30), 
last_name VARCHAR(30),
role_id INT NOT NULL, 
job_name VARCHAR (30),
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
    (job_title, salary, department_id, job_department_name)
VALUES 

('Sales Lead', 100000, 1, 'Sales'),
('Salesperson', 80000, 2, 'Sales'),
('Lead Engineer', 150000, 3, 'Engineering'),
('Software Engineer', 120000, 4, 'Engineering'),
('Accountant', 125000, 6, 'Finance'),
('Legal Team Lead', 250000, 7, 'Legal'),
('Lawyer', 190000, 8, 'Legal');

INSERT INTO employee 
    (first_name, last_name, role_id, job_name)
VALUES
('John', 'Doe', 1, 'Sales Lead'),
('Mike', 'Chan', 2, 'Salesperson'),
('Ashley', 'Rodriguez', 3, 'Lead Engineer'),
('Kevin', 'Tupik', 4, 'Software Engineer'),
('Kunal', 'Singh', 5, 'Accountant'),
('Malia', 'Brown', 6, 'Legal Team Lead'),
('Sarah', 'Lourd', 7, 'Legal Team Lead'),
('Tom', 'Allen', 8, 'Lawyer');





