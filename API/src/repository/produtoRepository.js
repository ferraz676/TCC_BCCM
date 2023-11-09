import con from "./connection.js";


export async function inserir(produto) {
  const comando = 
      `
      insert into tb_produto (nm_produto, ds_marca, ds_categoria, vl_preco, qtd_disponivel, ds_medida)
                      values (?, ?, ?, ?, ?, ?)
      `

  const [resp] = await con.query(comando,
    [
      produto.produto,
      produto.marca,
      produto.categoria,
      produto.preco,
      produto.quantidade,
      produto.medida
    ])
    produto.id = resp.insertId;
    return produto; 
}


export async function enviarImagemProduto(imagem, id){
    let comando =
  `
    UPDATE tb_produto
        SET img_produto = ?
    WHERE   id_produto  = ?
    
  `

  const [resposta] = await con.query(comando, [imagem, id]);
  return resposta.affectedRows;
}





export async  function consultarNomeProdutos(produto) {
  let comando = `
     select id_produto      as id,
            nm_produto      as produto,
            ds_marca        as marca,
            ds_categoria    as categoria,
            vl_preco        as preco,
            qtd_disponivel  as quantidade, 
            ds_medida       as medida
        from tb_produto			
        where nm_produto    like    ?    
  `

  const [dados] = await con.query(comando, [  `% ${produto} %`  ]);
  return dados;
}

export async  function consultarTodosProdutos() {
  let comando = `
     select id_produto      as id,
            nm_produto      as produto,
            ds_marca        as marca,
            ds_categoria    as categoria,
            vl_preco        as preco,
            qtd_disponivel  as quantidade, 
            ds_medida       as medida
        from tb_produto		
  `

  const [dados] = await con.query(comando);
  return dados;
}



export async function alterar(id, produto) {
  let comando = `
      update tb_produto
         set nm_produto     = ?,
             ds_categoria   = ?,
             ds_marca       = ?,
             vl_preco       = ?,
             qtd_disponivel = ?,
             ds_medida      = ?,
       where id_produto     = ?  
  `

  let [resp] = await con.query(comando,
    [
      produto.nome,
      produto.marca,
      produto.categoria,
      produto.preco,
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
