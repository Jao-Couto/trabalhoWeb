CREATE DATABASE loja_de_hardware;

CREATE TABLE Produtos(
    Codigo int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Nome varchar(128) NOT NULL,
    Marca varchar(25) NOT NULL,
    Categoria varchar(25) NOT NULL,
    Preco float(11) NOT NULL,
    Descri text NOT NULL,
    Img varchar(25) NOT NULL
);
