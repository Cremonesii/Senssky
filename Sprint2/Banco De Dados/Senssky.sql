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
(default, 'Mateus', 'Cremonesi', '04241020', 'mateus..cremonesi@sptech.school', null, 1);

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

CREATE TABLE motor (
idMotor INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
temperatura_min DOUBLE,
temperatura_max DOUBLE,
arduino VARCHAR(45),
qtd_equipamento VARCHAR(45),
fkAeronave INT,
CONSTRAINT fkMotorAeronave FOREIGN KEY (fkAeronave) REFERENCES aeronave(idAeronave)
);

INSERT INTO motor VALUES 
(default, 'Motor TurboEixo', 60.0, 95.0, 'LM35', '1', 1);

create table registro (
idRegistro int primary key auto_increment,
temperatura double,
fkMotor int,
constraint fkRegistroMotor foreign key (fkMotor)
	references motor(idMotor));
    
insert into registro values 
	(default, 75.0 , 1)
	-- (default, 93.0 , 2)
	-- (default, 87.0 , 3)
    


