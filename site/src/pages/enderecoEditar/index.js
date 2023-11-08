import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'


export default function Endereco() {

  return (
    <div className='pagina-endereco'>
      <div className='opacidade'>
      <Cabecalho/>
        
      <div className='divisao'>
      <div className='block'>
                <div className='paginas2'>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/mala.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Meus pedidos</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/senha.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Trocar senha</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/boneco.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Dados pessoais</h1>
                    </div>

                    <div className='pgs3'>
                        <img className='imgs' src='/assets/images/entrega.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Endereço Entrega</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/voltar.png' height={30} width={30} alt=''/>
                        <h1 className='tpgs'>Sair</h1>
                    </div>
                </div>
            </div>



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

                    <div className='bloco3'>
                        <img src='./assets/images/lixeira.png' height={50} alt=''/>
                        <button>Excluir</button>
                    </div>

                </div>


                </div>
            </div>
      </div>

      </div>

        <div className='blocoMeio'>


        <div className='local'>

        <div className=''> 
                <h1>CEP</h1>
                <input type=''></input>
                
              </div>

              <div className=''> 
                <h1>Endereço</h1>
                <input type=''></input>
              </div>

       </div>



        <div className='numer'>

              <div className=''> 
                <h1>Numero</h1>
                <input type=''></input>
              </div>

              <div className=''>
                <div className=''> 
                <h1>Complemento</h1>
                <input type='text'></input>
                </div>

                </div>
        </div>

        <div className='bairro'>
                <h1>Bairro</h1>
                <input type=''></input>
        </div>

        <div className='btns'>
          <button className='btn1'>Cancelar</button>
          <button className='btn2'>Atualizar</button>
        </div>


        </div>



        <div className='opacidade'>
        <Rodape/>
        </div>
    </div>
  );

}
