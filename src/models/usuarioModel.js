var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome_completo, email FROM Usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, genero, nascimento, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO Usuario (nome_completo, email, genero, nascimento , senha) VALUES ('${nome}', '${email}', '${genero}', '${nascimento}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function info() {

    var instrucaoSql = `
       SELECT genero, Truncate((COUNT(*) / (SELECT COUNT(*) FROM Usuario)*100),1)AS quantidade FROM Usuario GROUP BY genero ORDER BY quantidade DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    console.log(database.executar(instrucaoSql));
    return database.executar(instrucaoSql);
}

function info2() {

    var instrucaoSql = `
       SELECT 
    CASE
        WHEN TIMESTAMPDIFF(YEAR, u.nascimento, CURDATE()) BETWEEN 0 AND 18 THEN '0-18'
        WHEN TIMESTAMPDIFF(YEAR, u.nascimento, CURDATE()) BETWEEN 19 AND 30 THEN '19-30'
        WHEN TIMESTAMPDIFF(YEAR, u.nascimento, CURDATE()) >= 31 THEN '31+'
        END AS faixa_etaria,
        Truncate((COUNT(*) / (SELECT COUNT(*) FROM Usuario)*100),1) AS total_usuarios
        FROM Usuario u
        GROUP BY faixa_etaria ORDER BY total_usuarios DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpi_gen() {

    var instrucaoSql = `
 SELECT COUNT(idUsuario) + 1 AS totalUsuarios FROM Usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar,
    info,
    info2,
    kpi_gen
};