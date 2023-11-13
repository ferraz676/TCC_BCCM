import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'
import LateralCliente from '../../components/lateralCliente/index.js'



export default function Endereco() {

  return (
    <div className='pagina-endereco'>
      <Cabecalho/>
        
      <div className='divisao'>
      <LateralCliente selecionado='endereco'/>



            <div className='part2'>
                <h1>Endereço de Entrega <span> (Especifique a rua, bairro e endereço)</span> </h1>
                <div className='bloco2'>
                    <h1>
                    Rua Alberto Luizia - 978, Jardim novo Horizonte
                    </h1>



                <div className='btns'>

                    <div className='bloco3'>
                        <img src='./assets/images/lapis.png' alt=''/>
                        <button>Editar</button>
                    </div>


                </div>


                </div>
            </div>
      </div>








        <Rodape/>
    </div>
  );

}
