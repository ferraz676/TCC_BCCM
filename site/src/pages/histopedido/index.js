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
                <th>pedida</th>
                <th>realizado em</th>
                <th>cliente</th>
                <th></th>
                <th>Email</th>
                <th>Telefone</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>João</td>
                <td>25</td>
                <td>Engenheiro</td>
                <td>São Paulo</td>
                <td>joao@email.com</td>
                <td>(11) 1234-5678</td>
            </tr>
            <tr>
                <td>Maria</td>
                <td>30</td>
                <td>Médica</td>
                <td>Rio de Janeiro</td>
                <td>maria@email.com</td>
                <td>(21) 9876-5432</td>
            </tr>
        </tbody>
    </table>
      

    </div>


    );
  }