import {consultarCliente, inserirCliente,alterarCliente,deletarCliente, loginCliente} from '../repository/clienteRepository.js';

import { Router } from 'express';
const endpoints = Router();



endpoints.get('/cliente', async (req, resp) => {
    try {
      let r = await consultarCliente();
      resp.send(r);
    }
    catch (err) {
      resp.status(400).send({ erro: err.message });
    }
  })


  
endpoints.post('/cliente/postar', async (req, resp) => {
  try {
    let novoCliente = req.body;
    
    if(!novoCliente.cliente)
    throw new Error("Nome Obrigatório!");

    if(!novoCliente.telefone)
  throw new Error("Telefone Obrigatório!");

    if(!novoCliente.cpf)
throw new Error("Cpf Obrigatório!");

    if(!novoCliente.email)
throw new Error("Email Obrigatório!");

    if(!novoCliente.senha)
throw new Error("Senha Obrigatória!");

    if(!novoCliente.genero)
throw new Error("Gênero Obrigatório!");

    if(!novoCliente.nascimento)
throw new Error("Data de Nascimento Obrigatória!");

    let cliente = await inserirCliente(novoCliente);
    resp.send(cliente);
  }
  catch (err) {
    resp.status(400).send({ erro: err.message });
  }
})

endpoints.post('/cliente/login', async (req, resp) => {
  try {
    const {email, senha} = req.body;
    const resposta = await loginCliente(email, senha);

    if(!resposta){
      throw new Error("Credenciais Inválidas!")
    }
    resp.send(resposta)
  }
  catch (err) {
    resp.status(401).send({ 
      erro: err.message 
    }); 
  }
})

endpoints.put('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let tcc = req.body;
    let r = await alterarCliente(id, tcc);

    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({ erro: err.message });
  }
})


endpoints.delete('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let resp = await deletarCliente(id);
    if(resp != 1)
      throw new Error ('Cliente não pode ser removido!')
      resp.status(204).send();
  }
  catch (err) {
    resp.status(400).send({ erro: err.message });
  }
})



export default endpoints;