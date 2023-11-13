import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import LateralCliente from '../../components/lateralCliente/index.js';





export default function Meupedido(){


return(

<div className='pagina-pedido'>
    <div>
        <Cabecalho/> 
    </div>
    <div className='odio'> 
    <div className='clienteLateral'>
        <LateralCliente selecionado='meuPedido'/>
    </div>


        <div className='odio2'>
                <div className='ti' >
                <p>Olá  Acompanhe aqui seus pedidos e seus dados cadastrais. Sair</p>
                </div>


                <div className='pn'>
                <input type='text' placeholder='pedido por n°'/>
                <button>Buscar</button>
                </div>


                <div className='tabela'>

                <p className='p1'> Pedido </p> <p className='p2'>Valor</p> <p className='p3'>Status</p> <p className='p4'>Mensagem</p>


        </div>




        </div>










</div>               

</div>



);


}