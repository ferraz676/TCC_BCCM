import './adm.scss'

export default function LateralAdministrador() {

    return(

        <main className='adm-lateral'>
            
            <div className='block'>
                <div className='paginas2'>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/editar.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Edição de estoque</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/consulta.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Consulta de produtos</h1>
                    </div>

                    <div className='pgs3'>
                        <img className='imgs' src='/assets/images/desempenho.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Consulta de Desempenho</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/vendas.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Inspeção de vendas</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/privacidade.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Privacidade de dados</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/histo.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Histórico de Pedidos</h1>
                    </div>

                </div>
            </div>
        </main>

    )
}