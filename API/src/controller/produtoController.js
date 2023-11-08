import {consultarNomeProdutos, consultarTodosProdutos, inserir, alterar, deletar, enviarImagemProduto} from "../repository/produtoRepository.js";

import { Router } from "express";
import multer from 'multer';

const upload = multer({dest: 'storage/capasProdutos'})

const endpoints = Router();



endpoints.get("/produto/nome", async (req, resp) => {
  try {
    const { produto } = req.query;

    let r = await consultarNomeProdutos(produto);
    resp.send(r);

  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});

endpoints.get("/produtoTodos/consultar", async (req, resp) => {
  try {

    const resposta = await consultarTodosProdutos();
    resp.send(resposta);
  } catch (err) {
    resp.status(500).send({ 
      erro: err.message
     })
  }
})




endpoints.post("/produto/postar", async (req, resp) => {
  try {
    let novoProduto = req.body;

    if(!novoProduto.produto)
        throw new Error("Nome do Produto Obrigatório!");
    
    if(!novoProduto.marca)
      throw new Error("Marca do Produto Obrigatório!");
    
    if(!novoProduto.categoria)
    throw new Error("Categoria do Produto Obrigatório!");
    
    if(!novoProduto.preco)
    throw new Error("Preço do Produto Obrigatório!");
    
     if(!novoProduto.quantidade)
    throw new Error("Quantidade do Produto Obrigatório!");
    
    if(!novoProduto.medida)
    throw new Error("Medida do Produto Obrigatório!");

    let produto = await inserir(novoProduto);
    resp.send(produto);

  } catch (err) {
    resp.status(400).send({ 
      erro: err.message
    });
  }
});





endpoints.put("/produto/:id", async (req, resp) => {
  try {
    const {id} = req.params;
    const produto = req.body;
    
    if(!produto.produto)
        throw new Error("Nome do Produto Obrigatório!");
    
    if(!produto.marca)
      throw new Error("Marca do Produto Obrigatório!");
    
    if(!produto.categoria)
    throw new Error("Categoria do Produto Obrigatório!");
    
    if(!produto.preco)
    throw new Error("Preço do Produto Obrigatório!");
    
     if(!produto.quantidade)
    throw new Error("Quantidade do Produto Obrigatório!");
    
    if(!produto.medida)
    throw new Error("Medida do Produto Obrigatório!");
    
    const resposta = await alterarProduto(id, produto);
    if (resposta != 1)
      throw new Error("Produto não pode ser alterado");
    else
      resp.status(204).send
  } catch (err){
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoints.put("/produto/:id/capa", upload.single("capa"), async (req, resp) => {
  try {
    if(!req.file)
      throw new Error("Escolha a Imagem!");
    
    const { id } = req.params;
    const imagem = req.file.path;
    console.log(id);
    console.log(imagem);
    const resposta = await enviarImagemProduto(imagem, id);
    if (resposta != 1) 
        throw new Error("A imagem não pode ser salva!");

    resp.status(204).send();
  } catch (err) {
    resp.status(500).send({
      erro: err.message
    })
  }
})

endpoints.delete("/produto/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    let r = await deletar(id);
    resp.send();
  } catch (err) {
    resp.status(500).send({ erro: err.message });
  }
});

export default endpoints;
