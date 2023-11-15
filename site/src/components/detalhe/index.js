import './index.scss';
import { buscarImagem } from '../../api/produtoApi.js'
import { get, set } from 'local-storage';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';

export default function Detalhe(props){
       
    const [produtosCarrinho, setProdutosCarrinho] = useState([]);

    
    let produto = props.produto;

    function adicionarCarrinho() {
       let carrinho = get('carrinho');
       
       carrinho.push(produto);

       set('carrinho', carrinho);

       toast.dark('Produto Adicionado ao Carrinho com Sucesso!');
    }

    

    useEffect(() => {
        let carrinho = get('carrinho');
        if(storage('carrinho') && storage('cliente-logado'))
             setProdutosCarrinho(carrinho);
    }, [])

    return(
<div className='pri'>

<div className='lado'>
<div className='conteu'>

    <div className='zoon'>
    <img src={buscarImagem(props.produto.imagem)} alt=''/> 
    <img src={buscarImagem(props.produto.imagem)} alt=''/> 
    <img src={buscarImagem(props.produto.imagem)} alt=''/> 
    <img src={buscarImagem(props.produto.imagem)} alt=''/> 
    </div>

    <div className='anabo'>
    <img src={buscarImagem(props.produto.imagem)}  alt='' /> 
    </div>

    <div className='avaliação'>
    <img src='/assets/images/Star 1.png' alt=''/> 
    <img src='/assets/images/Star 1.png' alt=''/>
    <img src='/assets/images/Star 1.png' alt=''/>
    <img src='/assets/images/Star 1.png' alt=''/>
    <img src='/assets/images/Star 4.png' alt=''/>
    </div>


    <div>

<div className='gor'>

<img src='/assets/images/gordo.png' alt=''/>
<h1>Menos gordura corporal, graças a aceleração metabólica;</h1>

</div>

<div className='for'>
<img src='/assets/images/forte.png' alt=''/>
<h1>Afasta o catabolismo, o que é providencial para muitos músculos;</h1>
</div>

<div className='ps'>
<img src='/assets/images/peso.png' alt=''/>
<h1>Eleva o hormônio péptico IGF-1 importante para recuperação pós treinos;</h1>
</div>

</div>
</div>

<div className='segundapa'>
        <div className='plvrs'>
            <h1>{props.produto.produto}</h1>
            <h1>{props.produto.medida}</h1>
        </div>

        <div className='plvrs2'>
            <h1>QUALIDADE INTERNACIONAL E PREÇO DE FÁBRICA</h1>
        </div>

        <div className='plvrs3'>
            <h1>R${props.produto.preco}</h1>
        </div>

        <div className='plvrs4'>
            <h1>NO BOLETO OU PIX ou R${props.produto.preco} no cartão de crédito em até 1x de R${props.produto.preco} sem juros</h1>
        </div>


         <div className='cpm'>
            <button>COMPRAR</button>     
      <div className='cari'>
        <img src='/assets/images/carrinho.png' onClick={adicionarCarrinho} alt=''/>
      </div>
         </div>

         <div className='estoque'>
         <img src='/assets/images/etq.png' alt=''/>
         <h1>EM ESTOQUE. ENVIO IMEDIATO!</h1>
         </div>

         <div className='frete'>
         <img src='/assets/images/vector.png' alt=''/>
        <h1>FRETE GRÁTIS</h1>
        <h2> Saiba como</h2>
         </div>

        

</div>
</div>
</div>



    )
}