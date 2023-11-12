import con from "./connection.js";


export async function inserirCliente(cliente) {
  let comando = `
      insert into tb_cliente (nm_cliente, ds_telefone, ds_cpf, ds_email, ds_senha, ds_genero, ds_fixo, dt_nascimento)
                      values (?, ?, ?, ?, ?, ?, ?, ?)
      `

  let [resp] = await con.query(comando,
    [
      cliente.cliente,
      cliente.telefone,
      cliente.cpf,
      cliente.email,
      cliente.senha,
      cliente.genero,
      cliente.fixo,
      cliente.nascimento
    ])
  
  cliente.id = resp.insertId;
  return cliente;
}

export async  function consultarCliente(nome) {
  let comando = `
      select id_cliente       as id,
             nm_cliente       as cliente,
             ds_telefone      as telefone,
             ds_cpf           as cpf,
             ds_email         as email,
             ds_senha         as senha
             ds_genero        as genero,
             ds_fixo          as fixo,
             dt_nascimento    as nascimento
        from tb_cliente
       where nm_cliente like  ?
  `

  let [dados] = await con.query(comando, ['%' + nome + '%'])
  return dados;
}


export async function alterarCliente(id, cliente) {
  let comando = `
      update tb_cliente
         set nm_cliente    = ?,
             ds_telefone   = ?,
             ds_cpf        = ?,
             ds_email      = ?,
             ds_senha      = ?,
             ds_genero     = ?,
             ds_fixo       = ?,
             dt_nascimento = ?
       where id_cliente    = ?
  `

  let [resp] = await con.query(comando,
    [
      cliente.cliente,
      cliente.telefone,
      cliente.cpf,
      cliente.email,
      cliente.senha,
      cliente.genero,
      cliente.fixo,
      cliente.nascimento,
      id
    ])
  
  return resp.affectedRows;
}

export async function deletarCliente(id) {
  let comando = `
      delete from tb_cliente
            where id_cliente = ?
  `

  let [resp] = await con.query(comando, [id]);
  return resp.affectedRows;
}



export async  function loginCliente(email,senha) {
  let comando = `
      select nm_cliente       as cliente,
             ds_email         as email,
             ds_senha         as senha
        from tb_cliente
       where  ds_email = ?
          and ds_senha = ?
  `

  const [dados] = await con.query(comando, [email,senha])
  return dados[0];
}