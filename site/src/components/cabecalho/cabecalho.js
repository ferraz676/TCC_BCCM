import './cabecalho.scss'
import { useState, useEffect } from 'react'
import storage from 'local-storage';
import { useNavigate, Link } from 'react-router-dom'
import Carrinho from '../../pages/carrinho/index.js'

export default function Cabecalho() {

    const [carrinho, setCarrinho] = useState(false);
    const [cliente, setCliente] =  useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if(storage("cliente-logado")){
          const clienteLogado = storage('cliente-logado');
          console.log(clienteLogado);
          setCliente(clienteLogado.cliente);
        }
      }
    , [])

    function dados(){
      if(!storage('cliente-logado')){
        navigate('/login')
      }
      else {
        navigate('/dadosPessoais')
      }
    }



    function mostrarCarrinho(){
      setCarrinho(true);
    }

    function esconderCarrinho() {
      setCarrinho(false);
    }
    

    function voltarFuncao(){
      navigate('/')
    }
    
    return(
        <main className='cab'>
          <Carrinho className='carrinhoLateral' mostrar={carrinho} esconder={esconderCarrinho}/>
          <div className='first'>
            <span><strong>Qualidade aprovada</strong> juntamente com <strong>preço Justo</strong></span>
          </div>

      <div className='mid'>
            <a onClick={voltarFuncao}><img className='logo' src='/assets/images/logo.png' height={200} alt=''/></a>

            
        <div className='inpt'>
            <input className='se' placeholder="Digite o que procura" ></input>
            <button className='si'><img src='/assets/images/lupa.png' height={20} alt=''/></button>
        </div>

        <div className='profile'>
          <a >
            <a></a>
            <img onClick={dados} src='/assets/images/perfil.png' height={50} alt=''/>
          </a>
            <p>Bem-Vindo,</p>
            {
              cliente ?
               <h1 className='usuarioInter'>{cliente}!</h1>
               
               :
               
               <div className='loglog'>
                <strong><Link to='/login'> Login </Link> </strong> ou 
                <strong> <Link to='/cadastro'> Cadastre-se </Link> </strong> 
               </div>
           } 

        </div>

        <a><img className='vrum-vrum' src='/assets/images/carrinho.png' height={50} alt='' onClick={mostrarCarrinho} /></a>
      </div>


      <div className='low'>
        
        <Link to = '/creatina'> Creatina </Link>
        
        <Link to = '/anabolizante'> Anabolizantes </Link>
        
        <Link to = '/Whey'> Whey Protein </Link>

        <Link to = '/multivitaminico'> Vitaminas </Link>

      </div>


        </main>
    )
}