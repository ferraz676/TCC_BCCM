import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'



export default function Pagamento2() {

  return (
    <div className='pagina-pagamento2'>
      <Cabecalho/>

    
      <div className='conteudo'>
        <div className='cds'>
           <div>

            <h1 className='titulo'>1.Identificação <img className='verificado' src='/assets/images/verificado.png' alt=''/> </h1>
              <hr/>
            </div>



            <div className='prf'>
                <p>Nome Completo</p>
            </div>

            <div className='bt1'>
           <p className='nom'>Jailton Neves</p>
            </div>

            <div className='prf'>
                <p>E-mail</p>
            </div>
            
            <div className='bt1'>
           <p className='nom'>jailtonneves@hotmail.com</p>
            </div>

          <div className='endereco'>
            <h2>Endereço para entrega</h2>
          </div>

        <div className='bloco'>
          <div className='verd'></div>
          <p>Rua Alberto Luizia  978, Jardim novo Horizonte
São Paulo, SP </p>
        </div>


            <div className='opcao'>
              <h2>Opção de entrega</h2>
            </div>

            <div className='bloco2'>
              <p>Expresso | R$24,89</p>
              <div className='dif'>
                <div className='verd'></div> 
                <p>Média: 4 dias úteis</p>
              </div>
              <p>Máximo: 8 dias úteis</p>
            </div>

           
         
          </div>

          <div className='part-2'>
           <div>

           <h1 className='pagam'>2.Pagamento</h1>
              <hr/> 
            </div>

        
            <div className='formas'>
            <img className='card' src='/assets/images/cartao.png' alt=''/> 
            <p className='pagm'>Cartão de crédito</p>
            </div>

        
            <div className='formas'>
            <img className='card-d' src='/assets/images/debito.png' alt=''/> 
            <p className='pagm'>Cartão de débito</p>
            </div>
            
            <div className='formas'>
            <img className='pix' src='/assets/images/pix.png' alt=''/> 
            <p className='pagm'>Pix</p>
            </div>

            <div className='formas'>
            <img className='bole' src='/assets/images/boleto.png' alt=''/> 
            <p className='pagm'>Boleto bancário</p>
            </div>
      </div>

      <div className='pag-3'>

        <div> <h1 className='resum'>Resumo do pedido</h1> </div>

          <div className='season-3'>
              <img className='creat' src='/assets/images/crea1.png'  />
              <div className='infm'>
              <p><strong>Creatina Monohidratada 200g - Growth Supplements</strong></p>
                <p>R$ 88,80</p>
                <p className='qtd'> <strong>Quantidade: 2 </strong></p>
                <p>R$177,60</p>
              </div>
          </div>

      <div className='req'> 
        <div className='section-req'>
          <p>Subtotal(1 produto)</p>
          <p>R$177,60</p>
        </div>

        <div className='section-req2'>
          <p>Frete</p>
          <p>R$9,18</p>
        </div>

        <div className='tot'>
            <p>Total</p>
            <p>R$186,78</p>
          </div>

      </div>


    <div className='desconto'>
      <div className='pc'>
        <p> <s>R$186,78 </s> </p>
        <p className='verd-esc2'>169,02</p>
      </div>

      <div className='valor'>
        <p className='vl'>Valor com <strong className='verd-esc'>10% de descostono</strong> boleto ou no PIX</p>
      </div>

    </div>

      <div className='pontos'>
        <p>Ganhe <strong className= 'pt'>177.60 pontos</strong> nesta compra</p>
      </div>



      <div className='verificacoes'>
        <div className='vf'>
        <img className='verif' src='/assets/images/verif.png'  />
        <p>Possuimos o seu produto em estoque e ele chegará rapido até você</p>
        </div>

        <div className='vf'>
        <img className='verif' src='/assets/images/verif.png'  />
        <p className='esp'>Produtos com padrão europeu de qualidade</p>
        </div>

        <div className='vf'>
        <img className='verif' src='/assets/images/verif.png'  />
        <p className='esp'>Máquinas da fabrica semanalmente verificadas</p>
        </div>

        <div className='vf'>
        <img className='verif' src='/assets/images/verif.png'  />
        <p className='esp'>Produtos aprovados em todos os laudos</p>
        </div>
      </div>

      </div>



         

            
        

        </div>

     
      
      

    




       
       
       
         












    <Rodape/>
    </div>
  );
}