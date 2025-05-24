-- Create the database
CREATE DATABASE IF NOT EXISTS task_db;
USE task_db;

-- Create the tasks table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    due_date DATE NOT NULL,
    status ENUM('pending', 'done') DEFAULT 'pending'
);