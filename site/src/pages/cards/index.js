import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import './index.scss';
import { useState, useEffect } from 'react';
import { consultarCreatina} from '../../api/produtoApi.js';
import { useNavigate } from 'react-router-dom';
import { buscarImagem } from '../../api/produtoApi.js'



export default function Cards() {

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
    <div className='pagina-cards'>
    <Cabecalho/>
        <div className='titulo'>

            <div className='plvs'>
            <h1>Whey Protein </h1>
             <p>O Suplimento ideal para ganho de Massa Muscular </p>   
             </div>

             <div className='imagem'>
                <img src='/assets/images/imagemwey.png' alt=''/>                
             </div>

        </div>

<div className='tm'>
    


        <div className='cont'>

            <div className='sabores'>

            <input type="checkbox" name="item1"  /> <p>Baunilha</p>
            <input type="checkbox" name="item1"  /> <p>Chocolate</p>
            <input type="checkbox" name="item1"  /> <p>Banana</p>
            <input type="checkbox" name="item1"  /> <p>Caramelo</p>
            <input type="checkbox" name="item1"  /> <p>Beijinho</p>
            <input type="checkbox" name="item1"  /> <p>Morango</p>
            <input type="checkbox" name="item1"  /> <p>Brigadeiro</p>
            <input type="checkbox" name="item1"  /> <p>Leite em Pó</p>
            <input type="checkbox" name="item1"  /> <p>Cappuccino</p>
            </div>

        </div>

<div className='pr'>

      {produtos.map(item => 

          <div className='l1'>

            <div className='produto1' onClick={() => abrirDetalhes(item.id)}>

              <img  src={buscarImagem(item.imagem)} alt=''/>
              <p>{item.produto}</p>
              <h1>R${item.preco}</h1>

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