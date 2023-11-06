import {consultarCliente, inserirCliente,alterarCliente,deletarCliente, loginCliente} from '../repository/clienteRepository.js';

import { Router } from 'express';
const endpoints = Router();



endpoints.get('/cliente', async (req, resp) => {
    try {
      let r = await consultarCliente();
      resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  })


  
endpoints.post('/cliente/postar', async (req, resp) => {
  try {
    let novoCliente = req.body;
    let cliente = await inserirCliente(novoCliente);
    resp.send(cliente);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})

endpoints.post('/cliente/login', async (req, resp) => {
  try {
    let tcc = req.body;
    let r = await loginCliente(tcc.email,tcc.senha);
    if(r.length != 1){
      throw new Error('Usuário ou Senha incorretos!')
    }
    resp.send(r);
  }
  catch (err) {
    resp.status(500).send(err.message);
  }
})

endpoints.put('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let tcc = req.body;
    let r = await alterarCliente(id, tcc);

    resp.send();
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})


endpoints.delete('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let r = await deletarCliente(id);
    resp.send();
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})



export default endpoints;