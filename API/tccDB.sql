create database locadoraDB;

use locadoraDB;

create table tb_cliente (
	id_cliente int primary key auto_increment,
	id_genero int not null,
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
	id_categoria int not null,
	nm_produto varchar(200) not null,
	ds_marca varchar(200) not null,
	vl_preco decimal not null,
	bt_disponivel boolean not null,
	qtd_disponivel int not null,
	ds_medida varchar(200) not null
);


select * from tb_cliente;


select ve.id_veiculo			as id,
       tv.id_tipo_veiculo		as idTipoVeiculo,
       tv.ds_tipo				as tipo,
       ve.ds_modelo				as modelo,
       ve.ds_marca				as marca,
       ve.nr_ano				as ano,
       ve.ds_placa				as placa
  from tb_veiculo				as ve
  inner join tb_tipo_veiculo	as tv  ON tv.id_tipo_veiculo = ve.id_tipo_veiculo
  order 
     by id_veiculo;



insert into tb_cliente (nm_cliente, ds_cpf, ds_numero, ds_email, ds_cnh)
				values ('Cauan Paixão', '123.123.123-00', '(11) 9276-0278', 'Paixão24@gmail.com', '123123123123');

insert into tb_veiculo (id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa) 
				values (1, 'Prius', 'Toyota', 2020, 'ABC-124');
                
insert into tb_veiculo (id_tipo_veiculo, ds_modelo, ds_marca, nr_ano, ds_placa) 
				values (2, 'CG 160 Titan', 'Honda', 2017, 'ABC-126');


delete from tb_cliente where id_cliente = 2;


