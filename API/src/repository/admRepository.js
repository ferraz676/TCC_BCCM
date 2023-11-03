import con from "./connection.js";

export async function loginAdm(email, senha) {
  let sql = `
  select ds_email    as  email,
         ds_senha    as  senha
        from tb_adm
      where ds_email    =   ?
        and ds_senha    =   ?    
            `
  

  const [dados] = await con.query(sql, [email, senha])
  return dados[0];
}