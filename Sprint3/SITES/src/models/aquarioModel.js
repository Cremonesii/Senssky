var database = require("../database/config");

function buscarAquariosPorEmpresa(empresaId) {

  var instrucaoSql = `SELECT * FROM motor a WHERE fk_empresa = ${empresaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(empresaId, descricao) {

  var instrucaoSql = `INSERT INTO (descricao, fk_empresa) aquario VALUES (${descricao}, ${empresaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function TotaldeAvioes(idAquario, empresaId) {
  var instrucaoSql = `
    SELECT AVG(medida.dht11_temperatura) AS MediaTemperatura
    FROM motor
    JOIN medida ON motor.id = medida.fk_motor
    JOIN usuario ON motor.fk_usuario = usuario.id
    JOIN empresa ON usuario.fk_empresa = empresa.id
    WHERE motor.fk_usuario = ${idAquario} AND empresa.id = ${empresaId}
  `;
  
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  TotaldeAvioes
}
