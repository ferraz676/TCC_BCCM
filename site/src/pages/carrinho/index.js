import './index.scss';
import { get } from 'local-storage';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { buscarImagem } from '../../api/produtoApi.js'

export default function Carrinho(){

    const [produtosCarrinho, setProdutosCarrinho] = useState([]);

    useEffect(() => {
        let carrinho = get('carrinho');
        if(storage('carrinho'))
             setProdutosCarrinho(carrinho);
    }, [])




    return(
<div className='td'>

<div className='ti'>
<h1>Itens do meu carrinho (2) </h1>
</div>

            {produtosCarrinho.map(item => 


                <div key={item.id} className='cu'>
                    <div className='ct'>
                        <img className='vita' src={buscarImagem(item.imagem)} />
                        <p className='nome'>{item.produto}</p>
                    </div>

                    <div className='fat'>
                        <img className='me' src='/assets/images/menos.png' />
                        <p>1</p>
                        <img className='ma' src='/assets/images/mais.png' />
                        <h1 className='preço'>R${item.preco}</h1>
                    </div>
                </div>

            )}


            

<div className='meio'>
            <div className='rp'>
                <h1>Resumo do pedido</h1>

            </div>
</div>


<div className='m2'>
            <div className='sub'>
                     <h1>subtotal</h1>
                     
                     <h2>R$ 42,99</h2>
                   
                <h3>Valor com 10% de desconto no boleto ou PIX.</h3>
             </div>            
</div>

<div className='quase'>
        <div className='mage'>
         <img className='vit' src='/assets/images/abc.png' height={30} />
        </div>

        <div className='text'>
            <p>Nossos envios estão ocorrendo normalmente.</p>

        </div>



</div>

<div className='final'>

<div className='b1'>
    <button>Finalizar compra</button>
</div>
    
<div className='b2'>
    <button>Escolher outros produtos </button>
</div>




</div>

</div>

    )
}
