import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../constants.js';

export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  async function entrar(event) {
      event.preventDefault();

          try {
              const r = await axios.post(API_URL + '/cliente/login', {senha: senha, email: email});
              console.log(r);
              alert('Entrou com Sucesso :)');
              navigate('../Home');
  
          } catch (err) {
            if(err.response)
            {
              alert(err.response.data)
            } 
          }


  }

  return (
    <div className='pagina-login'>
      <div className='cabec'>
        <div className='sla'>
        <img src='/assets/images/casinha.png' height={80} alt=''/>
        <a href='../Home'>Home</a>
        </div>
        <div className='loguinha'>
        <div className='bolinha'></div>
        <img className='logo' height={250} src='/assets/images/logo.png' alt=''/>
        </div>
        <p>Garantimos que você fez a <strong>melhor escolha!</strong></p>
      </div>


      <div className='mid'>
        <div className='blocao'>

        
      <div className='l1'>
      <img src='/assets/images/perfil2.png' height={60} alt='' />
      <input type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)} />
      </div>

     <div className='l1'>
     <img src='/assets/images/cadeado.png' height={60} alt='' />
     <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
     </div>

          <div className='check'>
            <div className='lembre'>
            <input type='checkbox'></input>
            <p>Lembre de mim</p>
            </div>
            <button>Esqueci minha senha</button>
          </div>
          
            <div className='last'>
              <button onClick={entrar}>LOGIN</button>
              <p>Não tem uma conta?</p>
              <a href='../cadastro'>Cadastre-se</a>
            </div>
        </div>
      </div>
    </div>
  );

}