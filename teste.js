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

// Criar e rodar servidor
app.listen(8081, () => {
    console.log("Será que eu lembro o código?");
});
