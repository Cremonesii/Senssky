var express = require("express");
var router = express.Router();

var motorController = require("../controllers/motorController");

router.get("/:empresaId", function (req, res) {
  motorController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  motorController.cadastrar(req, res);
})

router.get("/TotaldeAvioes/:idAquario", function (req, res) {
  console.log(1234567890)
  motorController.TotaldeAvioes(req, res);
});

module.exports = router;