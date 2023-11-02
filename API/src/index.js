import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import produtoController from './controller/produtoController.js'
import clienteController from './controller/clienteController.js'
import admController from './controller/admController.js'

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(produtoController);
servidor.use(clienteController);
servidor.use(admController);

servidor.listen(process.env.PORT,
                () => console.log('API ESTABELECIDA COM SUCESSO!'));              