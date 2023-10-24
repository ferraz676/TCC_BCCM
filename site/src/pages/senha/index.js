import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'
import Menu from '../../components/menu/menu.js'



export default function Senha() {

  return (
    <div className='pagina-senha'>
      <Cabecalho/>


<div className="tudo5">
      <Menu/>
<div className="bloco2">
    <div className="first">
        <h1>Nova Senha (Mínimo 6 caracteres)</h1>
        <input type='text'></input>
        <div></div>
        <span>
        <p>Nível de segurança</p>
        <img src='/assets/images/info.png' alt='' height={20}/>
        </span>
    </div>




    <div className='second'>
    <h1>Confirmar Nova Senha</h1>
        <input type='text'></input>

        <button>Atualizar</button>
    </div>

    
</div>
</div>








    <Rodape/>
    </div>
  );
}