
/*
comandos para mysql server
*/

create DATABASE senssky;
USE senssky;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    cargo VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table motor (	
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);
/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */
create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_motor INT,
	FOREIGN KEY (fk_motor) REFERENCES motor(id)
);


insert into medida (dht11_temperatura, fk_motor, momento) values (20 + 30, 1, now());
 select * from medida;
-- SELECT UTIL
select * from usuario;

select * from medida;

select avg(dht11_temperatura) from medida where fk_motor = 1;
select * from motor;

select max(dht11_temperatura), min(dht11_temperatura) from medida where fk_motor = 1;

select avg(me.dht11_temperatura) as mediaGeral from empresa as e join motor as m on fk_empresa = e.id
JOIN medida as me on fk_motor = m.id where m.fk_empresa = 2;

select count(m.descricao) as alertas from empresa as e join motor as m on fk_empresa = e.id
JOIN medida as me on fk_motor = m.id where m.fk_empresa = 1 group by me.dht11_temperatura > 80;

select * from medida;

-- INSERT DAS EMPRESAS (COMO POR EXEMPLO A GOL E A LATAM)
insert into empresa (razao_social, cnpj) values ('Empresa 1', 'Gol');
insert into empresa (razao_social, cnpj) values ('Empresa 2', 'Latam');

-- INSERT DOS AS AVIÕES ONDE IRÁ APARECER NA DASHBOARD (OLHE A FK)
insert into motor (descricao, fk_empresa) values ('Embraer 195', 1);
insert into motor (descricao, fk_empresa) values ('Boeing 787', 1);
insert into motor (descricao, fk_empresa) values ('Airbus A380', 2);
select * from motor;

-- INSERT FEITO PELO ARDUINO (API dat-acqu-ino)
insert into medida (dht11_temperatura, fk_motor, momento) values (100, 1, now());
insert into medida (dht11_temperatura, fk_motor, momento) values (66, 3, now());
insert into medida (dht11_temperatura, fk_motor, momento) values (70, 2, now());
insert into medida (dht11_temperatura, fk_motor, momento) values (90,  5, now());