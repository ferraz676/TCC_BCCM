import axios from 'axios';
import { API_URL } from '../constants.js';

export async function consultarTodosProdutos(){

    const resposta = await axios.get(API_URL + '/produtoTodos/consultar');
    return resposta.data;
}

export async function consultarNomeProdutos(produto){

    const resposta = await axios.get(API_URL + `/produto/nome?produto=${produto}`);
    return resposta.data;
}



export async function cadastrarProduto(produto,marca,categoria,preco,quantidade,medida){
    const resposta = await axios.post(API_URL + '/produto/postar', {

    produto: produto,
    marca: marca,
    categoria: categoria,
    preco: preco,
    quantidade: quantidade,
    medida: medida
    });

    return resposta.data;
}



export async function enviarImagem(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem);
    console.log(imagem);
    const resposta = await axios.put(API_URL + `/produto/${id}/capa`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })
    return resposta.status;
}

