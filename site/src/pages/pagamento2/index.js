import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'
import { listar } from '../../api/enderecoApi.js'
import { useEffect, useState } from 'react';
import CardEndereco from '../../components/cardEndereco/index.js';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { buscarImagem } from '../../api/produtoApi.js'
import { consultarCliente } from '../../api/clienteApi'
import { salvarNovoPedido } from '../../api/pedidoApi.js';
import { toast } from 'react-toastify';


export default function Pagamento2(props) {

  const [mostrarCartao, setMostrarCartao] = useState(false)


  function toggleMidCartao1() {
    setMostrarCartao(!mostrarCartao);
    setTipoCartao('Crédito')
  }

  function toggleMidCartao2() {
    setMostrarCartao(!mostrarCartao);
    setTipoCartao('Débito')
  }
  const navigate = useNavigate();
  
  const [clientes, setClientes] = useState([]);
  const [frete, setFrete] = useState('');
  const [tipoFrete, setTipoFrete] = useState('');
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [cpf, setCpf] = useState('')
  const [vencimento, setVencimento] = useState('');
  const [cvv, setCvv] = useState('');
  const [tipoCartao, setTipoCartao] = useState('');
  const [parcela, setParcela] = useState('');
  const [enderecos, setEnderecos] = useState([]);
  const [itens, setItens] = useState([]);
  const [idEndereco, setIdEndereco] = useState();

  async function carregarEndereco() {
    const idCliente = storage('cliente-logado').id;
    const idEndereco = storage('endereco-selecionado').id;
    const r = await listar(idCliente);
    const filtro = r.filter(item => item.id === idEndereco)
    setEnderecos(filtro);
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

  async function carregarClientes(){
    const idCliente = storage('cliente-logado').id;
    const resposta = await consultarCliente(idCliente);
    setClientes(resposta);
  }

  function lerValorFrete(tipoSelecionado){
    console.log(tipoSelecionado);
    if(tipoSelecionado === "Padrão"){
      setFrete(10.00);
    }
    else
    setFrete(25.00);
}

function pegarIdEndereco(){
  const idEndereco = storage('endereco-selecionado').id;
  setIdEndereco(idEndereco);
}


  useEffect(() => {
    carregarEndereco();
    carregarItens();
    carregarClientes();
    pegarIdEndereco();
  }, [])


  async function salvarPedido(){

    try{
    
      let idCliente = storage('cliente-logado').id; 
      let produtos = storage('carrinho')

    let pedido = {

        frete: tipoFrete,
        idEndereco: idEndereco,
        tipoPagamento:'Cartão',
        cartao: {
          nome: nome,
          numero: numero,
          vencimento: vencimento,
          codSeguranca: cvv,
          formaPagamento: tipoCartao,
          parcelas: parcela
          },
        produtos: produtos

        }

        if(!numero){
          toast.error('Número do Cartão Obrigatório.')
        }
        else if(numero.length < 14){
          toast.error('Número do Cartão Incompleto.')
        }
        else if(!nome){
          toast.error(' Nome Obrigatório.')
        }
        else if(!cpf){
          toast.error('Cpf Obrigatório!')
        }
        else if(cpf.length < 14){
          toast.error('O cpf deve ter pelo menos 14 caracteres.')
        }
        else if(!vencimento){
          toast.error('Vencimento Obrigatório!')
        }
        else if(vencimento.length < 5){
          toast.error('Vencimento Incorreto.')
        }
        else if(vencimento.substring(vencimento.length - 2) < 23){
          toast.error('Vencimento Incorreto.')
        }
        else if(!cvv){
          toast.error('Cvv Obrigatório!')
        }
        else if(cvv.length < 3){
          toast.error('Cvv Incorreto.')
        }
        else if(parcela == '' || !parcela){
          toast.error('Selecione a Parcela Desejada.')
        }
        else if(tipoFrete == '' || !tipoFrete){
          toast.error('Selecione o tipo de Frete Desejado.')
        }
        else {
          const r = await salvarNovoPedido(idCliente, pedido);
        toast.dark('Compra Feita com Sucesso!')
        storage('carrinho', []);
        navigate('/')
        }

        

    } catch(err){
      toast.error(err.response.data.erro)
    }
    
  }

  function alterarNumeroCartao(alteracao) {
    let novaAlteracao = alteracao.slice(numero.length)
    novaAlteracao = Number(novaAlteracao)
    
    if(alteracao.length < numero.length)
        setNumero(alteracao)

    else if(isNaN(novaAlteracao) === false){
      
            if(alteracao.length === 4 && alteracao.length > numero.length) {
                setNumero(`${alteracao} `)
            }
            else if(alteracao.length === 9 && alteracao.length > numero.length){
                setNumero(`${alteracao} `)
            }
            else if(alteracao.length <= 14){
                setNumero(alteracao)
            }
        
    }
}

function mudarCpf(alteracao){
  let novaAlteracao = alteracao.slice(cpf.length)
  novaAlteracao = Number(novaAlteracao)
  
  if(alteracao.length < cpf.length)
      setCpf(alteracao)

  else if(isNaN(novaAlteracao) === false){
      if((alteracao.length === 3 && alteracao.length > cpf.length) || (alteracao.length === 7 && alteracao.length > cpf.length)){
          setCpf(`${alteracao}.`)
      }
      else if(alteracao.length === 11 && alteracao.length > cpf.length){
          setCpf(`${alteracao}-`)
      }
      else if(alteracao.length <= 14){
          setCpf(alteracao)
      }
  }
}


function alterarValidade(alteracao) {
  let novaAlteracao = alteracao.slice(vencimento.length)
  novaAlteracao = Number(novaAlteracao)
  
  if(alteracao.length < vencimento.length)
      setVencimento(alteracao)

  else if(isNaN(novaAlteracao) === false){
    
          if(alteracao.length === 2 && alteracao.length > vencimento.length) {
              setVencimento(`${alteracao}/`)
          }
          else if(alteracao.length <= 5){
            setVencimento(alteracao)
        }
          
      
  }
}

function alterarCvv(alteracao) {
  let novaAlteracao = alteracao.slice(cvv.length)
  novaAlteracao = Number(novaAlteracao)
  
  if(alteracao.length < cvv.length)
      setCvv(alteracao)

  else if(isNaN(novaAlteracao) === false){

          if(alteracao.length <= 3){
            setCvv(alteracao)
        }
          
      
  }
}

  return (
    <div className='pagina-pagamento2'>
      <Cabecalho />


      <div className='conteudo'>
        <div className='cds'>
          <div>

            <h1 className='titulo'>1.Identificação <img className='verificado' src='/assets/images/verificado.png' alt='' /> </h1>
            <hr />
          </div>



          {clientes.map(item =>
        <div className='informaçoes_pessoais'>
          <div className='prf'>
            <p>Nome Completo</p>
          </div>

          <div className='bt1'>
          <span>{item.cliente}</span>
          </div>

          <div className='prf'>
            <p>E-mail</p>
          </div>

          <div className='bt1'>
          <span>{item.email}</span>
          </div>
        </div>
      )}

          <div className='endereco'>
            <h2>Endereço para entrega</h2>
          </div>

          <div className='blocoEndereco' >
          {enderecos.map(item =>

          <CardEndereco item={item} />

          )}
          </div>



        </div>

        

        <div className='part-2' style={{height: mostrarCartao ? 740 : 220}}>
          <div>
            <h1 className='pagam'>2.Pagamento</h1>
            <hr />
          </div>

          <div className='formas' onClick={toggleMidCartao1} >
            <img className='card' src='/assets/images/cartao.png' height={35} alt=''/> 
            <p className='pagm'>Cartão de crédito</p>
            </div>

        
            <div className='formas' onClick={toggleMidCartao2}>
            <img className='card-d' src='/assets/images/debito.png' height={35} alt=''/> 
            <p className='pagm'>Cartão de débito</p>
            </div>


          

          <div className='midCartao'  style={{visibility: mostrarCartao ? 'visible' : 'hidden'}}>

            <div className='imgCartao'>
              <img src='/assets/images/cartaozinho.png' height={25} alt='' />
              <h1>Cartão de {tipoCartao}</h1>
            </div>

            <div className='protecao'>
              <img src='/assets/images/cadeadozinho.png' height={10} alt='' />
              <p>Este é um pagamento seguro, realizado em ambiente criptografado.</p>
            </div>

            <div className='campoCartao'>
              <h1>Número do cartão</h1>
              <input type='text' className='input' value={numero} onChange={e => alterarNumeroCartao(e.target.value)}></input>
              <div className='nomeComBandeiras'>
                <p>Somente Números.</p>
                <img src='/assets/images/cartoes123.png' height={10} alt='' />
              </div>
            </div>

            <div className='nomeCartao'>
              <h1>Nome Impresso do Cartão</h1>
              <input type='text' className='input' value={nome} onChange={e => setNome(e.target.value)}></input>
            </div>

            <div className='nomeCartao'>
              <h1>CPF do Titular</h1>
              <input type='text' className='input' value={cpf} onChange={e => mudarCpf(e.target.value)}></input>
            </div>

            <div className='validade'>
              <h1>Validade</h1>
              <input type='text' className='input2' value={vencimento} onChange={e => alterarValidade(e.target.value)}></input>
            </div>

            <div className='cvv'>
              <h1>Código de Segurança:</h1>
              <input type='text' className='input333' value={cvv} onChange={e => alterarCvv(e.target.value)}></input>
              <p>O código "CVV" ou "CVC" impresso atrás do cartão.</p>
            </div>


          <div className='separacaoFrete'>
            <div className='selectpg3' >
            <h1>Parcelas:</h1>
            <select className='disgraca' value={parcela} onChange={e => setParcela(e.target.value)}>
              <option>Selecione</option>
              <option value="1">1x à vista</option>
              <option value="2">2x sem juros</option>
              <option value="3">3x sem juros</option>
            </select>
            </div>

          <div className='arrumarsabomba'>
          <h1>Entrega:</h1>
          <select className='bloco99' value={tipoFrete} onChange={e => {lerValorFrete(e.target.value); setTipoFrete(e.target.value)}}>
            <option>Selecione</option>
            <option value='Expresso'>Expresso || R$25,00</option>
            <option value='Padrão'>Padrão || R$10,00</option>
          </select>
          </div>
          
          </div>
            

            <button onClick={salvarPedido}>Finalizar Pedido</button>

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
              <p>{tipoFrete}</p>
            </div>

            <div className='tot'>
              <p>Total</p>
              <p>R${calcularValorTotal()}</p>
            </div>

          </div>


          <div className='desconto'>
            <div className='pc'>
              <p> <s>R${calcularValorTotal()} </s> </p>
              <p className='verd-esc2'>{calcularValorComDesconto()}</p>
            </div>

            <div className='valor'>
              <p className='vl'>Valor com <strong className='verd-esc'>10% de desconto</strong></p>
            </div>

          </div>

          <div className='pontos'>
            <p>Ganhe <strong className='pt'>17.79 pontos</strong> nesta compra</p>
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