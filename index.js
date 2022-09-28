// importar express
const express = require('express');
const app = express();

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------  */

// Rotas

// Res = requisição | Resp = Resposta
// get("Aqui é a rota") | get("/Diogo")
app.get("/", (res, resp) => {
    resp.send("Oi meu chapa 🐱‍🐉");
});

app.get("/contato", (res, resp) => {
    resp.send("Você está na página de contato 🎂");
});

app.get("/produto", (res, resp) => {
    resp.send("Você está na página de produto 🐱‍🚀");
});

// Parâmetros na url
app.get("/dados/:nome/:cargo", (res, resp)=>{
    resp.send(`<h1 style='text-align: center; color:#C70039;'> Oi meu chapa ${res.params.nome}</h1> <h2 style='text-align: center;'>Seu cargo é de ${res.params.cargo}</h2>`);
});

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------  */

// TESTANDO CONEXÂO COM O BANCO DE DADOS

import db from "./model/services/db";

console.log("SELECT * FROM ");
const usuarios = await db.selectUsuario();
console.log(usuarios);

console.log("INSERT INTO USUARIO");
const result = await db.inserirUsuario({nome:"Diogo", senha:"uihdssauihus783"});
console.log(result);

console.log("DELETE FROM USUARIO");
const deleteResult = await db.deletarUsuario(2);
console.log(deleteResult);

console.log("UPDATE USUARIO");
const updateResult = await db.updateUsuario(3, {nome:"Diogo Lima Carvalho", senha:"hhjdhjjdsd7368"});
console.log(updateResult);


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------  */

// Criar e rodar servidor
app.listen(8081, () => {
    console.log("Será que eu lembro o código?");
});
