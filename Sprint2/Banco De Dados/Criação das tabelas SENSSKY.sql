create database senssky;
use senssky;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
senha varchar(45),
email varchar(45),
cargo varchar(45),
fkempresa int,
constraint fkusuarioempresa foreign key (fkempresa) references empresa (idempresa)
);

create table empresa (
idempresa int primary key auto_increment,
nome varchar(45),
cnpj char(14)
);

create table aeronave (
idaeronave int primary key auto_increment,
nome varchar(45),
modelo varchar(45),
fkempresa int,
constraint fkaeronaveempresa foreign key (fkempresa) references empresa (idempresa)
);

create table motor (
idmotor int primary key auto_increment,
nome varchar(45),
temperatura_min double,
temperatura_max double,
arduino varchar(45),
qtd_equipamento varchar(45),
fkaeronave int,
constraint fkaeronavemotor foreign key (fkaeronave) references aeronave (idaeronave)
);

create table registro (
idregistro int primary key auto_increment,
temperatura double,
dtHora datetime default current_timestamp,
fkmotor int,
constraint fkregistromotor foreign key (fkmotor) references motor (idmotor)
);




