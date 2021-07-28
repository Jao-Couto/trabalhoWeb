CREATE DATABASE loja_de_hardware;
 
CREATE TABLE Cliente(
    CPF varchar(14) PRIMARY KEY NOT NULL,
    Nome varchar(128) NOT NULL,
    Email varchar(64) NOT NULL,
    Senha varchar(64) NOT NULL,
    CEP int(11) NOT NULL,
    Rua varchar(128) NOT NULL,
    Numero varchar(8) NOT NULL,
    Complemento varchar(32) NOT NULL,
    Bairro varchar(32) NOT NULL,
    Cidade varchar(32) NOT NULL,
    Pais varchar(32) NOT NULL
);
 
 
 
CREATE TABLE Telefone(
    CPF varchar(14) NOT NULL Primary Key,
    Numero varchar(17) NOT NULL,
    FOREIGN KEY (CPF) REFERENCES Cliente(CPF)
);
 
CREATE TABLE Marca(
    CNPJ varchar(18) NOT NULL Primary Key,
    Nome varchar(128) NOT NULL	
);
 
CREATE TABLE Categoria(
    Codigo int(11) NOT NULL Primary Key,
    Nome varchar(128) NOT NULL	
);
 
CREATE TABLE Forma_Pagamento(
    Codigo int(11) NOT NULL Primary Key,
    Tipo varchar(128) NOT NULL,
    Desconto float(4,2) NOT NULL	
);
 
 
 
CREATE TABLE Produto(
    Codigo int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Nome varchar(128) NOT NULL,
    Cod_Marca varchar(18) NOT NULL,
    FOREIGN KEY(Cod_Marca) REFERENCES Marca(CNPJ),
    Cod_Categoria int(11) NOT NULL,
    FOREIGN KEY(Cod_Categoria) REFERENCES Categoria(Codigo),
    Preco float(13,2) NOT NULL,
    Descricao text NOT NULL,
    URL_Img varchar(128) NOT NULL
);
 
CREATE TABLE Compra(
    Codigo int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Cod_Produto int(11) NOT NULL,
    FOREIGN KEY(Cod_Produto) REFERENCES Produto(Codigo),
    Cod_Cliente varchar(14) NOT NULL,
    FOREIGN KEY(Cod_Cliente) REFERENCES Cliente(CPF),
    Quantidade int(4) NOT NULL,
    Frete float(13,2) NOT NULL,
    DataHora datetime NOT NULL,
    Tempo_Entrega varchar(32) NOT NULL,
    Cod_Forma_Pag int(11) NOT NULL,
    FOREIGN KEY (Cod_Forma_Pag) REFERENCES Forma_Pagamento(Codigo)
);
 
