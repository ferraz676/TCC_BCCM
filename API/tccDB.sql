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
	ds_cep varchar (200) not null,
	ds_endereco varchar (200) not null,
	nr_endereco varchar (200) not null,
	ds_bairro varchar (200) not null
);

CREATE TABLE tb_produto (
	id_produto INT primary key auto_increment NOT NULL,
	ds_categoria varchar(200) not null,
	nm_produto varchar(200),
	ds_marca varchar(200),
	vl_preco decimal,
	qtd_disponivel integer,
	ds_medida varchar (200),
    img_produto varchar(500)
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


select * from tb_produto;

select nm_produto      as produto,
            ds_marca        as marca,
            ds_categoria    as categoria,
            vl_preco        as preco,
            qtd_disponivel  as quantidade, 
            ds_medida       as medida
        from tb_produto;

insert into tb_cliente(nm_cliente, ds_telefone, ds_cpf, ds_email, ds_senha, ds_genero, ds_fixo, dt_nascimento)
values('João', '11 962978-2321', '123.123.121-45', 'joao123', 'joao123', 'Masculino', '', '2005-04-12');

insert into tb_produto(nm_produto, ds_marca, ds_categoria, vl_preco, qtd_disponivel, ds_medida)
values('Anabolizante', 'StarLab', 'BombaBomba', 99, 79, '10ml');

insert into tb_adm(ds_email, ds_senha)
values('matheus@adm.com', 'mamaco123');
