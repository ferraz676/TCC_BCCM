import './index.scss';



export default function histopedido() {

    return (
    <div className='histo-pedido-pagina'>

      <div className='titulo'>

        <div className='t'>
        <img src='./assets/images/lg.png' alt="" />  
          <p>Histórico de Pedidos</p>
          </div>


          
          <div className='botoes'>
           
            <button className='bt1'> <img src='./assets/images/meno.png' alt="" /> </button>
            <button className='bt2'> hoje <img src='./assets/images/baixo.png' alt="" /> </button>
            <button className='bt3'> <img src='./assets/images/maior.png' alt="" /> </button>
          </div>
          


          <div className='btu'>
              <button> Painel de Pedidos </button>
            
          </div>

      </div>



      <table class="tabela">
        <thead>
            <tr>
                <th>pedido</th>
                <th>realizado em</th>
                <th>cliente</th>
                <th>tipo</th>
                <th>pagamento</th>
                <th>situação</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>011</td>
                <td>01/03/2023</td>
                <td>Matheus Ferraz</td>
                <td className='sac'><img src='./assets/images/sacola.png' alt="" /> Retirada  </td>
                <td >Pix</td>
                <td>entregue</td>
            </tr>
            <tr>
                <td>012</td>
                <td>05/03/2023</td>
                <td>Caio Guilherme</td>
                <td className='ca'> <img src='./assets/images/ca.png' alt="" /> entrega </td>
                <td>Pix</td>
                <td>Entregue</td>
            </tr>


            <tr>
            <td>014</td>
                <td>10/03/2023</td>
                <td>Breno Correia</td>
                <td className='ca1'><img src='./assets/images/saco1.png' alt="" /> Retirada</td>
                <td>Débito</td>
                <td>Cancelado</td>


            </tr>

        </tbody>
    </table>
      

    </div>


    );
  }