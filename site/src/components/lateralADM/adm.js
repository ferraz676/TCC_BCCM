import './adm.scss'
import { Link } from 'react-router-dom'


export default function LateralAdministrador() {

    return(

        <main className='adm-lateral'>
            
            <div className='block'>
                <div className='paginas2'>

                    <Link to='/ConsultaProduto' className='pgs'>
                        <img className='imgs' src='/assets/images/editar.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Edição de estoque</h1>
                    </Link>

                    <Link to='/InsercaoProduto' className='pgs'>
                        <img className='imgs' src='/assets/images/consulta.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Adicionar Produtos</h1>
                    </Link>

                    <Link to='/desempenhoVendas' className='pgs3'>
                        <img className='imgs' src='/assets/images/desempenho.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Consulta de Desempenho</h1>
                    </Link>

                    <Link to='/histopedido' className='pgs'>
                        <img className='imgs' src='/assets/images/histo.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Histórico de Pedidos</h1>
                    </Link>

                </div>
            </div>
        </main>

    )
}