import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';

export default function Anabolizantetcc(){

return(
    <div className='anabolizante'>
    <Cabecalho/>
        <div className='titulo'>

            <div className='plvs'>
            <h1>Creatina </h1>
             </div>

             <div className='imagem'>
                <img src='/assets/images/ana.png' alt=''/>                
             </div>

        </div>

<div className='tm'>
    


        <div className='cont'>

            <div className='palavras'>
                <h1>O MELHOR PREÇO, MÁXIMA QUALIDADE.</h1>
                <p>Compre direto de nossa fábrica e economize. Sem intermediadores entre nós e nosso cliente, repassamos o custo de distribuidores em forma de desconto para nossos clientes.</p>
            </div>
        
        <div className='palavras2'>
            <h1>PRODUTOS 100% AUTÊNTICOS.</h1>
            <p>Pode pesquisar na Internet: a BCCM Supplements foi uma das poucas marcas aprovadas no famoso teste que avaliou a qualidade dos suplementos brasileiros.</p>

        </div>

        </div>

<div className='pr'>

        <div className='l1'>

            <div className='produto1'>
               <img  src='/assets/images/ana1.png'  />
                <p>Enantato Testosterona20mg/200cps </p>
                <h1>R$ 315,99</h1>
            </div>

            <div className='produto2'>
                <img src='/assets/images/ana2.png' />
                <p>Oxandrolona 10mg/100cps</p>
                <h1>R$ 159,00</h1>

            </div>
            
        </div>

        <div className='l2'>

            <div className='produto3'>
                <img src='/assets/images/ana3.png'/>
                <p>Enantato Testosterona 20mg/200cps </p>
                <h1>R$ 190,00</h1>
            </div>

            <div className='produto4'>
                <img src='/assets/images/ana4.png'/>
                <p>Durateston 200mg/10ml </p>
                <h1>R$ 220,00</h1>
            </div>

        </div>

            <div className='l3'>
                <img src='/assets/images/ana5.png'/>
                <p>Primobolan 10ml</p>
                <h1>R$ 580,00</h1>

            </div>
  </div>
       
 
</div>

<Rodape/>

    </div>
)
}

