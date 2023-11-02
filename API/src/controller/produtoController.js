import {consultar, inserir, alterar, deletar} from "../repository/produtoRepository.js";

import { Router } from "express";
import multer from 'multer';

const upload = multer({dest: 'storage/imagens-produtos'})

const endpoints = Router();

endpoints.get("/produto", async (req, resp) => {
  try {
    let nome = req.query.nome;

    if (!nome) nome = "";

    let r = await consultar(nome);
    resp.send(r);
  } catch (err) {
    resp.status(500).send({ erro: err.message });
  }
});

endpoints.post("/produto/postar", async (req, resp) => {
  try {
    let tcc = req.body;
    let r = await inserir(tcc);
    resp.send(r);
  } catch (err) {
    resp.status(500).send({ erro: err.message });
  }
});

endpoints.put("/produto/:id", async (req, resp) => {
  try {
    let id = req.params.id;
    let tcc = req.body;
    let r = await alterar(id, tcc);

    resp.send();
  } catch (err) {
    resp.status(500).send({ erro: err.message });
  }
});

endpoints.put("/produto/:id/capa", upload.single("capa"), async (req, resp) => {
  try {
    const { id } = req.params;
    const imagem = req.file.path;

    const resposta = await alterarImagem(imagem, id);
    if (resposta != 1) throw new Error("A imagem não pode ser salva.");

    resp.status(204).send();
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

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
