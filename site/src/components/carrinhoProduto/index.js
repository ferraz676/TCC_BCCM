import "./index.scss";
import { buscarImagem } from "../../api/produtoApi.js";
import { useState } from "react";
import storage from 'local-storage'

export default function CarrinhoProduto({ item: { produto, qtd }, removerItem, carregarCarrinho }) {

  const [qtdProduto, setQtdProduto] = useState(qtd)
  
  function excluirProduto(){
    removerItem(produto.id)
     
  }

  function calcularSubtotal(){
    const subtotal = parseFloat(qtdProduto * produto.preco).toFixed(2);
    return subtotal;
  }

  function alterarQuantidade(novaQtd){
    setQtdProduto(novaQtd);

      let carrinho = storage('carrinho');
      let itemStorage = carrinho.find(item => item.id == produto.id)
      itemStorage.qtd = novaQtd;
  
      storage('carrinho', carrinho);

      carregarCarrinho();
  }



  function implementar() {
    if (qtdProduto < 5) {
      setQtdProduto(qtdProduto + 1);
    }
  }


  function diminuir() {
    if (qtdProduto > 1) {
      setQtdProduto(qtdProduto - 1);
    }
  }
  

  return (
    <div className="carrinhoProdutos">

        <div className="cu">
          <div className="ct">
            <img className="vita" src={buscarImagem(produto.imagem)} alt=''/>
            <p className="nome">{produto.produto}</p>
          </div>

          <div className="fat">
            <img className="me" src="/assets/images/menos.png" alt='' onClick={diminuir}/>
            <p onChange={e => alterarQuantidade(e.target.value)}>{qtdProduto}</p>
            <img className="ma" src="/assets/images/mais.png" alt='' onClick={implementar}/>
            <h1 className="btnExcluir" onClick={excluirProduto}> Excluir</h1>
            <h1 className="preço">R${calcularSubtotal()}</h1>
          </div>
        </div>
    </div>
  );
}
