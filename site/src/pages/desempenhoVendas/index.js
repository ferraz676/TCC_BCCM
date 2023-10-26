import './index.scss';
import LateralAdministrador from '../../components/lateralADM/adm.js';
import Cabecalho from '../../components/cabADM/cabecalho.js'
import Graficobarra from '../../components/graficBAR'



export default function DesempenhoVendas(){

    return(
<div className='desempenho-pagina'>
        <Cabecalho/>

    
        <div className='mid-desempenho'>
        <LateralAdministrador/>


        <div className='direita'>

        <h1 className='title'>Acompanhe o desempenho da Empresa</h1>

        <div className='grafics'>
            <Graficobarra/>
        </div>

        </div>

        </div>
</div>

    )
}
