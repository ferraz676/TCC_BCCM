import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'



function Home() {

  return (
    <div className='dados-pessoais'>
      <Cabecalho/>
        <div className='mid-1'>
            <div className='block'>
                <div className='paginas2'>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/mala.png' alt=''/>
                        <h1 className='tpgs'>Meus pedidos</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/senha.png' alt=''/>
                        <h1 className='tpgs'>Trocar senha</h1>
                    </div>

                    <div className='pgs3'>
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
            </div>


            <div className='principal'>
               <div className='pt1'> 
                <h1>CPF</h1>
                <input type='text'></input>
                <p>Somente números.</p>
              </div>

              <div className='pt1'> 
                <h1>Data de Nascimento</h1>
                <input type='date'></input>
              </div>

              <div className='pt1'> 
                <h1>Nome Completo</h1>
                <input type='text'></input>
              </div>

              <div className='pt2'>
                <div className='d1'> 
                <h1>Telefone Celular</h1>
                <input type='text'></input>
                </div>
                <div className='d1'>
                <h1>Telefone Fixo(Opcional)</h1>
                <input type='text'></input>
                </div>
              </div>


              <div className='pt3'>
              <h1>Gênero</h1>
                <div className='d1'> 
                <input type='checkbox'></input>
                <h1>Masculino</h1>
                
                </div>
                <div className='d1'>
                <input type='checkbox'></input>
                <h1>Feminino</h1>
                </div>
              </div>

              <div className='pt1'> 
                <h1>Dados de Acesso (Email)</h1>
                <input type='text'></input>
              </div>

              <div className='atualizar'>
                <h1>Atualizar</h1>
            </div>

            </div>


            <div className='right'>
                <div className='promocoes'>
                    <input type='checkbox'></input>
                    <p>Receber promoções via whatsapp</p>
                </div>

                <div className='promocoes'>
                    <input type='checkbox'></input>
                    <p>Receber atualizações de pedidos via whatsapp</p>
                </div>

                <div className='promocoes2'>
                    <p>"Preços e condições de pagamento apresentados neste "site" somente são válidos para as compras efetuadas no ato da sua exibição. *Condições de pagamento à vista somente para PIX e boleto bancário.</p>
                </div>

            </div>

            

        </div>
    </div>
  );

}

export default Home;