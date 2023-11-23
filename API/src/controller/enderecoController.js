import {alterarEndereco, consultarEndereco, consultarIdEndereco, consultarIdUsuarioEndereco, consultarNomeEndereco, deletarEndereco, inserirEndereco} from '../repository/enderecoRepository.js';
import { Router } from "express";
const endpoints = Router();


endpoints.get("/endereco", async (req, resp) => {
    try {
      const resposta = await consultarEndereco();
      resp.send(resposta);

    } catch (err) {
      resp.status(400).send({ 
        erro: err.message
      })
    }
  });

  endpoints.delete("/endereco/:id", async (req, resp) => {
    try {
      const { id } = req.params;
  
      const resposta = await deletarEndereco(id);
      if(resposta != 1)
        throw new Error ('Endereço não pode ser removido!');
  
        resp.status(204).send();
  
    } catch (err) {
      resp.status(400).send({
        erro: err.message 
      })
    }
  });

  

  endpoints.get("/endereco/:id", async (req, resp) => {
    try {
      const id = Number(req.params.id);
  
      let r = await consultarIdEndereco(id);
      resp.send(r);
  
    } catch (err) {
      resp.status(400).send({ erro: err.message });
    }
  });

  endpoints.get("/cliente/:id/endereco", async (req, resp) => {
    try {

      const id = Number(req.params.id);
      const r = await consultarIdUsuarioEndereco(id);
      resp.send(r);
  
    } catch (err) {
      resp.status(400).send({ 
        erro: err.message });
    }
  });

  endpoints.post("/cliente/:id/endereco", async (req, resp) => {
    try {

      const id = Number(req.params.id);
      const endereco = req.body;
      const r = await inserirEndereco(id, endereco);
      resp.status(204).send();

    } catch (err) {
      resp.status(400).send({ 
        erro: err.message });
    }
  });





  endpoints.get("/endereco/nome", async (req, resp) => {
    try {
      const { endereco } = req.query;
  
      let r = await consultarNomeEndereco(endereco);
      if(!r)
        resp.status(400).send([]);
  
    } catch (err) {
      resp.status(400).send({ erro: err.message });
    }
  });





  endpoints.put("/endereco/:id", async (req, resp) => {
    try {
      const { id } = req.params;
      const enderecos = req.body;
      
      if(!enderecos.cep)
          throw new Error("CEP não pode ser nulo!");

      else if(enderecos.cep.lenght < 9)
          throw new Error("CEP incompleto!"); 
          
      else if(!enderecos.endereco)
          throw new Error("Endereço não pode ser nulo!");

      else if(!enderecos.numero)
          throw new Error("Número não pode ser nulo!");
      
      else if(!enderecos.bairro)
          throw new Error("Bairro não pode ser nulo!");
      
      else{
        const resposta = await alterarEndereco(id, enderecos);
        resp.status(204).send();
      }
    } catch (err){
      resp.status(400).send({
        erro: err.message
      })
    }
  });


  export default endpoints;