var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/info/genero", function(req, res){
    usuarioController.info(req,res)
})

router.get("/info2/nascimento", function(req, res){
    usuarioController.info2(req,res)
})

router.get("/kpi_gen/genero", function(req, res){
    usuarioController.kpi_gen(req,res)
})

module.exports = router;