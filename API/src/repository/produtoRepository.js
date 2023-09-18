import con from "./connection.js";


export async function inserir(produto) {
  let comando = `
      insert into tb_produto (nm_produto, ds_marca, vl_preco, bt_disponivel, qtd_disponivel, ds_medida)
                      values (?, ?, ?, ?, ?, ?)
      `

  let [resp] = await con.query(comando,
    [
      produto.nome,
      produto.marca,
      produto.preco,
      produto.disponivel,
      produto.quantidade,
      produto.medida
    ])
  
  cliente.id = resp.insertId;
  return cliente;
}

export async  function consultar(nome) {
  let comando = `
     select nm_produto      as nome,
            ds_marca        as marca,
            vl_preco        as preco, 
            bt_disponivel   as disponivel, 
            qtd_disponivel  as quantidade, 
            ds_medida       as medida,
        from tb_produto			as ve
        inner join tb_categoria	as tv  ON tv.id_categoria = ve.id_categoria
        where nm_produto like  ?
  `

  let [dados] = await con.query(comando, ['%' + nome + '%'])
  return dados;
}



export async function alterar(id, produto) {
  let comando = `
      update tb_produto
         set nm_produto     = ?,
             ds_marca       = ?,
             vl_preco       = ?,
             bt_disponivel  = ?,
             qtd_disponivel = ?,
             ds_medida      = ?,
       where id_produto     = ?
  `

  let [resp] = await con.query(comando,
    [
      produto.nome,
      produto.marca,
      produto.preco,
      produto.disponivel,
      produto.quantidade,
      produto.medida,
      id
    ])
  
  return resp.affectedRows;
}

export async function deletar(id) {
  let comando = `
      delete from tb_produto
            where id_produto = ?
  `

  let [resp] = await con.query(comando, [id]);
  return resp.affectedRows;
}
