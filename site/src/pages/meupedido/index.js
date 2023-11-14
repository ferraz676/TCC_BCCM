import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import LateralCliente from '../../components/lateralCliente/index.js';
import Rodape from '../../components/rodape/rodape';




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
                <h1>Olá! Acompanhe aqui seus pedidos e seus dados cadastrais.</h1>
                </div>


                <div className='pn'>
                <input type='text' placeholder='Pedido por N°'/>
                <button>Buscar</button>
                </div>

                <table className='BordaSimples'>
                    <tr>
                        <th className='b1'>Pedido</th>
                        <th>Valor</th>
                        <th>Status</th>
                        <th className='b2'>Mensagem</th>
                    </tr>
                    <tr>
                        <td className='td1'>
                            <div>
                                <h1>BCCM-5724929-00001</h1>
                                <p>15/05/2023 10:36:00</p>
                            </div>
                        </td>

                        <td>R$ 43,83</td>

                        <td>
                            <div>
                                <div className='caminhao123'>
                                    <img src='/assets/images/caminhaozinho.png' alt=''/>
                                    <p>Pedido Enviado.</p>
                                </div>

                                <a href='/entregaPedido'>Acompanhar entrega</a>
                            </div>
                        </td>

                        <td className='b3'>Seu pedido foi enviado! Obrigada pela confiança.
                        </td>
                    </tr>
                </table>


                <h1 className='fim'>A inclusão do produto no carrinho não garante a sua reserva, o produto só fica reservado após a conclusão da compra.</h1>
        </div>



        </div>

        <Rodape/>
</div>               


)}