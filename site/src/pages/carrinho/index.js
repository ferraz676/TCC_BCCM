import "./index.scss";
import { useEffect, useState } from "react";
import storage from "local-storage";
import CarrinhoProduto from "../../components/carrinhoProduto";
import { Link } from 'react-router-dom'

export default function Carrinho(props) {

  let mostrar = props.mostrar;
 
  const [itens, setItens] = useState([]);
  const [total, setTotal] = useState(0);
  
  function calcularValorTotal(){
    let t = 0;
    for(let item of itens){
        t = parseFloat(t + item.preco * item.qtd).toFixed(2);
    }
    setTotal(t);
  }


  function removerItem(id){
    let carrinho = storage('carrinho');
    carrinho = carrinho.filter(item => item.id != id);

    storage('carrinho', carrinho);

    carregarCarrinho();
  }


  function carregarCarrinho() {
    let carrinho = storage('carrinho');

    for(let i = 0; i < carrinho.length; i++) {
      if(!carrinho[i].qtd) {
        carrinho[i].qtd = 1;
      }
    }
    
    storage('carrinho', carrinho);
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
        <h1>Itens do meu carrinho</h1>
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

          <h2>R$ {total} </h2>

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
        <Link to='/pagamento'  className="b1">
          <button>Finalizar compra</button>
        </Link>

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
