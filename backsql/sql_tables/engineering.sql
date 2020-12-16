CREATE DATABASE users_data;

USE users_data;

CREATE TABLE engineering(
    id_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    phone BIGINT,
    career VARCHAR(100),
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);