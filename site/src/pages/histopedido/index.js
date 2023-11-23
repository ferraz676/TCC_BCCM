import './index.scss';
import { useNavigate } from 'react-router-dom';
import { consultarPedidos } from '../../api/pedidoApi';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { format } from 'date-fns';

export default function Histopedido() {


    const navigate = useNavigate();

    const [pedidos, setPedidos] = useState([]);

    async function carregarPedidos(){
        const r = await consultarPedidos();
        setPedidos(r);
    }

    useEffect(() => {
        carregarPedidos();
        console.log(pedidos);
      }, [])

    function voltarHome(){
        navigate('/teladm')
    }

    return (
    <div className='histo-pedido-pagina'>

      <div className='titulo'>
        <div className='t'>
        <img onClick={voltarHome} src='./assets/images/lg.png' alt="" />  
          <p>Histórico de Pedidos</p>
          </div>

          <div className='btu'>
              <button> Painel de Pedidos </button>
          </div>
      </div>


      {pedidos.map(item =>

      <table class="tabela">
        <thead>
            <tr>
                <th>Pedido</th>
                <th>Realizado em</th>
                <th>Cliente</th>
                <th>Tipo</th>
                <th>Pagamento</th>
                <th>Situação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{item.pedido}</td>
                <td>{format(new Date(item.data), 'dd/MM/yyyy')}</td>
                <td>{item.cliente}</td>
                <td className='sac'><img src='./assets/images/sacola.png' alt="" />Entrega</td>
                <td >{item.tipoPagamento}</td>
                <td>Confirmado</td>
            </tr>

        </tbody>
    </table>

    )}

    </div>


    );
  }