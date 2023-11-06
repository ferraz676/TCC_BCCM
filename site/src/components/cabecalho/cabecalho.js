import './cabecalho.scss'
import { useState, useEffect } from 'react'
import storage from 'local-storage';
import { useNavigate, Link } from 'react-router-dom'


export default function Cabecalho() {

    
    const [cliente, setCliente] =  useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(storage("cliente-logado")){
          const clienteLogado = storage('cliente-logado');
          console.log(clienteLogado);
          setCliente(clienteLogado.cliente);
          navigate('/')          
        }
      }
    , [])
    
    return(
        <main className='cab'>
          <div className='first'>
            <span><strong>Qualidade aprovada</strong> juntamente com <strong>preço Justo</strong></span>
          </div>

      <div className='mid'>
            <a href='../../pages/Home'><img className='logo' src='/assets/images/logo.png' height={200} alt=''/></a>

            
        <div className='inpt'>
            <input placeholder="Digite o que procura"></input>
            <button><img src='/assets/images/lupa.png' height={20} alt=''/></button>
        </div>

        <div className='profile'>
            <img src='/assets/images/perfil.png' height={50} alt=''/>
            <p>Bem-Vindo!</p>
            {
              cliente ?
               <h1>Bem vindo, {cliente}</h1>
               
               :
               
               <div className='loglog'>
                <strong><Link to='/login'> Login </Link> </strong> ou 
                <strong> <Link to='/cadastro'> Cadastre-se </Link> </strong> 
               </div>
           } 

            <a href='../../pages/carrinho'><img className='vrum-vrum' src='/assets/images/carrinho.png' height={50} alt=''/></a>

        </div>
      </div>


      <div className='low'>
        <Link to = '/creatina'><img src='/assets/images/barrinhas.png' alt='' height={30}/></Link>
        
        <Link to = '/creatina'> Creatina </Link>
        
        <Link to = '/anabolizante'> Anabolizantes </Link>
        
        <Link to = '/Whey'> Whey Protein </Link>

        <Link to = '/multivitaminico'> Vitaminas </Link>
      </div>


        </main>
    )
}