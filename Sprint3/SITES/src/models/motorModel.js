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

function TotaldeAvioes(idAquario) {

  var instrucaoSql = `SELECT * FROM motor WHERE id = ${idAquario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function MediaAvioes(fkEmpresa) {
  var instrucaoSql = `select round(avg(me.dht11_temperatura)) as MediaTemperatura from empresa as e join motor as m on fk_empresa = e.id
JOIN medida as me on fk_motor = m.id where m.fk_empresa = ${fkEmpresa};`;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function TemperaturaMaxMin(idAquario) {

  var instrucaoSql = `select max(dht11_temperatura) as Max, min(dht11_temperatura) as Min from medida where fk_motor = ${idAquario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function QuantidadeAVioesAlerta(idAquario) {

  var instrucaoSql = `SELECT * FROM motor WHERE id = ${idAquario}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  TotaldeAvioes,
  MediaAvioes,
  TemperaturaMaxMin,
  QuantidadeAVioesAlerta
}
