import axios from 'axios';
import { API_URL } from '../constants.js';


const api = axios.create({
    baseURL: API_URL
})

export async function salvar(idCliente, cep, endereco, numero, bairro, complemento ){
    const resposta = await api.post(API_URL + `/cliente/${idCliente}/endereco`, {
        cep: cep,
        endereco:endereco,
        numero:numero,
        complemento: complemento,
        bairro:bairro
    })
    return resposta.data;
}

export async function listar(idCliente){

    const resposta = await api.get(API_URL + `/cliente/${idCliente}/endereco`);
    return resposta.data;
}


export async function consultarEndereco(){

    const resposta = await api.get(API_URL + '/endereco');
    return resposta.data;
}


export async function consultarNomeEndereco(endereco){

    const resposta = await api.get(API_URL + `/endereco/nome?endereco=${endereco}`);
    return resposta.data;
}

export async function buscarPorId(id){

    const resposta = await api.get(API_URL + `/endereco/${id}`);
    return resposta.data;
}


export async function alterarEndereco(cep, endereco, numero, bairro, complemento, id ){
    const resposta = await api.put(API_URL + `/endereco/${id}`, {
        cep: cep,
        endereco:endereco,
        numero:numero,
        complemento: complemento,
        bairro:bairro
    })
    return resposta.data;
}


export async function removerEndereco(idEndereco, idCliente){

    const resposta = await api.delete(API_URL + `/endereco/${idEndereco}`);
    return resposta.status;
}
