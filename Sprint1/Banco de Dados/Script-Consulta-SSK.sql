USE SENSSKY;

-- comandos de consulta 

 -- dados completos das tabelas --
SELECT * FROM usuario;

SELECT * FROM empresa;

SELECT * FROM cargo;

  -- descrição das tabelas --
DESC usuario;
DESC empresa;
DESC cargo;

  -- usuario e seu cargo -- 
 
SELECT u.nome AS Funcionario,
	c.titulo AS cargo
    FROM cargo AS c JOIN usuario AS u
    ON c.idCargo = u.fkCargo;
    
  -- cargo empresa e funcionario --
    
SELECT u.nome AS Funcionario,
	c.titulo AS Cargo,
    e.nome AS Empresa
    FROM empresa AS e JOIN cargo AS c
    ON e.idEmpresa = c.fkEmpresa JOIN usuario AS u
    ON c.idCargo = u.fkCargo;

    
SELECT concat('O Funcionario ', u.nome) AS Funcionario,
	concat(' é um ', c.titulo)  AS Cargo,
    concat(' na ', e.nome) AS Empresa
    FROM empresa AS e JOIN cargo AS c
    ON e.idEmpresa = c.fkEmpresa JOIN usuario AS u
    ON c.idCargo = u.fkCargo;
    
    
  -- cargos e suas empresas
  
SELECT c.titulo AS Cargo,
	e.nome AS Empresa
    FROM cargo AS c JOIN empresa AS e
    ON e.idEmpresa = c.fkEmpresa;
    

SELECT concat('O cargo: ', c.titulo) AS Cargo,
	concat('pertence a: ', e.nome)  as Empresa
    FROM cargo AS c JOIN empresa AS e
    ON e.idEmpresa = c.fkEmpresa;
    

 -- Buscar pela empresa --

SELECT u.idUsu, c.titulo AS Cargo,
	u.nome AS Funcionario
    FROM empresa AS e JOIN cargo AS c
    ON e.idEmpresa = c.fkEmpresa JOIN usuario AS u
    ON c.idCargo = u.fkCargo WHERE idEmpresa = 1;
    

  -- busca pelo cargo --
  
  
SELECT c.titulo AS Cargo,
	u.nome AS Funcionario,
    e.nome AS empresa
    FROM cargo AS c JOIN usuario AS u
    ON c.idCargo = u.fkCargo JOIN empresa AS e
    ON e.idEmpresa = c.fkEmpresa WHERE titulo = 'Analista';
    
  -- Busca pelo usuario --    

SELECT concat('O Funcionario ', u.nome) AS Funcionario,
	concat(' é um ', c.titulo)  AS Cargo,
    concat(' na ', e.nome) AS Empresa
    FROM empresa AS e JOIN cargo AS c
    ON e.idEmpresa = c.fkEmpresa JOIN usuario AS u
    ON c.idCargo = u.fkCargo WHERE u.nome = 'Jonas';