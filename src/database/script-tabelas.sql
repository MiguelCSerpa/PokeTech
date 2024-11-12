CREATE DATABASE projetoindividual;
USE projetoindividual;

Create table Usuario(
idUsuario int primary key auto_increment,
nome_completo varchar(50),
email varchar(100),
genero varchar(25),
nascimento date,
senha varchar(30)
);

CREATE TABLE Pergunta(
idPergunta int primary key auto_increment,
resposta_certa char(3),
fkQuiz int, constraint fkQuizPergunta foreign key(fkQuiz)
	references Quiz(idQuiz)
);

CREATE TABLE Quiz(
idQuiz int primary key auto_increment,
nome varchar(25)
);

CREATE TABLE Tentativa(
fkPergunta int, constraint fkTentativaPergunta foreign key(fkPergunta)
	references Pergunta(idPergunta),
fkUsuario int, constraint fkTentativaUsuario foreign key(fkUsuario)
	references Usuario(idUsuario),
    constraint pkTentativaPerguntaUsuario primary key(fkUsuario, fkPergunta)
);