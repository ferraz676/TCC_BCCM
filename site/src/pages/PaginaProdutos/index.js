import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho';

export default function Weytcc(){

return(
    <div className='tudo'>
    <Cabecalho/>
        <div className='pagina-produtos'>

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

            <div className='produtos'>

                <div className='1°'>
                    
                </div>

            </div>
</div>
        





    </div>
)
}

