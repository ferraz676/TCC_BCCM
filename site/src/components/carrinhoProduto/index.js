import "./index.scss";
import { buscarImagem } from "../../api/produtoApi.js";
import { useState } from "react";
import storage from 'local-storage'

export default function CarrinhoProduto({ produto, removerItem, carregarCarrinho, index }) {

  let carrinho = storage('carrinho');
  const [qtdProduto, setQtdProduto] = useState(carrinho[index].qtd);
  
  function excluirProduto(){
    removerItem(produto.id)
     
  }

  function calcularSubtotal(){
    const subtotal = parseFloat(qtdProduto * produto.preco).toFixed(2);
    return subtotal;
  }

  function alterarQuantidade(novaQtd){
      let carrinho = storage('carrinho');  
      carrinho[index].qtd = novaQtd;

      console.log(carrinho);
      console.log(index);

      storage('carrinho', carrinho);
      carregarCarrinho();

      setQtdProduto(novaQtd);
  }  

  return (
    <div className="carrinhoProdutos">

        <div className="cu">
          <div className="ct">
            <img className="vita" src={buscarImagem(produto.imagem)} alt=''/>
            <p className="nome">{produto.produto}</p>
          </div>

          <div className="fat">
            <img className="me" src="/assets/images/menos.png" alt='' onClick={() => alterarQuantidade(qtdProduto - 1)}/>
            <p>{qtdProduto}</p>
            <img className="ma" src="/assets/images/mais.png" alt='' onClick={() => alterarQuantidade(qtdProduto + 1)}/>
            <h1 className="btnExcluir" onClick={excluirProduto}> Excluir</h1>
            <h1 className="preço">R${calcularSubtotal()}</h1>
          </div>
        </div>
    </div>
  );
}
