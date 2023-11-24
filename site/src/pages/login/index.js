import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import { React, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { loginAdm } from '../../api/admApi.js';
import { loginCliente } from '../../api/clienteApi.js';
import LoadingBar from 'react-top-loading-bar'

export default function Login() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();

  const ref = useRef();

  async function entrarClick() {
    ref.current.continuousStart()
    setCarregando(true);
    
    try {
      const r = await loginAdm(email, senha);
      storage('adm-logado', r)

      setTimeout(() => {
        navigate('/teladm');
      }, 3000)

    } catch (err) {
      try {
        const q = await loginCliente(email, senha);
        storage('cliente-logado', q)
        storage('carrinho', []);

        setTimeout(() => {
          navigate('/');
        }, 3000)

      } catch (err) {
        ref.current.complete();
        setCarregando(false);
        setErro("Email ou Senha Incorretos.")
      }

    }
  }

  function voltarHome() {
    navigate('/');
  }

  return (

    <div className='pagina-login'>

      <LoadingBar color='#2D5A68' ref={ref} />

      <div className='cabec'>

        <div className='sla'>
          <img src='/assets/images/casinha.png' height={80} alt='' />
          <a href='/' onClick={voltarHome}>Home</a>
        </div>

        <div className='loguinha'>
          <div className='bolinha'></div>
          <img className='logo' height={250} src='/assets/images/logo.png' alt='' />
        </div>
        <p>Garantimos que você fez a <strong>melhor escolha!</strong></p>
      </div>


      <div className='mid'>
        <div className='blocao'>

          <h1 className='erroTag'>
            {erro}
          </h1>

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
            <button onClick={entrarClick} disabled={carregando}>LOGIN</button>
            <p>Não tem uma conta?</p>
            <a href='../cadastro'>Cadastre-se</a>
          </div>
        </div>
      </div>
    </div>
  );
}