import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'
import LateralCliente from '../../components/lateralCliente/index.js'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { listar, removerEndereco} from '../../api/enderecoApi.js'
import storage from 'local-storage';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

export default function Endereco() {

  const [enderecos, setEnderecos] = useState([]);

  const navigate = useNavigate();

  async function carregarEndereco(){
    const id = storage('cliente-logado').id;
    const r = await listar(id);
    setEnderecos(r);
  }

  useEffect(() => {
    carregarEndereco();
  }, [])
 
  function editarEndereco(id){
    navigate(`/enderecoEditar/${id}`)
  }

  async function removerEnderecoClick(idEndereco, idCliente){
    const id = storage('cliente-logado').id;
    idCliente = id;

    try{
      confirmAlert({
        title: "Remover endereço",
        message: `Deseja remover o endereço selecionado?`,
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              const resposta = await removerEndereco(idEndereco, idCliente);   
              toast.dark('Endereço Removido com Sucesso!'); 
              carregarEndereco();
            }
          },
          {
            label: 'Não'
          }
        ]
      })
    } catch(err){
      toast.error('O Endereço não pode ser removido pois está sendo utilizado em uma Encomenda.')
    }
    
    
  }

  async function novoEnderecoAdicionar(){
    navigate(`/enderecoEditar`);
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

                    <div className='bloco3'>
                        <img src='./assets/images/lixeira.png' height={50} alt=''/>
                        <button onClick={e => {
              e.stopPropagation(); 
              removerEnderecoClick(item.id, item.endereco)}}>Excluir</button>
                    </div>

                </div>

              </div>  

                )}

                </div>

                <button className='btnAdicionar' onClick={novoEnderecoAdicionar}>Adicionar Endereço</button>  
            </div>
      </div>








        <Rodape/>
    </div>
  );

}
