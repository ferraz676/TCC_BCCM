import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'



export default function Senha() {

  return (
    <div className='pagina-pagamento'>
      <Cabecalho/>

    

      <div className='principal'>
      
      <div className='identificacao'>
            <h1>1.identificação</h1>
        </div>


               <div className='pt1'> 
                <h1>Nome Completo</h1>
                <input type='text'></input>
               
              </div>

              

              <div className='pt1'> 
                <h1>E-mail</h1>
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




    















    <Rodape/>
    </div>
  );
}