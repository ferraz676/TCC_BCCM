import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    senha: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('/cliente', formData);
      const token = response.data.token;
      navigate('/pagina_de_cadastro');
    } catch (error) {
      console.error('Erro de autenticação:', error);
    }
  };


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

        <form onSubmit={handleFormSubmit}>
  <div className='l1'>
    <img src='/assets/images/perfil2.png' height={60} alt='' />
    <input
      type='text'
      placeholder='EMAIL'
      name='email'
      value={formData.email}
      onChange={handleInputChange}/>
  </div>

  <div className='l1'>
    <img src='/assets/images/cadeado.png' height={60} alt='' />
    <input
      type='password'
      placeholder='SENHA'
      name='senha'
      value={formData.senha}
      onChange={handleInputChange}
    />
  </div>

          <div className='check'>
            <div className='lembre'>
            <input type='checkbox'></input>
            <p>Lembre de mim</p>
            </div>
            <button>Esqueci minha senha</button>
          </div>
          
            <div className='last'>
              <button>LOGIN</button>
              <p>Não tem uma conta?</p>
              <a href='../cadastro'>Cadastre-se</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}