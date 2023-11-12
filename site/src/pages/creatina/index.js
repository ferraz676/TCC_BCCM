import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import './index.scss';
import { useState, useEffect } from 'react';
import { consultarCreatina} from '../../api/produtoApi.js';
import { useNavigate } from 'react-router-dom';
import { buscarImagem } from '../../api/produtoApi.js'



export default function Creatina() {

  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

 
  async function carregarProdutos(){
    const resposta = await consultarCreatina();
    setProdutos(resposta);
  }

  function abrirDetalhes(id){
    navigate(`/produtoDetalhe/${id}`)
  }

  useEffect(() => {
    carregarProdutos();
  }, [])


  
  return(
    <div className='pagina-creatinaOficial'>
    <Cabecalho/>
        <div className='titulo'>

            <div className='plvs'>
            <h1>Creatina</h1>
             </div>

             <div className='imagem'>
                <img src='/assets/images/crea.png' height={250} width={450} alt=''/>                
             </div>

        </div>

<div className='tm'>

    <div className='lateralPreco'>
        <div className='cont'>

            <div className='sabores'>
                <h1>
                O MELHOR PREÇO, MÁXIMA QUALIDADE.<br></br>
                <span>Compre direto de nossa fábrica e economize. Sem intermediadores entre nós e nosso cliente, repassamos o custo de distribuidores em forma de desconto para nossos clientes.</span>
                </h1>
            </div>

        </div>

        <div className='cont2'>

            <div className='sabores'>
                <h1>
                PRODUTOS 100% AUTÊNTICOS.<br></br>
                <span>Pode pesquisar na Internet: a BCCM Supplements foi uma das poucas marcas aprovadas no famoso teste que avaliou a qualidade dos suplementos brasileiros.</span>
                </h1>
            </div>

        </div>
    </div>

<div className='pr'>

      {produtos.map(item => 

          <div className='l1'>

            <div className='produto1' onClick={() => abrirDetalhes(item.id)}>

              <img  src={buscarImagem(item.imagem)} alt=''/>
              <p>{item.produto}</p>
              <h1>R${item.preco}</h1>
              <span>{item.medida}</span>

            </div>

          </div>
        )}
</div>

<div>
</div>

  </div>


        <Rodape/>

</div>
)

}