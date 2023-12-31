import axios from 'axios';
import { API_URL } from '../constants.js';


const api = axios.create({
    baseURL: API_URL
})


export async function salvarNovoPedido(idCliente, novoPedido){

    const resposta = await api.post(API_URL + `/pedido/` + idCliente, novoPedido);
    return resposta.data;
}

export async function listarPedidos(idCliente){

    const resposta = await api.get(API_URL + `/cliente/${idCliente}/pedido`);
    return resposta.data;
}

export async function consultarPedidos(){

    const resposta = await api.get(API_URL + '/pedidos/consultar');
    return resposta.data;
}
