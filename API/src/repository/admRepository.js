import con from "./connection.js";

export async function loginAdm(email, senha) {

  const comando = `
      select ds_email      email,
             ds_senha      senha
        from tb_adm
      where ds_email    =   ?
        and ds_senha    =   ?    `

  const [dados] = await con.query(comando, [email, senha])
  return dados[0];
}