INSERT INTO department (deptName)
VALUES

('Sales'),
('Engineering'),
('Finance'),
('Legal');

--why no id in () here?
INSERT INTO role (title, salary, deptId)
VALUES 
(title, salary, id)

('Sales Lead', 100000, 1),
('Salesperson', 80000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 4),
('Accountant', 125000, 6),
('Legal Team Lead', 250000, 7),
('Lawyer', 190000, 8);

INSERT INTO employee (firstName, lastName, roleId, managerId)
VALUES
('John', 'Doe', 1),
('Mike', 'Chan', 2),
('Ashley', 'Rodriguez', 3),
('Kevin', 'Tupik', 4),

('Malia', 'Brown', 6),
('Sarah', 'Lourd', 7),
('Tom', 'Allen', 8);
