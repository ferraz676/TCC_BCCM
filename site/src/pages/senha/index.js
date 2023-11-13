import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape.js'
import LateralCliente from '../../components/lateralCliente/index.js';
import { alterarSenhaCliente } from '../../api/clienteApi.js';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import storage from 'local-storage';


export default function Senha() {

  useEffect(() => {
    let cliente = storage('cliente-logado');
    if(storage('cliente-logado'))
         setId(cliente.id);
}, [])


    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [id, setId] = useState(0);
    const [erro, setErro] = useState('');



    async function alterarSenha(){
      try{

        if(!senha)
            throw new Error('Digite uma Senha!')
        if(senha =! confirmarSenha)
            throw new Error('Digite uma Senha!')
             
        else{
          const novaSenha = await alterarSenhaCliente(id,senha);
          setId(novaSenha.id);
            toast.dark('Senha alterada com Sucesso!');
        }
      } catch (err){
        setErro("Senhas não Coincidiram.")
      }
    }





  return (
    <div className='pagina-senha'>
      <Cabecalho/>


<div className="tudo5">
      <LateralCliente selecionado='senha'/>
<div className="bloco2">
    <div className="first">
      {erro}
        <h1>Nova Senha (Mínimo 6 caracteres)</h1>
        <input type='password' value={senha} onChange={e => setSenha(e.target.value)}></input>
        <div></div>
        <span>
        <p>Nível de segurança</p>
        <img src='/assets/images/info.png' alt='' height={20}/>
        </span>
    </div>




    <div className='second'>
    <h1>Confirmar Nova Senha</h1>
        <input type='password' value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)}></input>

        <button onClick={alterarSenha}>Atualizar</button>
    </div>

    
</div>
</div>








    <Rodape/>
    </div>
  );
}