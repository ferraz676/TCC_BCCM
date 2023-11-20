import { Router } from "express";
import { criarNovoPedido } from '../service/novoProdutoService.js';
import { inserirPagamento, inserirPedido, inserirPedidoItem } from '../repository/pedidoRepository.js';
import { consultarIdProdutos } from '../repository/produtoRepository.js';


const endpoints = Router();


endpoints.post('/pedido/:idCliente', async (req, resp) => {
    try {
    const { idCliente } = req.params;
    const info = req.body;
    
  
    const novoPedido = criarNovoPedido(idCliente, info);

    const idPedidoCriado = await inserirPedido(novoPedido);
    const idPagCriado = await inserirPagamento(idPedidoCriado, info.cartao);

    for (let item of info.produtos) {
        const prod = await consultarIdProdutos(item.id);
        const idPedidoItemCriado = await inserirPedidoItem(idPedidoCriado, prod.id , item.qtd , prod.preco);
    }

    resp.status(204).send();

    }
    catch (err) {
        console.log(err);
    resp.status(400).send({
        erro: err.message
    });
}
  })



  export default endpoints;