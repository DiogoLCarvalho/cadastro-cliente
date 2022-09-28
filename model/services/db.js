// Função para conectar com o Banco de dados
// npm install mysql2
// async a resposta não vem na hora, ele aguarda a conexão ser criada, isso porque o banco de dados pode demorar um pouco para responder

async function conectarComBD() {
    // Confirma se está conectado, se tiver conexão retorne a própria conexão
    if (global.connection && global.connection.state !== 'disconnected') {
        return global.connection;
    }

    // Se não tiver uma conexão ele cria uma
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/webii"); // Aqui vc espera a conexão com o Banco de dados
    console.log("Conectou com o Mysql");
    global.connection = connection; // Vc atribui a conexão a var global = Para cair no if acima se a conexão estiver aberta

    return connection;
}

// Função para selecionar os dados do Banco de dados
async function selectUsuario(){
    // Devolve um array com os dados do usuário do banco de dados
    const conn = await conectarComBD();
    const [rows] = await conn.query("select * from usuario;");
    return rows;
}

async function inserirUsuario(usuario){
    const conn = await conectarComBD(); // Abre a conexão
    const sql = "insert into usuario (nome, senha) value (?,?);"  // Cria uma string com o templete do insert
    const values = [usuario.nome, usuario.senha]; // Pegas os valores do objeto usuário (parâmetro)
    return await conn.query(sql, values);
}


async function deletarUsuario(id) {
    const conn = await conectarComBD();
    const sql = "delete from usuario where id=?;";
    return await conn.query(sql, [id]);
}


async function updateUsuario(id,usuario) {
    const conn = await conectarComBD();
    const sql = "update usuario set nome=? senha=? where id=?;";
    const values = [usuario.nome, usuario.senha, id];
    return await conn.query(sql, values);   
}


module.exports = {selectUsuario,inserirUsuario,deletarUsuario,updateUsuario};