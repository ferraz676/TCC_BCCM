import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import produtoController from './controller/produtoController.js'
import clienteController from './controller/clienteController.js'
import admController from './controller/admController.js'
import enderecoController from './controller/enderecoController.js'
import pedidoController from './controller/pedidoController.js'

const servidor = express();
servidor.use(cors());
servidor.use(express.json());


servidor.use('/storage/capasProdutos', express.static('storage/capasProdutos'));


servidor.use(produtoController);
servidor.use(clienteController);
servidor.use(admController);
servidor.use(enderecoController);
servidor.use(pedidoController);

servidor.listen(process.env.PORT,
                () => console.log('API ESTABELECIDA COM SUCESSO!'));              