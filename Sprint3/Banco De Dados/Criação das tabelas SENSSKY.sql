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
constraint fkusuarioempresa foreign key (fkempresa) references empresa (idempresa),
constraint chkcargo check (cargo in ('gerente','dono','operador'))
);

insert into usuario values 
(default, 'joao', 'ramos', 'raminhos', 'joao.ramos@gmail.com', 'gerente', '1'), 
(default, 'felipe', 'alves', 'alvin', 'felipe.alves@gmail.com', 'dono', '1'), 
(default, 'lucas', 'lopes', 'remulo', 'lucas.lopes@gmail.com', 'operador', '1'); 



create table empresa (
idempresa int primary key auto_increment,
nome varchar(45),
cnpj char(14)
);

insert into empresa values 
(default, 'azul', '12345678912345');

create table aeronave (
idaeronave int primary key auto_increment,
nome varchar(45),
modelo varchar(45),
fkempresa int,
constraint fkaeronaveempresa foreign key (fkempresa) references empresa (idempresa)
);

insert into aeronave values
(default, 'aeronave1', 'boing775', '1'),
(default, 'aeronave2', 'boing668', '1');

create table motor (
idmotor int primary key auto_increment,
nome varchar(45),
temperatura_min double,
temperatura_max double,
qtd_equipamento varchar(45),
fkaeronave int,
constraint fkaeronavemotor foreign key (fkaeronave) references aeronave (idaeronave)
);

insert into motor values 
(default, 'turbo fan','85','120','2','1'),
(default, 'turbo fan','89','115','2','2');

create table registro (
idregistro int primary key auto_increment,
temperatura double,
dtHora datetime default current_timestamp,
fkmotor int,
constraint fkregistromotor foreign key (fkmotor) references motor (idmotor)
);

insert into registro values 
(default, 95, default, 1),
(default, 89, default, 2);




