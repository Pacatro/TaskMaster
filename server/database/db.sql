CREATE DATABASE IF NOT EXISTS taskdb;

USE taskdb;

CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    user_id VARCHAR(255) NOT NULL
);

ALTER TABLE tasks ADD FOREIGN KEY (user_id) REFERENCES users(id);

INSERT INTO users (id, username, name, surname, email, password) VALUES
('a1f5e8c3-8b21-4d3e-910b-4a9c1f93d2f1', 'admin', 'Admin', 'ReAdmin', 'admin@admin.com', '$2a$12$vx9wdDcriDumm/TU9762jOr8Z3qeEd4SxNwcgG0EJTxsvmAiPmWEa');

INSERT INTO tasks (title, description, user_id) VALUES
('Tarea 1', 'Descripción de la Tarea 1', 'a1f5e8c3-8b21-4d3e-910b-4a9c1f93d2f1'),
('Tarea 2', 'Descripción de la Tarea 2', 'a1f5e8c3-8b21-4d3e-910b-4a9c1f93d2f1');

SELECT * FROM users;