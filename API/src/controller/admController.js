import {consultarAdm, inserirAdm} from '../repository/admRepository.js';

import { Router } from 'express';
const endpoints = Router();





endpoints.get('/adm/consulta', async (req, resp) => {
    try {
      let r = await consultarAdm();
      resp.send(r);
    }
    catch (err) {
      resp.status(500).send({ erro: err.message });
    }
  })

endpoints.post('/adm/cadastro', async (req, resp) => {
  try {
    let tcc = req.body;
    let r = await inserirAdm(tcc);
    resp.send(r);
  }
  catch (err) {
    resp.status(500).send({ erro: err.message });
  }
})

export default endpoints;