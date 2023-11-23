import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'
import LateralCliente from '../../components/lateralCliente/index.js'
import { useNavigate, useParams } from 'react-router-dom';
import { alterarEndereco, buscarPorId  } from '../../api/enderecoApi.js'
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { salvar, listar } from '../../api/enderecoApi.js'
import storage from 'local-storage';

export default function EnderecoEditar() {

  const [enderecos, setEnderecos] = useState([]);
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [id, setId] = useState(0);

  const navigate = useNavigate();

  async function carregarEndereco(){
    const id = storage('cliente-logado').id;
    const r = await listar(id);
    setEnderecos(r);
  }

  async function salvarEndereco(){
    
    const id = storage('cliente-logado').id;
    const r = await salvar(id, cep, endereco, numero, bairro, complemento);
    toast.dark('Endereço Salvo com Sucesso!')
          
  }


  function voltarEndereco(){
    navigate(-1);
  }
 
  const { idParam } = useParams() 

  useEffect(() => {
    if(idParam){
    carregarEndereco();
  }
  }, [])


  function mudarCep(alteracao){
    let novaAlteracao = alteracao.slice(cep.length)
    novaAlteracao = Number(novaAlteracao)
    
    if(alteracao.length < cep.length)
        setCep(alteracao)

    else if(isNaN(novaAlteracao) === false){
        if((alteracao.length === 5 && alteracao.length > cep.length)){
            setCep(`${alteracao}-`)
        }
        else if(alteracao.length <= 9){
            setCep(alteracao)
        }
    }
} 

  async function carregarEndereco(){
    const resposta = await buscarPorId(idParam);
    setCep(resposta.cep);
    setEndereco(resposta.endereco);
    setNumero(resposta.numero);
    setBairro(resposta.bairro);
    setComplemento(resposta.complemento);
    setId(resposta.id);
  }

  async function editarClick(){
    try{
      if(id === 0){
        const id = storage('cliente-logado').id;
        const r = await salvar(id, cep, endereco, numero, bairro, complemento);
        toast.dark('Endereço Salvo')
        navigate(-1)
      }
      else{
        const novoEndereco = await alterarEndereco(cep, endereco, numero, bairro,complemento, id);
      setId(novoEndereco.id);
      toast.dark('Endereço Alterado');
      navigate('/endereco')
      }
      
      
      
      
    } catch(err){
      if(err.response)
        toast.error(err.response.data.erro);
    }
  }

  return (
    <div className='pagina-endereco'>
      <div className='opacidade'>
      <Cabecalho/>
        
      <div className='divisao'>
      
      <LateralCliente/>



            <div className='part2'>
                <h1>Endereço de Entrega <span> (Especifique a rua, bairro e endereço)</span> </h1>
                <div className='bloco2'>
                    
              


                </div>
            </div>
      </div>

      </div>

        <div className='blocoMeio'>


        <div className='local'>

        <div className=''> 
                <h1>CEP</h1>
                <input type='text' value={cep} onChange={e => mudarCep(e.target.value)}></input>
                
              </div>

              <div className=''> 
                <h1>Endereço</h1>
                <input type='text' value={endereco} onChange={e => setEndereco(e.target.value)}></input>
              </div>

       </div>



        <div className='numer'>

              <div className=''> 
                <h1>Numero</h1>
                <input type='number' value={numero} onChange={e => setNumero(e.target.value)}></input>
              </div>

              <div className=''>
                <div className=''> 
                <h1>Complemento</h1>
                <input type='text' value={complemento} onChange={e => setComplemento(e.target.value)}></input>
                </div>

                </div>
        </div>

        <div className='bairro'>
                <h1>Bairro</h1>
                <input type='text' value={bairro} onChange={e => setBairro(e.target.value)}></input>
        </div>

        <div className='btns'>
          <button className='btn1' onClick={voltarEndereco}>Cancelar</button>
          <button className='btn2' onClick={editarClick}>Atualizar</button>
        </div>


        </div>



        <div className='opacidade'>
        <Rodape/>
        </div>
    </div>
  );

}
