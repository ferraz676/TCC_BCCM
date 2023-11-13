import storage from 'local-storage';
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function LateralCliente(props) {

    function sairClick(){
      storage.remove('cliente-logado');
      storage.remove('carrinho');
  }

  function verificarMenuSelecionado(menu){
    if(menu === props.selecionado)
        return "selecionado"
    else
        return '';
  }


return(

        <div className='lateralCliente'>
                <div className='paginas2'>

                    <Link to ='/meupedido' id='pgs'  className={verificarMenuSelecionado('meuPedido')}>
                        <img className='imgs' src='/assets/images/mala.png' alt=''/>
                        <h1 className='tpgs'>Meus pedidos</h1>
                    </Link>

                    <Link to ='/senha' id='pgs'  className={verificarMenuSelecionado('senha')}>
                        <img className='imgs' src='/assets/images/senha.png' alt=''/>
                        <h1 className='tpgs'>Trocar senha</h1>
                    </Link>

                    <Link to ='/dadosPessoais' id='pgs' className={verificarMenuSelecionado('dadosPessoais')}>
                        <img className='imgs' src='/assets/images/boneco.png' alt=''/>
                        <h1 className='tpgs'>Dados pessoais</h1>
                    </Link>

                    <Link to ='/endereco' id='pgs' className={verificarMenuSelecionado('endereco')}>
                        <img className='imgs' src='/assets/images/entrega.png' alt=''/>
                        <h1 className='tpgs'>Endereço</h1>
                    </Link>

                    <Link to ='/' id='pgs' onClick={sairClick}>
                        <img className='imgs' src='/assets/images/voltar.png' alt=''/>
                        <h1 className='tpgs'>Sair</h1>
                    </Link>
                </div>
            </div>
        )
}