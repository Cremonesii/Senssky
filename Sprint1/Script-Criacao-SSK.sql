DROP DATABASE SENSSKY;
CREATE DATABASE SENSSKY;
USE SENSSKY;

-- criação das tabelas

CREATE TABLE empresa(
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    cnpj CHAR(14) UNIQUE NOT NULL
);

CREATE TABLE cargo(
	idCargo INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(30) NOT NULL,
	fkEmpresa INT NOT NULL,
    CONSTRAINT fkEmpresa FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa)
);


CREATE TABLE usuario(
	idUsu INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    sobrenome VARCHAR(60) NOT NULL,
    senha VARCHAR(60) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    fkCargo INT NOT NULL,
    CONSTRAINT chk_email CHECK(
    email LIKE '%@%' 
    AND email LIKE '%.%' 
    AND email NOT LIKE '%@.%'
    AND email NOT LIKE '%.@%'),
    CONSTRAINT fkCargo FOREIGN KEY (fkCargo)
		REFERENCES cargo(idCargo)
);

-- População do banco

INSERT INTO empresa VALUES
(DEFAULT, 'Azulam', '12345678932165'),
(DEFAULT, 'Latão ', '98765432198765'),
(DEFAULT, 'Golaço', '33156584651318');


INSERT INTO cargo VALUES
(DEFAULT, 'Supervisor', 1),
(DEFAULT, 'Analista', 1),
(DEFAULT, 'Gerente', 2),
(DEFAULT, 'Operador', 2),
(DEFAULT, 'Supevisor', 3),
(DEFAULT, 'Analista', 3),
(DEFAULT, 'Tecnico', 2);

INSERT INTO usuario VALUES
(DEFAULT,'Jonas', 'Souza', '123456', 'jonas@email.com',2),
(DEFAULT,'Maria', 'Silva', '654321', 'maria@email.com',3),
(DEFAULT,'Josafar', 'Antunes', '123954548', 'josafar@email.com',7);