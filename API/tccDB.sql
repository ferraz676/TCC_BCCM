drop database BCCM_Supplements;

create database BCCM_Supplements;

use BCCM_Supplements;

create table tb_cliente (
	id_cliente int primary key auto_increment not null,
	nm_cliente varchar (100) not null,
	ds_telefone varchar (200) not null,
	ds_cpf varchar (200) not null,
	ds_email varchar (200) not null,
	ds_senha varchar (200) not null, 
	ds_genero varchar (200) not null,
	ds_fixo varchar (200),
	dt_nascimento date not null
);

create table tb_adm (
	id_adm			int primary key auto_increment not null,
    ds_email		varchar(200) not null,
    ds_senha        varchar(200) not null
);

create table tb_endereco (
	id_endereco int primary key auto_increment not null,
    id_cliente int not null,
	ds_cep varchar(200) not null,
	ds_endereco varchar (200) not null,
	nr_endereco int not null,
	ds_bairro varchar (200) not null,
    ds_complemento varchar(200),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente)
);

CREATE TABLE tb_produto (
	id_produto INT primary key auto_increment NOT NULL,
	ds_categoria varchar(200) not null,
	nm_produto varchar(200),
	ds_marca varchar(200),
	vl_preco decimal(10,2),
	qtd_disponivel integer,
	ds_medida varchar (200),
    img_produto varchar(500)
);

CREATE TABLE tb_pedido (
    id_pedido INT PRIMARY KEY auto_increment NOT NULL ,
    id_cliente int not null,
    id_endereco int not null,
    dt_pedido DATETIME,
    cod_nota_fiscal VARCHAR(255),
    tp_frete varchar(200),
    vl_frete DECIMAL(15,2),
    ds_status VARCHAR(255),
    tp_pagamento VARCHAR(255),
    FOREIGN KEY (id_cliente) REFERENCES tb_cliente(id_cliente),
    FOREIGN KEY (id_endereco) REFERENCES tb_endereco(id_endereco)
);



CREATE TABLE tb_pedido_item (
    id_pedido_item INT primary key auto_increment NOT NULL,
    id_pedido INT,
    id_produto INT,
    qtd_itens INT NOT NULL,
    vl_produto decimal(15,2),
    FOREIGN KEY (id_pedido) REFERENCES tb_pedido(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES tb_produto(id_produto)
);

create table tb_pagamento_cartao(
    id_pagamento_cartao INT PRIMARY KEY auto_increment,
    id_pedido   int,
    nm_cartao   varchar(200),
    nr_cartao   varchar(200),
    dt_vencimento   varchar(200),
    cod_seguranca   varchar(200),
    nr_parcelas      int,
    ds_forma_pagamento  varchar(200),
    foreign key (id_pedido) REFERENCES tb_pedido(id_pedido)
);