import { Router } from "express";
import { criarNovoPedido } from '../service/novoProdutoService.js';
import { consultarPedidos, consultarTodosPedidos, inserirPagamento, inserirPedido, inserirPedidoItem } from '../repository/pedidoRepository.js';
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
    resp.status(400).send({
        erro: err.message
    });
}
  })

  endpoints.get("/cliente/:id/pedido", async (req, resp) => {
    try {
      const idCliente = Number(req.params.id);
  
      let r = await consultarTodosPedidos(idCliente);
      resp.send(r);
  
    } catch (err) {
      resp.status(400).send({ erro: err.message });
    }
  });


  endpoints.get("/pedidos/consultar", async (req, resp) => {
    try {
  
      const resposta = await consultarPedidos();
      resp.send(resposta);
      
    } catch (err) {
      resp.status(500).send({ 
        erro: err.message
       })
    }
  });



  export default endpoints;