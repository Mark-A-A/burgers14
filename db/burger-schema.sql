CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
id int NOT NUll AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean DEFAULT 0,
date timestamp,
PRIMARY KEY (id)
);

-- tinyint(1) & boolean are synonyms
-- 0 is false, 1 is true 
