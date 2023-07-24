-- SQLBook: Code
-- Active: 1689371771962@@localhost@3306@phpmyadmin
-- Crear la base de datos
CREATE DATABASE iglesiaHeavensMysqlDB;

-- Usar la base de datos recién creada
USE iglesiaHeavensMysqlDB;

-- Crear la tabla Departamento
CREATE TABLE Departamento (
  idDepartamento INT AUTO_INCREMENT PRIMARY KEY,
  nombreDepartamento VARCHAR(100) NOT NULL
);

-- Insertar el departamento único "Santander"
INSERT INTO Departamento (nombreDepartamento) VALUES ('Santander');

-- Crear la tabla Municipio
CREATE TABLE Municipio (
  idMunicipio INT AUTO_INCREMENT PRIMARY KEY,
  NombreMunicipio VARCHAR(100) NOT NULL,
  idDepartamento INT NOT NULL,
  FOREIGN KEY (idDepartamento) REFERENCES Departamento (idDepartamento)
);

-- Insertar los municipios de Santander
INSERT INTO Municipio (NombreMunicipio, idDepartamento) VALUES
  ('Bucaramanga', 1),
  ('Piedecuesta', 1),
  ('Floridablanca', 1),
  ('Giron', 1);

-- Crear la tabla Comuna
CREATE TABLE Comuna (
  idComuna INT AUTO_INCREMENT PRIMARY KEY,
  nombreComuna VARCHAR(100) NOT NULL,
  idMunicipio INT NOT NULL,
  FOREIGN KEY (idMunicipio) REFERENCES Municipio (idMunicipio)
);

-- Crear la tabla Barrio
CREATE TABLE Barrio (
  idBarrio INT AUTO_INCREMENT PRIMARY KEY,
  nombreBarrio VARCHAR(100) NOT NULL,
  idComuna INT NOT NULL,
  FOREIGN KEY (idComuna) REFERENCES Comuna (idComuna)
);

-- Crear la tabla Creyente
CREATE TABLE Creyente (
  ididentificacion INT AUTO_INCREMENT PRIMARY KEY,
  nombres VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  NroCelular VARCHAR(20) NOT NULL,
  dirección VARCHAR(200) NOT NULL,
  IdBarrio INT NOT NULL,
  FOREIGN KEY (IdBarrio) REFERENCES Barrio (idBarrio)
);
