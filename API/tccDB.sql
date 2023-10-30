create database tccDB;
use tccDB;

create table tb_cliente (
	id_cliente int primary key auto_increment,
	nm_cliente varchar (100) not null,
	ds_telefone varchar (200) not null,
	ds_cpf varchar (200) not null,
	ds_email varchar (200) not null,
	ds_senha varchar (200) not null, 
	ds_genero varchar (200) not null,
	ds_fixo varchar (200) not null,
	dt_nascimento date not null
);


create table tb_adm (
	id_adm			int primary key auto_increment,
    ds_email		varchar(200) not null,
    ds_senha        varchar(200) not null
);


create table tb_produto (
	id_produto int primary key auto_increment,
	nm_produto varchar(200) not null,
	ds_categoria varchar(200) not null,
	ds_marca varchar(200) not null,
	vl_preco decimal not null,
	bt_disponivel boolean not null,
	qtd_disponivel int not null,
	ds_medida varchar(200) not null
);


select * from tb_cliente;


select id_cliente       as id,
             nm_cliente       as nome,
             ds_telefone      as telefone,
             ds_cpf           as cpf,
             ds_email         as email,
             ds_senha         as senha,
             ds_genero        as genero,
             ds_fixo          as fixo,
             dt_nascimento    as nascimento
        from tb_cliente
       where ds_email = "numoqseila@gmail.com"
         and ds_senha = "12345678"
