CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
id int NOT NUll AUTO_INCREMENT,
burger_name varchar(255),
devoured boolean,
date timestamp,
PRIMARY KEY (id)
);
