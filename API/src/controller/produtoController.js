import {consultarNomeProdutos, consultarTodosProdutos, consultarIdProdutos, inserir, alterarProduto, deletar, enviarImagemProduto, consultarCreatina, consultarWhey, consultarAnabolizante, consultarVitamina} from "../repository/produtoRepository.js";

import { Router } from "express";
import multer from 'multer';

const upload = multer({dest: 'storage/capasProdutos'})

const endpoints = Router();



endpoints.get("/produto/nome", async (req, resp) => {
  try {
    const { produto } = req.query;

    let r = await consultarNomeProdutos(produto);
    if(!r)
      resp.status(400).send([]);

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
});

endpoints.get("/produto/creatina", async (req, resp) => {
  try {

    const resposta = await consultarCreatina();
    resp.send(resposta);
  } catch (err) {
    resp.status(500).send({ 
      erro: err.message
     })
  }
});

endpoints.get("/produto/whey", async (req, resp) => {
  try {

    const resposta = await consultarWhey();
    resp.send(resposta);
  } catch (err) {
    resp.status(500).send({ 
      erro: err.message
     })
  }
});

endpoints.get("/produto/anabolizante", async (req, resp) => {
  try {

    const resposta = await consultarAnabolizante();
    resp.send(resposta);
  } catch (err) {
    resp.status(500).send({ 
      erro: err.message
     })
  }
});

endpoints.get("/produto/vitamina", async (req, resp) => {
  try {

    const resposta = await consultarVitamina();
    resp.send(resposta);
  } catch (err) {
    resp.status(500).send({ 
      erro: err.message
     })
  }
});



endpoints.get("/produto/:id", async (req, resp) => {
  try {
    const id = Number(req.params.id);

    let r = await consultarIdProdutos(id);
    resp.send(r);

  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});




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
    const { id } = req.params;
    const produtos = req.body;
    
    if(!produtos.produto)
        throw new Error("Nome do Produto Obrigatório!");
    
    if(!produtos.marca)
      throw new Error("Marca do Produto Obrigatório!");
    
    if(!produtos.categoria)
    throw new Error("Categoria do Produto Obrigatório!");
    
    if(!produtos.preco)
    throw new Error("Preço do Produto Obrigatório!");
    
     if(!produtos.quantidade)
    throw new Error("Quantidade do Produto Obrigatório!");
    
    if(!produtos.medida)
    throw new Error("Medida do Produto Obrigatório!");
    
    const resposta = await alterarProduto(id, produtos);
    if (resposta != 1)
      throw new Error("Produto não pode ser alterado");
    else
      resp.status(204).send();

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
    const { id } = req.params;

    const resposta = await deletar(id);
    if(resposta != 1)
      throw new Error ('Produto não pode ser removido!');

      resp.status(204).send();

  } catch (err) {
    resp.status(400).send({
      erro: err.message 
    })
  }
});

export default endpoints;
