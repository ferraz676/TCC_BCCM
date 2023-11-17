import con from "./connection.js";

export async  function consultarEndereco() {
  let comando = `
      select id_endereco      as id,
             id_cliente       as idCliente,
             ds_cep           as cep,
             ds_endereco      as endereco,
             nr_endereco      as numero,
             ds_bairro        as bairro,
             ds_complemento   as complemento
        from tb_endereco
  `

  const [dados] = await con.query(comando)
  return dados;
}


export async  function consultarIdUsuarioEndereco(idCliente) {
  const comando = `
   select id_endereco      as id,
          id_cliente       as idCliente,
          ds_cep           as cep,
          ds_endereco      as endereco,
          nr_endereco      as numero,
          ds_bairro        as bairro,
          ds_complemento   as complemento
      from tb_endereco	
      where id_cliente = ?
  `
  const [dados] = await con.query(comando, [idCliente]);
  return dados;
}

export async function inserirEndereco(idCliente, endereco ) {
  const comando = 
      `
      insert into tb_endereco (id_cliente, ds_cep, ds_endereco, nr_endereco, ds_bairro, ds_complemento)
                      values (?, ?, ?, ?, ?, ?)
      `

  const [resp] = await con.query(comando,
    [
      idCliente, 
      endereco.cep, 
      endereco.endereco, 
      endereco.numero, 
      endereco.bairro, 
      endereco.complemento
    ])
    return resp.insertId; 
}


export async  function consultarIdEndereco(id) {
    const comando = `
     select id_endereco      as id,
            id_cliente       as idCliente,
            ds_cep           as cep,
            ds_endereco      as endereco,
            nr_endereco      as numero,
            ds_bairro        as bairro,
            ds_complemento   as complemento
        from tb_endereco	
        where id_endereco = ?
    `
    const [dados] = await con.query(comando, [id]);
    return dados[0];
  }


  export async function alterarEndereco(id, enderecos) {
    let comando = `
        update tb_endereco
            set ds_cep           = ?,
                ds_endereco      = ?,
                nr_endereco      = ?,
                ds_bairro        = ?,
                ds_complemento   = ?	
            where id_endereco = ?  
    `
  
    let [resp] = await con.query(comando,
      [
        enderecos.cep,
        enderecos.endereco,
        enderecos.numero,
        enderecos.bairro,
        enderecos.complemento,
        id
      ]);
    
    return resp.affectedRows;
  }



  export async  function consultarNomeEndereco(endereco) {
    let comando = `
         select id_endereco      as id,
                id_cliente       as idCliente,
                ds_cep           as cep,
                ds_endereco      as endereco,
                nr_endereco      as numero,
                ds_bairro        as bairro,
                ds_complemento   as complemento
            from tb_endereco	 
            where ds_endereco = ?    
    `
  
    const [dados] = await con.query(comando, [  `%${endereco}%`  ]);
    return dados;
  }


  export async function deletarEndereco(id) {
    let comando = `
        delete from tb_endereco
              where id_endereco = ? 
    ` 
  
    let [resp] = await con.query(comando, [id]);
    return resp.affectedRows;
  }