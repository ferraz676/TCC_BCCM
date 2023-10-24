import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';

export default function Weytcc(){

return(
    <div className='pagina-whey'>
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

        <div className='l1'>

            <div className='produto1'>
               <img  src='/assets/images/1whey.png'  />
                <p>(TOP) WHEY PROTEIN CONCENTRADO (1KG) - BCCM SUPPLEMENTS</p>
                <h1>R$ 110,00</h1>
            </div>

            <div className='produto2'>
                <img src='/assets/images/2whey.png' />
                <p>MEDIUM WHEY PROTEIN (1KG) - BCCM SUPPLEMENTS</p>
                <h1>R$ 110,00</h1>

            </div>
            
        </div>

        <div className='l2'>

            <div className='produto3'>
                <img src='/assets/images/3whey.png'/>
                <p>BASIC WHEY PROTEIN (1KG) - BCCM SUPPLEMENTS</p>
                <h1>R$ 110,00</h1>
            </div>

            <div className='produto4'>
                <img src='/assets/images/4whey.png'/>
                <p>(TOP) WHEY PROTEIN ISOLADO (1KG) - BCCM SUPPLEMENTS</p>
                <h1>R$ 110,00</h1>
            </div>

        </div>

            <div className='l3'>
                <img src='/assets/images/5whey.png'/>
                <p>3W WHEY PROTEIN (1KG) - BCCM SUPPLEMENTS</p>
                <h1>R$ 110,00</h1>

            </div>
  </div>
       
 
</div>

<Rodape/>

    </div>
)
}

