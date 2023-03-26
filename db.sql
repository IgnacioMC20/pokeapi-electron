CREATE DATABASE IF NOT EXISTS pokeapi;

USE pokeapi;

CREATE TABLE IF NOT EXISTS datos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pokeid VARCHAR(255),
  nombre VARCHAR(255),
  peso VARCHAR(255),
  imagen VARCHAR(255),
  tipo VARCHAR(255),
  createdAt datetime,
  updatedAt datetime
);