import axios from 'axios';
import { API_URL } from '../constants.js';


const api = axios.create({
    baseURL: API_URL
})


export async function consultarTodosProdutos(){

    const resposta = await api.get(API_URL + '/produtoTodos/consultar');
    return resposta.data;
}

export async function consultarCreatina(){

    const resposta = await api.get(API_URL + '/produto/creatina');
    return resposta.data;
}

export async function consultarBarrinha(){

    const resposta = await api.get(API_URL + '/produto/barrinha');
    return resposta.data;
}

export async function consultarWhey(){

    const resposta = await api.get(API_URL + '/produto/whey');
    return resposta.data;
}

export async function consultarVitamina(){

    const resposta = await api.get(API_URL + '/produto/vitamina');
    return resposta.data;
}

export async function consultarAnabolizante(){

    const resposta = await api.get(API_URL + '/produto/anabolizante');
    return resposta.data;
}





export async function consultarNomeProdutos(produto){

    const resposta = await api.get(API_URL + `/produto/nome?produto=${produto}`);
    return resposta.data;
}



export async function cadastrarProduto(produto,marca,categoria,preco,quantidade,medida){
    const resposta = await api.post(API_URL + '/produto/postar', {

    produto: produto,
    marca: marca,
    categoria: categoria,
    preco: preco,
    quantidade: quantidade,
    medida: medida
    });

    return resposta.data;
}

export async function removerProduto(id){

    const resposta = await api.delete(API_URL + `/produto/${id}`);
    return resposta.status;
}

export async function alterarProduto(id, produto, marca, categoria, preco, quantidade, medida){
    const resposta = await api.put(API_URL + `/produto/${id}`, {
        produto: produto,
        marca: marca,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        medida: medida
    })
    return resposta.data;
}



export async function enviarImagem(id, imagem){
    const formData = new FormData();
    formData.append('capa', imagem);
    const resposta = await api.put(API_URL + `/produto/${id}/capa`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })
    return resposta.status;
}


export async function buscarPorId(id){

    const resposta = await api.get(API_URL + `/produto/${id}`);
    return resposta.data;
}


export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`;
}
