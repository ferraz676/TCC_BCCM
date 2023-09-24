import {consultar, inserir,alterar,deletar} from '../repository/produtoRepository.js';

import { Router } from 'express';
const endpoints = Router();





endpoints.get('/produto', async (req, resp) => {
    try {
      let r = await consultar();
      resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  })

  

endpoints.post('/produto/postar', async (req, resp) => {
  try {
    let tcc = req.body;
    let r = await inserir(tcc);
    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})




endpoints.put('/produto/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let tcc = req.body;
    let r = await alterar(id, tcc);

    resp.send();
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})


endpoints.delete('/produto/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let r = await deletar(id);
    resp.send();
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})



export default endpoints;