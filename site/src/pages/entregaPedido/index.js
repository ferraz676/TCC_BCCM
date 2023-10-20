import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'



export default function Senha() {

  return (
    <div className='entrega-pedidos'>
      <Cabecalho/>

    <div className='part1'>  
       <div className='b1'>
          <h1>Detalhes do Envio</h1>

          <div className='rotas'>
            <div>
              <p>20/06/23</p>
              <p>20/06/23</p>
              <p>13/06/23</p>
              <p>10/06/23</p>
            </div>

            <div className='bolinhas'>
              <img src='./assets/images/bolinhas.png' alt='' height={300}/>
            </div>

            <div className='entregapts'>
              <p>Recebido</p>
              <p>Saiu para entrega</p>
              <p>Coletado pela transportadora</p>
              <p>Pedido gerado</p>
            </div>
            </div> 
       </div> 




        <div className='b2'>
          
        <h1>Detalhes do pedido</h1>

          <div className='tdao'>

          <div className='p1'>
            <p>Número do pedido: </p>
            <p>Remetente</p>
            <p>Nota fiscal: </p>
        </div>

        <div className='p2'>
           <p>12342-01</p>
           <p>092 - BCCM Supplements</p>
           <p>13-234767</p>
        </div>

        </div>
       </div>
       </div>


      <div className='part2'>

        <div className='b3'>
          <h1> Recebedor </h1>
          <p>Nome do Recebedor:<span> Julio Cesar Mohammed</span></p>
          <p>Data: 20/06/2023</p>
          <img src='./assets/images/assinatura.png' alt=''/>
          <p> Assinatura</p>
        </div>



        <div className='b4'>
          <h1>Transportadora</h1>
          <h1>R3 EXPRESS - SP</h1>

          <img src='./assets/images/transportadora.png' alt=''/>

          <p>Email:  r3express@gmail.com.br</p>
          <p>Contato: (11) 9633-7865</p>
        </div>


      </div>





    </div>
  );
}