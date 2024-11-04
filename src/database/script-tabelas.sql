CREATE DATABASE projetoindividual;
USE projetoindividual;

Create table Usuario(
idUsuario int primary key auto_increment,
nome_completo varchar(50),
email varchar(100),
genero varchar(25),
nascimento date,
senha varchar(30),
confirmacao_senha varchar(30)
);

CREATE TABLE Sessao(
idSessao int primary key auto_increment,
inicio datetime,
fkUsuario int, constraint fksessaousuario foreign key(fkUsuario)
references Usuario(idUsuario)
);

CREATE TABLE Quiz(
idQuiz int primary key auto_increment,
nome varchar(25),
fkSessao int, constraint fkquizsessao foreign key(fkSessao)
	references Sessao(idSessao)
);

CREATE TABLE Dashboard(
idDash int primary key auto_increment,
media_genero varchar(45),
media_idade varchar(45),
fkSessao int, constraint fkdashsessao foreign key(fkSessao)
	references Sessao(idSessao)
);




