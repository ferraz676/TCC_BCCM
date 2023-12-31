import './cabecalho.scss'
import { useState, useEffect } from 'react'
import storage from 'local-storage';
import { useNavigate, Link } from 'react-router-dom'

export default function CabecalhoADM() {

  const [usuario, setUsuario] =  useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    if(!storage('adm-logado')) {
      navigate('/')
    } 
    else{
      const usuarioLogado = storage('adm-logado');
      setUsuario(usuarioLogado.email);
    }
  }, [])



    return(
        <main className='cabADM'>
          <div className='first'>
            <span><strong>Qualidade aprovada</strong> juntamente com com <strong>preço Justo</strong></span>
          </div>

      <div className='mid'>
            <Link to='/teladm'><img className='logo' src='/assets/images/logo.png' height={200} alt=''/></Link>

            
        <div className='inpt'>
            <input placeholder="Digite o que procura"></input>
            <button><img src='/assets/images/lupa.png' height={20} alt=''/></button>
        </div>

        <div className='profile'>
            <img src='/assets/images/perfil.png' height={50} alt=''/>
            <p>Seja Bem-vindo, Adm <strong>{usuario}!</strong></p>
        </div>
      </div>


        </main>
    )
}