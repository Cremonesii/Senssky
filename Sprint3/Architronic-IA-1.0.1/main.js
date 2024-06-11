// importando os bibliotecas necessárias
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const path = require("path");

// carregando as variáveis de ambiente do projeto do arquivo .env
require("dotenv").config();

// configurando o servidor express
const app = express();
const PORTA_SERVIDOR = process.env.PORTA;

// configurando o gemini (IA)
const chatIA = new GoogleGenerativeAI(process.env.MINHA_CHAVE);

// configurando o servidor para receber requisições JSON
app.use(express.json());

// configurando o servidor para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// configurando CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    next();
});

// inicializando o servidor
app.listen(PORTA_SERVIDOR, () => {
    console.info(
        `
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
        `
    );
    console.info(`A API Architronic iniciada, acesse http://10.18.32.84:${PORTA_SERVIDOR}`);
});

// rota para receber perguntas e gerar respostas
app.post("/perguntar", async (req, res) => {
    const pergunta = req.body.pergunta;

    try {
        const resultado = await gerarResposta(pergunta);
        res.json( { resultado } );
    } catch (error) {
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

});

// função para gerar respostas usando o gemini
async function gerarResposta(mensagem) {
    // obtendo o modelo de IA
    const modeloIA = chatIA.getGenerativeModel({ model: "gemini-pro" });

    try {
        // gerando conteúdo com base na pergunta
        const resultado = await modeloIA.generateContent(`Em um paragráfo responda: ${mensagem}`);
        const resposta = await resultado.response.text();
        
        console.log(resposta);

        return resposta;
    } catch (error) {
        console.error(error);
        throw error;
    }
}