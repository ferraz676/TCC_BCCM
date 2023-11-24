import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import LateralCliente from '../../components/lateralCliente/index.js';
import Rodape from '../../components/rodape/rodape';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { listarPedidos } from '../../api/pedidoApi'
import { format } from 'date-fns';



export default function MeuPedido(){

    const [pedidos, setPedidos] = useState([]);

    async function carregarPedidos(){
        const idCliente = storage('cliente-logado').id;
        const r = await listarPedidos(idCliente);
        setPedidos(r);
    }

    useEffect(() => {
        carregarPedidos();
      }, [])

return(

<div className='pagina-pedido'>
    <div>
        <Cabecalho/> 
    </div>
    <div className='odio'> 

<div className='divQueArrumaTd'>
    <div className='clienteLateral'>
        <LateralCliente selecionado='meuPedido'/>
    </div>


        <div className='odio2'>
                <div className='ti' >
                <h1>Olá! Acompanhe aqui seus pedidos e seus dados cadastrais.</h1>
                </div>

                {pedidos.map(item =>

                <table key={item} className='BordaSimples'>
                    <tr>
                        <th className='b1'>Pedido</th>
                        <th>Status</th>
                        <th className='b2'>Mensagem</th>
                    </tr>
                    <tr>
                        <td className='td1'>
                            <div>
                                <h1>{item.cod_nota_fiscal}</h1>
                                <p>{format(new Date(item.dt_pedido), 'dd/MM/yyyy')}</p>
                            </div>
                        </td>


                        <td>
                            <div>
                                <div className='caminhao123'>
                                    <img src='/assets/images/caminhaozinho.png' alt=''/>
                                    <p>{item.ds_status}</p>
                                </div>

                                <a href='/entregaPedido'>Acompanhar entrega</a>
                            </div>
                        </td>

                        <td className='b3'>Seu pedido foi enviado! Obrigada pela confiança.
                        </td>
                    </tr>
                </table>

                )}

                <h1 className='fim'>A inclusão do produto no carrinho não garante a sua reserva, o produto só fica reservado após a conclusão da compra.</h1>
        </div>
    </div>


        </div>

        <Rodape/>
</div>               


)}