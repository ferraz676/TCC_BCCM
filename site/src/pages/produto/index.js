import './index.scss';
import Cabecalho from '../../components/cabecalho/cabecalho';


export default function produto(){

    return(
<div className='pri'>
<Cabecalho/>

<div className='conteu'>

    <div className='zoon'>
    <img src='/assets/images/qdr.png' alt=''/> 
    <img src='/assets/images/qdr.png' alt=''/> 
    <img src='/assets/images/qdr.png' alt=''/> 
    <img src='/assets/images/qdr.png' alt=''/> 
    </div>

    <div className='anabo'>
    <img src='/assets/images/anaboli.png' alt=''/> 
    </div>

    <div className='avaliação'>
    <img src='/assets/images/Star 1.png' alt=''/> 
    <img src='/assets/images/Star 1.png' alt=''/>
    <img src='/assets/images/Star 1.png' alt=''/>
    <img src='/assets/images/Star 1.png' alt=''/>
    <img src='/assets/images/Star 4.png' alt=''/>
    </div>


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


    )
}