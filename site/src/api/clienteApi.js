import axios from 'axios';
import { API_URL } from '../constants.js';


const api = axios.create({
    baseURL: API_URL
})


export async function consultarCliente(idCliente){

    const resposta = await api.get(API_URL + `/cliente/${idCliente}`);
    return resposta.data;
}


export async function inserirCliente(cliente, telefone, cpf, email, senha, genero, fixo, nascimento){
    const resposta = await api.post(API_URL + '/cliente/postar', {

    cliente: cliente,
    telefone: telefone,
    cpf: cpf,
    email: email,
    senha: senha,
    genero: genero,
    fixo: fixo,
    nascimento: nascimento,
    });

    return resposta.data;
}

export async function loginCliente(email, senha){
    const r = await axios.post(API_URL + '/cliente/login', {
        email:email,
        senha:senha
    });

    return r.data;
}


export async function alterarSenhaCliente(id, senha){
    const resposta = await api.put(API_URL + `/clienteSenha/${id}`, {
        senha:senha
    })
    return resposta.data;
}