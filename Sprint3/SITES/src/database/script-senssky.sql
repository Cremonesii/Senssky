create database senssky;
use senssky;

create table empresa(
idEmpresa int primary key auto_increment, 
nome varchar(45),
cnpj char(14));

insert into empresa values
(default, 'Azul', '47865061000185');
-- (default, 'Gol', '47865061000185'),
-- (default, 'LATAM', '47865061000185');
-- A gente só esta usando uma empresa como exemplo, porém se quiser adicionar mais está ai o insert para adicionar


create table usuario(
idUsuario int primary key auto_increment, 
nome varchar(45) not null,
sobrenome varchar(45) not null,
senha varchar(45) not null,
email varchar(45) not null,
cargo varchar(45),
fkEmpresa int,
	constraint fkUsuarioEmpresa foreign key (fkEmpresa)
		references empresa (idEmpresa),
	constraint chk_email check (email like '%@%'));
    
insert into usuario values 
(default, 'Vinícius', 'Carvalho', '04241030', 'vinicius.carvalho@sptech.school', null, 1),
(default, 'Mateus', 'Cremonesi', '04241020', 'mateus.cremonesi@sptech.school', null, 1);

create table aeronave (
	idAeronave int primary key auto_increment,
    nome varchar(45),
    modelo varchar(45),
    fkempresa int,
    CONSTRAINT FkEmpresa foreign key (fkempresa) references empresa(idEmpresa)
);

insert into aeronave values
(default, 'Aeronave 737', 'Boeing 737', 1);
-- (default, 'Aeronave A320', 'Airbus A320', 1),
-- (default, 'Aeronave 787', 'Boeing 787 Dreamliner', 1);
-- Aeronaves que usam o motor turbo fan, coloquei uma nave só devido a quantidade de empresas, se tiver mais inserts de empresa
-- Acrescenta essas duas aeronaves a mais

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE motor (
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

INSERT INTO motor VALUES 
(default, 'Motor TurboEixo', 60.0, 95.0, 'LM35', '1', 1);

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_motor INT,
	FOREIGN KEY (fk_motor) REFERENCES motor(id)
    );

	select * from usuario;
   	select * from registro;	

