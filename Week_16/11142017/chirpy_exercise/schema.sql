CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (
  id INT(13) AUTO_INCREMENT, 
  author VARCHAR(255),
  chirp VARCHAR(255),
  time_created TIMESTAMP,
  PRIMARY KEY (id)
);