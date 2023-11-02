import con from "./connection.js";


export async function inserirAdm(adm) {
  let comando = `
      insert into tb_adm (ds_email, ds_senha)
                      values (?, ?)
      `

  let [resp] = await con.query(comando,
    [
      adm.email,
      adm.senha
    ])
  
  adm.id = resp.insertId;
  return adm;
}

export async  function consultarAdm(adm) {
  let comando = `
      select ds_email      as email,
             ds_senha      as senha
        from tb_adm
        where ds_email like  ?
          and ds_senha like ?
  `

  let [dados] = await con.query(comando)
  return dados;
}