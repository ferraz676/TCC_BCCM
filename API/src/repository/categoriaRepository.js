import con from "./connection.js";


export async function buscarTipoPorId(id) {
  let comando = 'select * from tb_categoria where id_categoria = ?';
  let [dados] = await con.query(comando, [id]);
  return dados;
}


export async function listarCategorias() {
  let comando = `
      select id_categoria     as id,
             ds_categoria     as categoria
        from tb_categoria`;
  
  let [dados] = await con.query(comando);
  return dados;
}