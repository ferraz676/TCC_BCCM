import "./index.scss";
import { useEffect, useState } from "react";
import storage from "local-storage";
import { buscarPorId } from '../../api/produtoApi.js'
import CarrinhoProduto from "../../components/carrinhoProduto";


export default function Carrinho(props) {

  let mostrar = props.mostrar;
  
 
  const [mostrarCarrinho, setMostrarCarrinho] = useState(mostrar);
  const [itens, setItens] = useState([]);
  const [qtd, setQtd] = useState(1);
  
  function calcularValorTotal(){
    let total = 0;
    for(let item of itens){
        total = total + item.produto.preco * qtd
    }
    return total;
  }


  function removerItem(id){
    let carrinho = storage('carrinho');
    carrinho = carrinho.filter(item => item.id != id);

    storage('carrinho', carrinho);

    carregarCarrinho();
  }


  async function carregarCarrinho(){
    let carrinho = storage('carrinho')
    if(carrinho){

      let temp = [];

      for(let produto of carrinho){
        let p = await buscarPorId(produto.id);

        temp.push({
          produto:p,
          qtd: qtd
        })
      }
      setItens(temp)
    }  
  }


  useEffect(() => {
    carregarCarrinho();
    }, []);



  function esconderCarrinho() {
    setMostrarCarrinho(false);
  }

  useEffect(() => {
    setMostrarCarrinho(mostrar);
  }, [mostrar])


  


  return (
    <div className="carrinhoLateral"  style={{visibility: mostrarCarrinho ? 'visible' : 'hidden'}}>
      <div className="ti">
        <h1>Itens do meu carrinho (2) </h1>
      </div>

      {itens.map(item => 

          <CarrinhoProduto item={item} removerItem={removerItem}  carregarCarrinho={carregarCarrinho}/>
        )}

     

      <div className="meio">
        <div className="rp">
          <h1>Resumo do pedido</h1>
        </div>
      </div>

      <div className="m2">
        <div className="sub">
          <h1>Subtotal</h1>

          <h2>R${calcularValorTotal()}</h2>

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
          <button onClick={esconderCarrinho}>Fechar carrinho</button>
        </div>
      </div>
    </div>
  );
}
