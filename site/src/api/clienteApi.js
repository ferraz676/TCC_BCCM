import axios from 'axios';
import { API_URL } from '../constants.js';

export async function inserirCliente(cliente, telefone, cpf, email, senha, genero, fixo, nascimento){
    const resposta = await axios.post(API_URL + '/cliente/postar', {

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