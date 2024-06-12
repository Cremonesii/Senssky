var motorModel = require("../models/motorModel");

function buscarAquariosPorEmpresa(req, res) {
  var idUsuario = req.params.idUsuario;

  motorModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var descricao = req.body.descricao;
  var idUsuario = req.body.idUsuario;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    motorModel.cadastrar(descricao, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function TotaldeAvioes(req, res) {
  const idAquario = req.params.idAquario;
  // const empresaId = req.params.empresaId;

  motorModel.TotaldeAvioes(idAquario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log("Houve um erro ao buscar os aviões: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function MediaAvioes(req, res) {
  let fkEmpresa = req.params.fkEmpresa;

  motorModel.MediaAvioes(fkEmpresa)
      .then((resultado) => {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).json([]);
          }
      })
      .catch(function (erro) {
          console.log("Houve um erro ao buscar os aviões: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
}

function TemperaturaMaxMin(req, res) {
  const idAquario = req.params.idAquario;
  motorModel.TemperaturaMaxMin(idAquario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log("Houve um erro ao buscar os aviões: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function QuantidadeAVioesAlerta(req, res) {
  const idAquario = req.params.idAquario;
  const empresaId = req.params.empresaId;

  motorModel.QuantidadeAVioesAlerta(idAquario, empresaId).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log("Houve um erro ao buscar os aviões: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar,
  TotaldeAvioes,
  MediaAvioes,
  TemperaturaMaxMin,
  QuantidadeAVioesAlerta
}
