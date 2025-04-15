<!-- Script de criação do banco -->

CREATE DATABASE Pensamento_DB;

USE Pensamento_DB;

CREATE TABLE Pensamento (
 Id INT PRIMARY KEY IDENTITY(1,1),
 Pensamento VARCHAR(300) NOT NULL,
 Autor VARCHAR(50) NOT NULL,
 Modelo INT NOT NULL
);