import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'
import { salvar, listar } from '../../api/enderecoApi.js'
import { useEffect, useState } from 'react';
import CardEndereco from '../../components/cardEndereco/index.js';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { buscarImagem } from '../../api/produtoApi.js'

export default function Pagamento() {

  const navigate = useNavigate();
  const [enderecos, setEnderecos] = useState([]);
  const [itens, setItens] = useState([]);
  const [frete, setFrete] = useState(9.18);


  async function carregarEndereco() {
    const id = storage('cliente-logado').id;
    const r = await listar(id);
    setEnderecos(r);
  }

  function carregarItens() {
    let carrinho = storage('carrinho');

    for (let i = 0; i < carrinho.length; i++) {
      if (!carrinho[i].qtd) {
        carrinho[i].qtd = 1;
      }
    }

    storage('carrinho', carrinho);
    setItens(carrinho);
  }

  function calcularValorTotal(){
    let t = 0;
    for(let item of itens){
        t = parseFloat(t + frete + item.preco * item.qtd).toFixed(2);
    }
    return t;
  }

  function calcularValorComDesconto(){
    let t = 0;
    for(let item of itens){
        t = parseFloat(t + frete + item.preco * item.qtd).toFixed(2);
    }
    let desconto = t * (10/100);
    let final = t - desconto;
    return final;
  }

  function calcularSubtotal(){
    let t = 0;
    for(let item of itens){
        t = parseFloat(t + item.preco * item.qtd).toFixed(2);
    }
    return t;
  }



  useEffect(() => {
    carregarEndereco();
    carregarItens();
  }, [])

  async function novoEndereco() {
    navigate(`/enderecoEditar`)
  }

  return (
    <div className='pagina-pagamento'>
      <Cabecalho />


      <div className='conteudo'>
        <div className='cds'>
          <div>

            <h1 className='titulo'>1.Identificação</h1>
            <hr />
          </div>



          <div className='prf'>
            <p>Nome Completo</p>
          </div>

          <div className='bt1'>
            <input type='text' placeholder='' />
          </div>

          <div className='prf'>
            <p>E-mail</p>
          </div>

          <div className='bt1'>
            <input type='text' placeholder='' />
          </div>

          <div className='endereco'>
            <h2>Endereço para entrega</h2>
          </div>


          {enderecos.map(item =>

            <CardEndereco item={item} />

          )}



          <div className='ou'>
            <h2>ou</h2>
          </div>

          <div className='cep'>
            <button onClick={novoEndereco}>Novo Endereço</button>
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

        <div className='part-2'>
          <div>

            <h1 className='pagam'>2.Pagamento</h1>
            <hr />
          </div>


          <div className='formas'>
            <img className='card' src='/assets/images/cartao.png' alt='' />
            <p className='pagm'>Cartão de crédito</p>
          </div>


          <div className='formas'>
            <img className='card-d' src='/assets/images/debito.png' alt='' />
            <p className='pagm'>Cartão de débito</p>
          </div>

          <div className='formas'>
            <img className='pix' src='/assets/images/pix.png' alt='' />
            <p className='pagm'>Pix</p>
          </div>

          <div className='formas'>
            <img className='bole' src='/assets/images/boleto.png' alt='' />
            <p className='pagm'>Boleto bancário</p>
          </div>
        </div>

        <div className='pag-3'>

          <div> <h1 className='resum'>Resumo do pedido</h1> </div>


          {itens.map(item =>


            <div className='season-3'>
              <img className='creat' src={buscarImagem(item.imagem)} alt='' />
              <div className='infm'>
                <p><strong>{item.produto}</strong></p>
                <p>R$ {item.preco}</p>
                <p className='qtd'> <strong>Quantidade: {item.qtd}</strong></p>
                <p>R${item.preco * item.qtd}</p>
              </div>
            </div>


          )}



          <div className='req'>
            <div className='section-req'>
              <p>Subtotal</p>
              <p>R${calcularSubtotal()}</p>
            </div>

            <div className='section-req2'>
              <p>Frete</p>
              <p>R${frete}</p>
            </div>

            <div className='tot'>
              <p>Total</p>
              <p>R${calcularValorTotal()}</p>
            </div>

          </div>


          <div className='desconto'>
            <div className='pc'>
              <p> <s>R${calcularValorTotal()}</s> </p>
              <p className='verd-esc2'>{calcularValorComDesconto()}</p>
            </div>

            <div className='valor'>
              <p className='vl'>Valor com <strong className='verd-esc'>10% de descostono</strong> boleto ou no PIX</p>
            </div>

          </div>

          <div className='pontos'>
            <p>Ganhe <strong className='pt'>177.60 pontos</strong> nesta compra</p>
          </div>



          <div className='verificacoes'>
            <div className='vf'>
              <img className='verif' src='/assets/images/verif.png' alt='' />
              <p>Possuimos o seu produto em estoque e ele chegará rapido até você</p>
            </div>

            <div className='vf'>
              <img className='verif' src='/assets/images/verif.png' alt='' />
              <p className='esp'>Produtos com padrão europeu de qualidade</p>
            </div>

            <div className='vf'>
              <img className='verif' src='/assets/images/verif.png' alt='' />
              <p className='esp'>Máquinas da fabrica semanalmente verificadas</p>
            </div>

            <div className='vf'>
              <img className='verif' src='/assets/images/verif.png' alt='' />
              <p className='esp'>Produtos aprovados em todos os laudos</p>
            </div>
          </div>

        </div>








      </div>


























      <Rodape />
    </div>
  );
}