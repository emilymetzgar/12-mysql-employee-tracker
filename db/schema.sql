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
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) references department(id)
);

CREATE TABLE employee(
id INTEGER auto_increment NOT NULL, 
first_name VARCHAR(30), 
last_name VARCHAR(30),
job_id INT NOT NULL, 
manager_id INT,
job_title VARCHAR(30), 
FOREIGN KEY (manager_id) references employee(id),
FOREIGN KEY (job_id) references job(id),
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
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee 
    (first_name, last_name, job_title, job_id, manager_id)
VALUES
('John', 'Doe', 'Sales Lead', 1, null),
('Mike', 'Chan', 'Salesperson', 2, 1),
('Ashley', 'Rodriguez', 'Accountant', 3, null),
('Kevin', 'Tupik', 'Lawyer', 4, 3),
('Malia', 'Brown', 'Lead Engineer', 6, null),
('Kunal', 'Singh', 'Software Engineer', 5, 6),
('Sarah', 'Lourd', 'Legal Team Lead', 7, null);
