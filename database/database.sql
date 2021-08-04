CREATE DATABASE loja_de_hardware;
 
CREATE TABLE Cliente(
    CPF varchar(14) PRIMARY KEY NOT NULL,
    Nome varchar(128) NOT NULL,
    Email varchar(64) NOT NULL UNIQUE,
    Senha varchar(64) NOT NULL,
    CEP varchar(9) NOT NULL,
    Rua varchar(128) NOT NULL,
    Numero varchar(8) NOT NULL,
    Complemento varchar(32),
    Bairro varchar(32) NOT NULL,
    Cidade varchar(32) NOT NULL,
    Pais varchar(32) NOT NULL,
    UF varchar(2) NOT NULL,
    Nascimento date NOT NULL
);
 
CREATE TABLE Telefone(
    CPF varchar(14) NOT NULL,
    Numero varchar(17) NOT NULL,
    FOREIGN KEY (CPF) REFERENCES Cliente(CPF),
    PRIMARY KEY (CPF, Numero)
);
 
CREATE TABLE Marca(
    CNPJ varchar(18) NOT NULL Primary Key,
    Nome varchar(128) NOT NULL	
);
 
CREATE TABLE Categoria(
    Codigo int(11) NOT NULL Primary Key auto_increment,
    Nome varchar(128) NOT NULL	
);
 
CREATE TABLE Forma_pagamento(
    Codigo varchar(30) NOT NULL Primary Key,
    Nome varchar(128) NOT NULL,
    Desconto float(4,2) NOT NULL
);

CREATE TABLE Produto(
    codigo int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome varchar(128) NOT NULL,
    CNPJ_Marca varchar(18) NOT NULL,
    FOREIGN KEY (CNPJ_Marca) REFERENCES Marca(CNPJ),
    Cod_Categoria int(11) NOT NULL,
    FOREIGN KEY (Cod_Categoria) REFERENCES Categoria(Codigo),
    preco float(13,2) NOT NULL,
    descricao text NOT NULL,
    img varchar(128) NOT NULL
);

CREATE TABLE Compra(
    Codigo int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Cod_Produto int(11) NOT NULL,
    FOREIGN KEY (Cod_Produto) REFERENCES Produto(Codigo),
    Cod_Cliente varchar(14) NOT NULL,
    FOREIGN KEY (Cod_Cliente) REFERENCES Cliente(CPF),
    Quantidade int(4) NOT NULL,
    Frete float(13,2) NOT NULL,
    DataHora datetime NOT NULL,
    Tempo_Entrega varchar(32) NOT NULL,
    Cod_Forma_Pag varchar(30) NOT NULL,
    FOREIGN KEY (Cod_Forma_Pag) REFERENCES Forma_Pagamento(Codigo)
);

INSERT INTO Categoria(Nome) value('HD/SSD'),('Placa de vídeo'),('Gabinete'),('Monitor'),('Processador'),('Placa-mãe'),('Memória RAM'),('Periféricos'),('Fonte'),('Console'),('Cooler');

INSERT INTO Marca(CNPJ,Nome) value('56.910.331/0001-13', 'Saga'),('07.567.999/0001-02', 'Gigabyte'),('07.567.999/0001-01', 'Sharkoon'),('07.567.999/0001-03', 'Acer'),('03.046.997/0001-01', 'Intel'),('03.046.997/0001-02', 'Gigabyte'),('03.046.997/0001-09', 'HyperX'),('92.494.768/0001-87', 'Redragon'),('30.145.343/0001-05', 'Logitech'),('68.673.728/0001-18', 'Corsair'),('85.610.390/0001-74', 'Microsoft'),('45.201.938/0001-08', 'Nintendo'),('95.607.034/0001-55', 'Sony'),('65.828.931/0001-28', 'ASUS'),('24.966.426/0001-62', 'PNY'),('89.881.526/0001-31', 'Biostar'),('32.711.499/0001-31', 'Cooler Master'),('82.935.660/0001-29', 'DeepCool');

INSERT INTO Forma_Pagamento(Codigo, Nome, Desconto) value('boleto','Boleto', '10'),('pix','PIX', '15'),('credito','Cartão de crédito', '0');
 
INSERT INTO Cliente value('111.111.111-11', 'José da Silva', 'jose@gmail.com', '12345678', '11111-111', 'Av. Brasil', '123', '', 'Morumbi', 'São Paulo', 'Brasil', 'SP', '1990-01-01');
 
INSERT INTO Telefone value('111.111.111-11', '(18) 99999-9999'),('111.111.111-11', '(18) 8888-8888');


INSERT INTO `produto` (`nome`, `CNPJ_Marca`, `Cod_Categoria`, `preco`, `descricao`, `img`) VALUES
('HD 2TB 7200RPM', '56.910.331/0001-13', 1, 499.19, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/TkzLZMX/HD2TB.jpg'),
('Gabinete TG4 Blue', '07.567.999/0001-01', 3, 159.80, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/8MJhwp6/TG4.jpg'),
('Placa de Vídeo RTX 3060 12GB', '07.567.999/0001-02', 2, 12999.90, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/YZkjvGY/RTX3060.jpg'),
('Monitor Aopen 27´', '07.567.999/0001-03', 4, 1999.80, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/BKnK8S9/AOPEN-27.jpg'),
('Processador i9-10800kfjy', '03.046.997/0001-01', 5, 15899.80, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/W5cBwGN/i9-10900k.jpg'),
('Placa-Mãe GA-AB350M-DS3H', '07.567.999/0001-02', 6, 689.80, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/N9fGnRg/GA-AB350-M.png'),
('Memória RAM Fury, 8GB, 2666MHz, DDR4', '03.046.997/0001-09', 7, 329.70, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/bNBdNX2/FURY-8GB.jpg'),
('Mouse Gamer Cobra', '92.494.768/0001-87', 8, 149.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/7JYr7XC/COBRA.png'),
('Teclado Gamer G213 Prodigy', '30.145.343/0001-05', 8, 139.90, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/3m6NBvm/G213-PROD.jpg'),
('Fonte 550W 80 Plus Bronze', '68.673.728/0001-18', 9, 349.90, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/L1dvXtb/500W-80P.jpg'),
('Console Xbox Series S 500gb Ssd', '85.610.390/0001-74', 10, 2799.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/Wgqs6nv/xbox-S.jpg'),
('Console Nintendo Switch', '45.201.938/0001-08', 10, 2495.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/3B51sx9/nintendo-Switch.jpg'),
('Sony Playstation 5 825gb', '95.607.034/0001-55', 10, 6994.90, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/RB5nzNk/ps5.jpg'),
('PLACA DE VIDEO ASUS GEFORCE RTX 2060 DUAL OC EDITION 6GB', '65.828.931/0001-28', 2, 5899.92, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/pdW4R0M/rtx2060.jpg'),
('SSD CS900 500GB 2.5 SATA III 6GB/S', '24.966.426/0001-62', 1, 549.01, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/wKxM8s4/ssd.jpg'),
('PLACA MAE B550MH DDR4', '89.881.526/0001-31', 6, 638.99, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/zH1CDH7/b550mh.jpg'),
('WATER COOLER COOLER MASTER MASTERLIQUID ML120L V2 RGB', '32.711.499/0001-31', 11, 369.50, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/HFstS9W/water-Cooler.jpg'),
('COOLER DEEPCOOL GAMMAXX 400S 120MM', '82.935.660/0001-29', 11, 115.00, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'https://i.ibb.co/F32Fzzr/cooler.jpg');
