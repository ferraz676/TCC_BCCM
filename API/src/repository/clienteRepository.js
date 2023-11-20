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

export function deMaior(data)
{
    let hoje = new Date();
    let nascimento = new Date(data);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

export async function verificarEmail(email) {
  let sql =
  `
      select ds_email 
        from tb_cliente
       where ds_email = ? 
  `

  let [resp] = await con.query(sql, [email]);

  return resp;
}

export async function verificarCPF(cpf) {
  let sql =
  `
      select ds_cpf 
        from tb_cliente
       where ds_cpf = ? 
  `

  let [resp] = await con.query(sql, [cpf]);

  return resp;
}

export async  function consultarCliente(idCliente) {
  let comando = `
      select id_cliente       as id,
             nm_cliente       as cliente,
             ds_telefone      as telefone,
             ds_cpf           as cpf,
             ds_email         as email,
             ds_senha         as senha,
             ds_genero        as genero,
             ds_fixo          as fixo,
             dt_nascimento    as nascimento
        from tb_cliente
        where id_cliente = ?
  `

  let [dados] = await con.query(comando,[idCliente])
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



export async function alterarSenhaCliente(id, senha) {
  let comando = `
      update tb_cliente
         set ds_senha      = ?
      where id_cliente     = ?
  `

  let [resp] = await con.query(comando,
    [
      senha,
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
      select id_cliente       as id,
              nm_cliente      as cliente,
             ds_email         as email,
             ds_senha         as senha
        from tb_cliente
       where  ds_email = ?
          and ds_senha = ?
  `

  const [dados] = await con.query(comando, [email,senha])
  return dados[0];
}