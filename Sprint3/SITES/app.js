// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';
// Acima, temos o uso do operador ternário para definir o caminho do arquivo .env
// A sintaxe do operador ternário é: condição ? valor_se_verdadeiro : valor_se_falso

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var aquariosRouter = require("./src/routes/aquarios");
var empresasRouter = require("./src/routes/empresas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter);
app.use("/aquarios", aquariosRouter);
app.use("/empresas", empresasRouter);

app.listen(PORTA_APP, function () {
    console.log(`
        Você está rodando sua aplicação em ambiente de .:${process.env.AMBIENTE_PROCESSO}:. \n\n
    \tSe .:desenvolvimento:. você está se conectando ao banco local. \n
    \tSe .:producao:. você está se conectando ao banco remoto. \n\n
    \t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'\n\n

    
//.....................................................................................................................
//....SSSSSSSSSS....EEEEEEEEEEEEEE..NNNNNN....NNNNN....SSSSSSSSSS......SSSSSSSSSS.....KKKK.....KKKKKKKYYYYY.....YYYYY..
//...SSSSSSSSSSSS...EEEEEEEEEEEEEE..NNNNNN....NNNNN...SSSSSSSSSSSS....SSSSSSSSSSSS....KKKK....KKKKKKK.YYYYYY....YYYYY..
//..SSSSSSSSSSSSS...EEEEEEEEEEEEEE..NNNNNNN...NNNNN..SSSSSSSSSSSSSS..SSSSSSSSSSSSSS...KKKK...KKKKKKK..YYYYYY...YYYYYY..
//..SSSSSS.SSSSSSS..EEEEE...........NNNNNNNN..NNNNN..SSSSSSS.SSSSSS..SSSSSSS.SSSSSS...KKKK..KKKKKKK....YYYYYY..YYYYY...
//..SSSSS....SSSSS..EEEEE...........NNNNNNNN..NNNNN..SSSSS....SSSSS..SSSSS....SSSSS...KKKK.KKKKKKK......YYYYY.YYYYYY...
//..SSSSSSS.........EEEEE...........NNNNNNNNN.NNNNN..SSSSSSS.........SSSSSSS..........KKKKKKKKKKK.......YYYYYYYYYYY....
//..SSSSSSSSSS......EEEEE...........NNNNNNNNN.NNNNN..SSSSSSSSSSS.....SSSSSSSSSSS......KKKKKKKKKK.........YYYYYYYYYY....
//...SSSSSSSSSSSS...EEEEEEEEEEEEEE..NNNNNNNNNNNNNNN...SSSSSSSSSSSS....SSSSSSSSSSSS....KKKKKKKKKK..........YYYYYYYY.....
//....SSSSSSSSSSSS..EEEEEEEEEEEEEE..NNNNNNNNNNNNNNN....SSSSSSSSSSSS....SSSSSSSSSSSS...KKKKKKKKKKK.........YYYYYYY......
//......SSSSSSSSSS..EEEEEEEEEEEEEE..NNNNNNNNNNNNNNN......SSSSSSSSSSS.....SSSSSSSSSSS..KKKKKKKKKKKK.........YYYYYY......
//..........SSSSSS..EEEEE...........NNNNN.NNNNNNNNN..........SSSSSSS.........SSSSSSS..KKKKKKKKKKKK.........YYYYY.......
//.SSSSS......SSSSS.EEEEE...........NNNNN.NNNNNNNNN.NSSSSS.....SSSSSSSSSSS.....SSSSS..KKKKK..KKKKKK........YYYYY.......
//.SSSSSS....SSSSSS.EEEEE...........NNNNN..NNNNNNNN..SSSSS.....SSSSS.SSSSS.....SSSSS..KKKK...KKKKKKK.......YYYYY.......
//..SSSSSSSSSSSSSS..EEEEE...........NNNNN...NNNNNNN..SSSSSSS.SSSSSSS.SSSSSSS.SSSSSSS..KKKK....KKKKKK.......YYYYY.......
//..SSSSSSSSSSSSSS..EEEEEEEEEEEEEEE.NNNNN...NNNNNNN..SSSSSSSSSSSSSS..SSSSSSSSSSSSSS...KKKK.....KKKKKK......YYYYY.......
//...SSSSSSSSSSSS...EEEEEEEEEEEEEEE.NNNNN....NNNNNN...SSSSSSSSSSSSS...SSSSSSSSSSSSS...KKKK.....KKKKKKK.....YYYYY.......
//....SSSSSSSSSS....EEEEEEEEEEEEEEE.NNNNN....NNNNNN....SSSSSSSSSS......SSSSSSSSSS.....KKKK......KKKKKK.....YYYYY.......
//.....................................................................................................................
    \n                                                                                               
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP} :. \n\n
    `);
});
