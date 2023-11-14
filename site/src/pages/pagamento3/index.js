import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'



export default function Pagamento3() {

  return (
    <div className='pagina-pagamento3'>
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
              <p>Expresso | R$9,86</p>
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


            <h1 className='title'> Escolha a forma de pagamento </h1>

            <div className='midCartao'>

              <div className='imgCartao'>
                  <img src='' alt=''/>
                  <h1>Cartão de Crédito</h1>
              </div>

              <div className='protecao'>
                  <img src='' alt=''/>
                  <p>Este é um pagamento seguro, realizado em ambiente criptografado.</p>
              </div>

              <div className='campoCartao'>
                <h1>Número do cartão</h1>
                <input></input>
                  <div className='nomeComBandeiras'>
                      <p>Somente Números.</p>
                      <img src='' alt=''/>
                      <img src='' alt=''/>
                      <img src='' alt=''/>
                      <img src='' alt=''/>
                      <img src='' alt=''/>
                      <img src='' alt=''/>
                  </div>
              </div>

              <div className='nomeCartao'>
                <h1>Nome Impresso do Cartão</h1>
                <input></input>
              </div>

              <div className='nomeCartao'>
                <h1>CPF do Titular</h1>
                <input></input>
              </div>

              <div className='validade'>
                  <h1>Validade</h1>
                  <input></input>
              </div>

              <div className='cvv'>
                  <h1>Código de Segurança:</h1>
                  <input></input>
                  <p>O código "CVV" ou "CVC" impresso atrás do cartão.</p>
              </div>

              <button>Finalizar Pedido</button>

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