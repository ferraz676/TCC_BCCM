import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'



export default function Senha() {

  return (
    <div className='pagina-home'>
      <Cabecalho/>

      <div className='paginas'>

<div className='pgs'>
    <img className='imgs' src='/assets/images/mala.png' alt=''/>
    <h1 className='tpgs'>Meus pedidos</h1>
</div>

<div className='pgs'>
    <img className='imgs' src='/assets/images/senha.png' alt=''/>
    <h1 className='tpgs'>Trocar senha</h1>
</div>

<div className='pg1'>
    <img className='imgs' src='/assets/images/boneco.png' alt=''/>
    <h1 className='tpgs'>Dados pessoais</h1>
</div>

<div className='pgs'>
    <img className='imgs' src='/assets/images/entrega.png' alt=''/>
    <h1 className='tpgs'>Endereço Entrega</h1>
</div>

<div className='pgs'>
    <img className='imgs' src='/assets/images/voltar.png' alt=''/>
    <h1 className='tpgs'>Sair</h1>
</div>
</div>








    <Rodape/>
    </div>
  );
}