import './index.scss';
import CabecalhoADM from '../../components/cabADM/cabecalho.js';
import storage from 'local-storage';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Teladm() {

    const navigate = useNavigate();

    function sairClick(){
        storage.remove('adm-logado');
        navigate('/');
    }

    return (

    <div className='pagina-adm'>    

        <div classname='a'>
            <CabecalhoADM />

            <div className='ti'>

                <h1 className='ti1'>Bem-Vindo a tela de administrador</h1>

            </div>

            <div className='b'>

            <div className='sub'>
                <h1>O que deseja?</h1>



            </div>


            <div className='sub2'>

                <Link to='/ConsultaProduto' className='ss1'>
                    <img className='ed' src='/assets/images/editar.png' />
                    <p className='a1' >Edição de inventário
                        (Produtos)</p>
                </Link>
            </div>

            <div className='sub3'>

                <Link to='/InsercaoProduto' className='ss2'>
                    <img className='ed1' src='/assets/images/dese.png' />
                    <p className='ed2'> Adicionar Produto</p>
                </Link>

            </div>

            <div className='sub4'>

                <div className='ss3'>

                    <Link to='/desempenhoVendas' className='ed3'>
                        <img className='ed4' src='/assets/images/vendas.png' />
                        <p className='ed5'>Inspeção
                            de vendas e lucro</p>

                    </Link>

                </div>



            </div>

            <div className='sub5'>

                <Link to='/histopedido' className='ss4'>
                    <img className='ed6' src='/assets/images/histo.png' />
                    <p className='ed7'> Histórico
                        de pedidos</p>


                </Link>


            </div>

            </div>

            <button onClick={sairClick} className='btn30'>Sair</button>



        </div>

    </div>
    )
}