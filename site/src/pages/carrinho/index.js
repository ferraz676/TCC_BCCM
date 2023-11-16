import "./index.scss";
import { useEffect, useState } from "react";
import storage from "local-storage";
import { buscarPorId } from '../../api/produtoApi.js'
import CarrinhoProduto from "../../components/carrinhoProduto";


export default function Carrinho(props) {

  let mostrar = props.mostrar;
 
  const [itens, setItens] = useState([]);
  const [total, setTotal] = useState(0);
  
  function calcularValorTotal(){
    let t = 0;
    for(let item of itens){
        t = t + item.preco * item.qtd;
    }
    setTotal(t);
  }


  function removerItem(id){
    let carrinho = storage('carrinho');
    carrinho = carrinho.filter(item => item.id != id);

    storage('carrinho', carrinho);

    carregarCarrinho();
  }


/*   function carregarCarrinho(){
    let carrinho = storage('carrinho')
    if(carrinho){

      let temp = [];

      for(let i = 0; i < carrinho.length; i++){
        let produto = carrinho[i];

        produto.qtd = 1;

        temp.push(produto)
      }

      storage('carrinho', temp);
      setItens(temp)
    }  
  } */

  function carregarCarrinho() {
    let carrinho = storage('carrinho');
    setItens(carrinho);
  }


  useEffect(() => {
    carregarCarrinho();
    }, []);

  useEffect(() => {
    calcularValorTotal()
  }, [itens]);

  return (
    <div className="carrinhoLateral"  style={{visibility: mostrar ? 'visible' : 'hidden'}}>
      <div className="ti">
        <h1>Itens do meu carrinho (2) </h1>
      </div>

      {itens.map((item, index) => 

          <CarrinhoProduto produto={item} removerItem={removerItem}  carregarCarrinho={carregarCarrinho} index={index}/>
        )}

     

      <div className="meio">
        <div className="rp">
          <h1>Resumo do pedido</h1>
        </div>
      </div>

      <div className="m2">
        <div className="sub">
          <h1>Subtotal</h1>

          <h2>R${total}</h2>

          <h3>Valor com 10% de desconto no boleto ou PIX.</h3>
        </div>
      </div>

      <div className="quase">
        <div className="mage">
          <img className="vit" src="/assets/images/caminhaozinho.png" height={30} alt=''/>
        </div>

        <div className="text">
          <p>Nossos envios estão ocorrendo normalmente.</p>
        </div>
      </div>

      <div className="final">
        <div className="b1">
          <button>Finalizar compra</button>
        </div>

        <div className="b2">
          <button>Escolher outros produtos </button>
        </div>

        <div className="b2">
          <button onClick={props.esconder}>Fechar carrinho</button>
        </div>
      </div>
    </div>
  );
}
