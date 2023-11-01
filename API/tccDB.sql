create database testesMF;
drop database testesMF;
use testesMF;

create table tb_cliente (
	id_cliente int primary key auto_increment not null,
	nm_cliente varchar (100) not null,
	ds_telefone varchar (200) not null,
	ds_cpf varchar (200) not null,
	ds_email varchar (200) not null,
	ds_senha varchar (200) not null, 
	ds_genero varchar (200) not null,
	ds_celular varchar (200) not null,
	dt_nascimento date not null
);

create table tb_adm (
	id_adm			int primary key auto_increment not null,
    ds_email		varchar(200) not null,
    ds_senha        varchar(200) not null
);

create table tb_endereco (
	id_endereco int primary key auto_increment not null,
	ds_cep varchar (200) not null,
	ds_endereco varchar (200) not null,
	nr_endereco varchar (200) not null,
	ds_bairro varchar (200) not null
);

CREATE TABLE tb_categoria (
	id_categoria INT primary key auto_increment NOT NULL,
	nm_categoria varchar(200) not null,
    img_capa varchar(200) not null
);

CREATE TABLE tb_produto (
	id_produto INT primary key auto_increment NOT NULL,
    id_categoria int not null,
	ds_categoria varchar(200) not null,
	nm_produto varchar(200),
	ds_marca varchar(200),
	vl_preco decimal,
	qtd_disponivel integer,
	ds_medida varchar (200),
    FOREIGN KEY (id_categoria) REFERENCES tb_categoria(id_categoria)
);


create table tb_produto_imagem (
	id_produto_imagem int primary key auto_increment,
	id_produto int,
	img_produto int,
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);

CREATE TABLE tb_pedido (
    id_pedido INT PRIMARY KEY auto_increment NOT NULL ,
    id_endereco int not null,
    id_cliente int not null,
    id_pagamento VARCHAR(255),
    ds_nota_fiscal VARCHAR(255),
    qtd_parcelas INT,
    dt_pedido DATETIME,
    ds_situacao VARCHAR(255),
    vl_frete DECIMAL,
    ds_pagamento VARCHAR(255),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente),
    FOREIGN KEY (id_endereco) REFERENCES tb_endereco(id_endereco)
);



CREATE TABLE tb_pedido_item (
    id_pedido_item INT primary key auto_increment NOT NULL,
    id_pedido INT,
    id_produto INT,
    qtd_items INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);


