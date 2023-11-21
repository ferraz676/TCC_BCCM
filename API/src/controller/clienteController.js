import {consultarCliente, inserirCliente,alterarCliente, alterarSenhaCliente, deletarCliente, loginCliente, verificarCPF, verificarEmail, deMaior} from '../repository/clienteRepository.js';
import { Router } from 'express';
const endpoints = Router();



endpoints.get('/cliente/:id', async (req, resp) => {
    try {

      const idCliente = Number(req.params.id);
      let r = await consultarCliente(idCliente);
      resp.send(r);
    }
    catch (err) {
      resp.status(400).send({ 
        erro: err.message 
      });
    }
  })



endpoints.post('/cliente/postar', async (req, resp) => {
  try {
    let novoCliente = req.body;
    
    if(!novoCliente.cliente || !novoCliente.telefone || !novoCliente.cpf || !novoCliente.email || !novoCliente.senha || !novoCliente.genero || !novoCliente.nascimento)
    throw new Error("Nome Obrigatório!");

    if(novoCliente.senha.lenght < 6)
      throw new Error('A senha deve ter pelo menos 6 caracteres.')

    let emailCadastrado = await verificarEmail(novoCliente.email)
      if(emailCadastrado.length !== 0)
        throw new Error('Email já cadastrado.');
    
    let cpfCadastrado = await verificarCPF(novoCliente.cpf); 
      if(cpfCadastrado.length !== 0)
        throw new Error('CPF já cadastrado.');

    if(deMaior(novoCliente.dataNascimento) < 16)
        throw new Error('É preciso ter pelo menos 16 anos para se cadastrar.')    

    let cliente = await inserirCliente(novoCliente);
    resp.send(cliente);
  }
  catch (err) {
    resp.status(400).send({ 
      erro: err.message });
  }
})

endpoints.post('/cliente/login', async (req, resp) => {
  try {
    const {email, senha} = req.body;

        if(!email || !senha)
            throw new Error('Preencha todos os campos de login.')

        let resposta = await loginCliente(email, senha);

        if(!resposta)
            throw new Error('Email ou senha incorretos');

        resp.send(resposta);
  }
  catch (err) {
    resp.status(400).send({ 
      erro: err.message 
    }); 
  }
})

endpoints.put('/cliente/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let tcc = req.body;

    let r = await alterarCliente(id, tcc);

    if(r.affectedRows != 1)
            throw new Error('Não foi possível atualizar os dados. Tente novamente mais tarde.');

    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({ erro: err.message });
  }
})


endpoints.put("/clienteSenha/:id", async (req, resp) => {
  try {
    const id = Number(req.params.id);
    const { senha } = req.body;
  
    if(!senha)
    throw new Error("Senha Obrigatória!");
    
    const resposta = await alterarSenhaCliente(id, senha);
    
    resp.status(204).send();

  } catch (err){
    resp.status(400).send({
      erro: err.message
    })
  }
});


export default endpoints;