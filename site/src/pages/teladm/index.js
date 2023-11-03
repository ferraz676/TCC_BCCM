import './index.scss';
import CabecalhoADM from '../../components/cabADM/cabecalho.js';
import storage, { get } from 'local-storage';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Teladm() {

    const navigate = useNavigate();


  useEffect(() => {
    if (!storage('adm-logado')) {
      navigate('/');
    }
  })

    function sairClick(){
        storage.remove('adm-logado');
        navigate('/login');
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

                <div className='ss1'>
                    <img className='ed' src='/assets/images/editar.png' />
                    <p className='a1' >Edição de inventário
                        (Produtos)</p>
                </div>
            </div>

            <div className='sub3'>

                <div className='ss2'>
                    <img className='ed1' src='/assets/images/dese.png' />
                    <p className='ed2'> Inspeção de
                        Desempenho</p>
                </div>

            </div>

            <div className='sub4'>

                <div className='ss3'>

                    <div className='ed3'>
                        <img className='ed4' src='/assets/images/vendas.png' />
                        <p className='ed5'>Inspeção
                            de vendas e lucro</p>

                    </div>

                </div>



            </div>

            <div className='sub5'>

                <div className='ss4'>
                    <img className='ed6' src='/assets/images/histo.png' />
                    <p className='ed7'> Histórico
                        de pedidos</p>


                </div>


            </div>

            </div>

            <button onClick={sairClick} className='btn30'>Sair</button>



        </div>

    </div>
    )
}