CREATE DATABASE wish_saver_db;
USE wish_saver_db;

-- Create the table tasks.
CREATE TABLE wishes (
id int NOT NULL AUTO_INCREMENT,
task varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO tasks (task) VALUES ('Wish #1'), ('Wish #2');