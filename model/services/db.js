// Função para conectar com o Banco de dados
// npm install mysql2

async function conectarComBD() {
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/webii");
    console.log("Conectou com o Mysql");
    global.connection = connection;

    return connection;
}

// Função para selecionar os dados do Banco de dados
async function selectUsuario(){
    const conn = await conectarComBD();
    const [rows] = await conn.query("select * from usuario;");
    return rows;
}

async function inserirUsuario(usuario){
    const conn = await conectarComBD();
    const sql = "insert into usuario (nome, senha) value (?,?);"
    const values = [usuario.name, usuario.senha];
    return await conn.query(sql, values);
}

module.exports = {selectUsuario,inserirUsuario};