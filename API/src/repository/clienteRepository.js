import con from "./connection.js";


export async function inserir(cliente) {
  let comando = `
      insert into tb_cliente (nm_cliente, ds_telefone, ds_cpf, ds_email, ds_senha, ds_genero, ds_fixo, dt_nascimento)
                      values (?, ?, ?, ?, ?, ?, ?, ?)
      `

  let [resp] = await con.query(comando,
    [
      cliente.nome,
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

export async  function consultar(nome) {
  let comando = `
      select id_cliente       as id,
             nm_cliente       as nome,
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



export async function alterar(id, cliente) {
  let comando = `
      update tb_cliente
         set nm_cliente    = ?,
             ds_telefone   = ?,
             ds_cpf        = ?,
             ds_email      = ?,
             ds_senha      = ?,
             ds_genero     = ?,
             ds_fixo       = ?
             dt_nascimento = ?
       where id_cliente    = ?
  `

  let [resp] = await con.query(comando,
    [
      cliente.nome,
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

export async function deletar(id) {
  let comando = `
      delete from tb_cliente
            where id_cliente = ?
  `

  let [resp] = await con.query(comando, [id]);
  return resp.affectedRows;
}
