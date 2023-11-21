import axios from 'axios';
import { API_URL } from '../constants.js';


const api = axios.create({
    baseURL: API_URL
})


export async function salvarNovoPedido(idCliente, novoPedido){

    const resposta = await api.post(API_URL + `/pedido/` + idCliente, novoPedido);
    return resposta.data;
}
