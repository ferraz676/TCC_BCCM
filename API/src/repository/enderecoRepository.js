import con from "./connection.js";

export async  function consultarEndereco() {
  let comando = `
      select id_endereco      as id,
             id_cliente       as idCliente,
             ds_cep           as cep,
             ds_endereco      as endereco,
             nr_endereco      as numero,
             ds_bairro        as bairro
        from tb_endereco
  `

  const [dados] = await con.query(comando)
  return dados;
}


export async  function consultarIdEndereco(id) {
    const comando = `
     select id_endereco      as id,
            id_cliente       as idCliente,
            ds_cep           as cep,
            ds_endereco      as endereco,
            nr_endereco      as numero,
            ds_bairro        as bairro
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
                ds_bairro        = ?	
            where id_endereco = ?  
    `
  
    let [resp] = await con.query(comando,
      [
        enderecos.cep,
        enderecos.endereco,
        enderecos.numero,
        enderecos.bairro,
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
                ds_bairro        as bairro
            from tb_endereco	 
            where ds_endereco = ?    
    `
  
    const [dados] = await con.query(comando, [  `%${endereco}%`  ]);
    return dados;
  }