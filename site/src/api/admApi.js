import axios from 'axios';
import { API_URL } from '../constants.js';

export async function loginAdm(email, senha){
    const r = await axios.post(API_URL + '/adm/login', {
        email:email,
        senha:senha
    });

    return r.data;
}