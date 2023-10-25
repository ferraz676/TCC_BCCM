import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'



export default function Pagamento() {

  return (
    <div className='pagina-pagamento'>
      <Cabecalho/>

    
      <div className='conteudo'>
        <div className='cds'>
           <div>

            <h1>1.Identificação</h1>
              <hr/>
            </div>

            <div className='prf'>
                <p>Nome Completo</p>
            </div>

            <div className='bt1'>
           <input type='text' placeholder=''/>
            </div>

            <div className='prf'>
                <p>E-mail</p>
            </div>
            
            <div className='bt1'>
           <input type='text' placeholder=''/>
            </div>

          <div className='endereco'>
            <h2>Endereço para entrega</h2>
          </div>

        <div className='bloco'>
          <div className='verd'></div>
          <p>Rua Alberto Luizia  978, Jardim novo Horizonte
São Paulo, SP </p>
        </div>

          <div className='ou'>
            <h2>ou</h2>
          </div>

          <div className='cep'>
            <h2>Insira seu CEP para o Frete</h2>
          </div>

          <div className='bt2'>
           <input type='text' placeholder=''/>
           <button className='calc'>Calcular</button>
            </div>

            <div className='opcao'>
              <h2>Escolha a melhor opção de entrega</h2>
            </div>

            <div className='bloco2'>
              <p>Expresso | R$9,86</p>
              <div className='dif'>
                <div className='verd'></div> 
                <p>Média: 4 dias úteis</p>
              </div>
              <p>Máximo: 8 dias úteis</p>
            </div>

           
          <div className='inf'>
            <p>Informamos que a sua encomenda poderá ficar aguardando retirada em uma agência mais próxima caso o seu endereço tenha restrição de entrega ou seja de difícil acesso.</p>
          </div>

          <div className='prazo'>
          <p>*Prazo de entrega após postagem da encomenda.
</p>
          </div>

          <div className='pag'>
            <button className='bt-verd'>Ir para o pagamento</button>
          </div>

         

            
        </div>

        /</div>

     
      
      

    















    <Rodape/>
    </div>
  );
}