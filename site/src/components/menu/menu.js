
import './menu.scss'

export default function Menu() {

    return(
        <div className='block'>
                <div className='paginas2'>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/mala.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Meus pedidos</h1>
                    </div>

                    <div className='pgs3'>
                        <img className='imgs' src='/assets/images/senha.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Trocar senha</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/boneco.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Dados pessoais</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/entrega.png' height={40} width={40} alt=''/>
                        <h1 className='tpgs'>Endereço Entrega</h1>
                    </div>

                    <div className='pgs'>
                        <img className='imgs' src='/assets/images/voltar.png' height={30} width={30} alt=''/>
                        <h1 className='tpgs'>Sair</h1>
                    </div>
                </div>
            </div>
    )
}