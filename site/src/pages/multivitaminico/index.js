import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';

export default function vitaminatcc(){

return(
    <div className='pagina-vitamina'>
    <Cabecalho/>
        <div className='titulo'>

            <div className='plvs'>
            <h1>Creatina </h1>
             </div>

             <div className='imagem'>
                <img src='/assets/images/crea.png' alt=''/>                
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
               <img  src='/assets/images/vit1.png'  />
                <p>Creatina Monohidratada 100g </p>
                <h1>R$ 315,00</h1>
            </div>

            <div className='produto2'>
                <img src='/assets/images/vit2.png' />
                <p>Creatina Monohidratada 100g </p>
                <h1>R$ 150,00</h1>

            </div>
            
        </div>

        <div className='l2'>

            <div className='produto3'>
                <img src='/assets/images/vit3.png'/>
                <p>Creatina(Creapure) 100g </p>
                <h1>R$ 110,00</h1>
            </div>

            <div className='produto4'>
                <img src='/assets/images/vit4.png'/>
                <p>Creatina(Creapure)   250g </p>
                <h1>R$ 220,00</h1>
            </div>

        </div>

            <div className='l3'>
                <img src='/assets/images/vit5.png'/>
                <p>Creatina (Creapure)120 comprimidos</p>
                <h1>R$ 580,00</h1>

            </div>
  </div>
       
 
</div>

<Rodape/>

    </div>
)
}

