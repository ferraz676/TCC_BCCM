import './index.scss';
import { buscarImagem } from '../../api/produtoApi.js'
import { get, set } from 'local-storage';
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

export default function Detalhe(props) {

    const [produtosCarrinho, setProdutosCarrinho] = useState([]);

    const navigate = useNavigate();
    let produto = props.produto;

    function adicionarCarrinho() {
        try{
        if(!storage('cliente-logado')){
            navigate('/login')
        }
        else{
            let carrinho = get('carrinho');
        carrinho.push(produto);
        set('carrinho', carrinho);
        toast.dark('Produto Adicionado ao Carrinho com Sucesso!');
        navigate(-1)
        }
        

        } catch(err){
            toast.error('Realize o Login primeiro!')
        }
        
    }

    function adicionarCarrinhoComprar() {
        try{
            if(!storage('cliente-logado')){
                navigate('/login')
            } else{
                let carrinho = get('carrinho');
                carrinho.push(produto);
                set('carrinho', carrinho);
                navigate('/pagamento')
            }

        } catch(err){
            toast.error('Realize o Login primeiro!')
        }
    
    
        
    }

    useEffect(() => {
        let carrinho = get('carrinho');
        if (storage('carrinho') && storage('cliente-logado'))
            setProdutosCarrinho(carrinho);
    }, [])


    
    return (
        <div className='pri'>

            <div className='lado'>
                <div className='conteu'>

                    <div className='zoon'>
                        <img src={buscarImagem(props.produto.imagem)} alt='' />
                        <img src={buscarImagem(props.produto.imagem)} alt='' />
                        <img src={buscarImagem(props.produto.imagem)} alt='' />
                        <img src={buscarImagem(props.produto.imagem)} alt='' />
                    </div>

                    <div className='anabo'>
                        <img src={buscarImagem(props.produto.imagem)} alt='' />
                    </div>

                    <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                    </div>


                    <div>

                        <div className='gor'>

                            <img src='/assets/images/gordo.png' alt='' />
                            <h1>Menos gordura corporal, graças a aceleração metabólica;</h1>

                        </div>

                        <div className='for'>
                            <img src='/assets/images/forte.png' alt='' />
                            <h1>Afasta o catabolismo, o que é providencial para muitos músculos;</h1>
                        </div>

                        <div className='ps'>
                            <img src='/assets/images/peso.png' alt='' />
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
                        <h1>NO BOLETO OU PIX<br></br> ou R${props.produto.preco} no cartão de crédito em até 1x de R${props.produto.preco} sem juros</h1>
                    </div>


                    <div className='cpm'>
                        <button onClick={adicionarCarrinhoComprar}>COMPRAR</button>
                        <div className='cari'>
                            <img src='/assets/images/carrinho.png' onClick={adicionarCarrinho} alt='' />
                        </div>
                    </div>

                    <div className='estoque'>
                        <img src='/assets/images/etq.png' alt='' />
                        <h1>EM ESTOQUE. ENVIO IMEDIATO!</h1>
                    </div>

                    <div className='frete'>
                        <img src='/assets/images/vector.png' alt='' />
                        <h1>FRETE GRÁTIS</h1>
                        <h2> Saiba como</h2>
                    </div>



                </div>
            </div>
        </div>



    )
}