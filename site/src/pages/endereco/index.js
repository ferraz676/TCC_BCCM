import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'
import LateralCliente from '../../components/lateralCliente/index.js'
import { useNavigate } from 'react-router-dom';
import { consultarEndereco } from '../../api/enderecoApi.js'
import { useState, useEffect } from 'react';

export default function Endereco() {

  const [enderecos, setEnderecos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    carregarEndereco();
  }, [])
  

  async function carregarEndereco(){
    const resposta = await consultarEndereco();
    setEnderecos(resposta);
  }
 
  function editarEndereco(id){
    navigate(`/enderecoEditar/${id}`)
  }




  return (
    <div className='pagina-endereco'>
      <Cabecalho/>
        
      <div className='divisao'>
      <LateralCliente selecionado='endereco'/>



            <div className='part2'>
                <h1>Endereço de Entrega <span> (Especifique a rua, bairro e endereço)</span> </h1>
                <div className='bloco2'>


                {enderecos.map(item => 
              <div key={item.id}>
                  <h1>
                    {item.endereco} - {item.numero}, {item.bairro}.
                    </h1>
            
                  

                <div className='btns'>

                    <div className='bloco3' onClick={() => editarEndereco(item.id)}>
                        <img src='./assets/images/lapis.png' alt=''/>
                        <button>Editar</button>
                    </div>

                </div>

              </div>  

                )}

                </div>
            </div>
      </div>








        <Rodape/>
    </div>
  );

}
