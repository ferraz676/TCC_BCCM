import './index.scss';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { inserirCliente } from '../../api/clienteApi.js';
import { useNavigate } from 'react-router-dom';

export default function Cadastrotcc(){


  const [cliente, setCliente] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [fixo, setFixo] = useState('');
  const [nascimento, setNascimento] = useState('');

  const navigate = useNavigate();

  async function salvarCliente() {
    try{
      const novoCliente = await inserirCliente(cliente, telefone, cpf, email, senha, genero, fixo, nascimento);
      toast.dark('Cliente Cadastrado com Sucesso!');
      navigate('/login')    
      
    } catch(err){
      toast.error(err.response.data.erro);
    }
}

function mudarCpf(alteracao){
    let novaAlteracao = alteracao.slice(cpf.length)
    novaAlteracao = Number(novaAlteracao)
    
    if(alteracao.length < cpf.length)
        setCpf(alteracao)

    else if(isNaN(novaAlteracao) === false){
        if((alteracao.length === 3 && alteracao.length > cpf.length) || (alteracao.length === 7 && alteracao.length > cpf.length)){
            setCpf(`${alteracao}.`)
        }
        else if(alteracao.length === 11 && alteracao.length > cpf.length){
            setCpf(`${alteracao}-`)
        }
        else if(alteracao.length <= 14){
            setCpf(alteracao)
        }
    }
}  

function alterarTelefone(alteracao) {
    let novaAlteracao = alteracao.slice(telefone.length)
    novaAlteracao = Number(novaAlteracao)
    
    if(alteracao.length < telefone.length)
        setTelefone(alteracao)

    else if(isNaN(novaAlteracao) === false || alteracao === '+'){
        if(telefone.startsWith('+')){
            if((alteracao.length === 3 && alteracao.length > telefone.length) || (alteracao.length === 6 && alteracao.length > telefone.length)) {
                setTelefone(`${alteracao} `)
            }
            else if(alteracao.length === 12 && alteracao.length > telefone.length){
                setTelefone(`${alteracao}-`)
            }
            else if(alteracao.length <= 17){
                setTelefone(alteracao)
            }
        }
        else{
            if(alteracao.length === 2 && alteracao.length > telefone.length) {
                setTelefone(`${alteracao} `)
            }
            else if(alteracao.length === 8 && alteracao.length > telefone.length){
                setTelefone(`${alteracao}-`)
            }
            else if(alteracao.length <= 13){
                setTelefone(alteracao)
            }
        }
    }
}

function alterarFixo(alteracao) {
    let novaAlteracao = alteracao.slice(fixo.length)
    novaAlteracao = Number(novaAlteracao)
    
    if(alteracao.length < fixo.length)
        setFixo(alteracao)

    else if(isNaN(novaAlteracao) === false || alteracao === '+'){
        if(fixo.startsWith('+')){
            if((alteracao.length === 3 && alteracao.length > fixo.length) || (alteracao.length === 6 && alteracao.length > fixo.length)) {
                setFixo(`${alteracao} `)
            }
            else if(alteracao.length === 12 && alteracao.length > fixo.length){
                setFixo(`${alteracao}-`)
            }
            else if(alteracao.length <= 17){
                setFixo(alteracao)
            }
        }
        else{
            if(alteracao.length === 2 && alteracao.length > fixo.length) {
                setFixo(`${alteracao} `)
            }
            else if(alteracao.length === 8 && alteracao.length > fixo.length){
                setFixo(`${alteracao}-`)
            }
            else if(alteracao.length <= 13){
                setFixo(alteracao)
            }
        }
    }
}

return(
<div className='pagina-cadastro'>
    <div className='cabeçalho'>

        <p className='gar'>Garantimos que você fez a melhor escolha!</p>
        <img className='pit' src='/assets/images/logobccm.png' alt=""/>
        <p>Seja parte da nossa Família!</p>

    </div>



    <div className='conteudo'>
        <div className='cds'>
           <div className='topo1'>

            <h1>Cadastro</h1>

            </div>

            <div className='prf'>
                <p>Dados pessoais</p>
            </div>

            <div className='bt1'>
           <input type='text' placeholder='E-mail' value={email} onChange={e => setEmail(e.target.value)}/>
            </div>

           <div className='mrc'  >
           <input type="checkbox" name="item1" />
           <p>Quero receber promoção da BCCM Supplements</p>
           </div>

           <div className='bt2'>
           <input type='text' placeholder='CPF' value={cpf} onChange={e => mudarCpf(e.target.value)}/>
            </div>

            <div className='nm'>
           <input type='text' placeholder='Nome Completo' value={cliente} onChange={e => setCliente(e.target.value)}/>
            </div>

            <div className='dt'>
           <input type='date' placeholder='Data de Nascimento' value={nascimento} onChange={e => setNascimento(e.target.value)}/>
            </div>

            <div className='tl'>
           <input type='text' placeholder='Celular' value={telefone} onChange={e => alterarTelefone(e.target.value)}/>
           <input type='text' placeholder='Telefone fixo' className='fx' value={fixo} onChange={e => alterarFixo(e.target.value)}/>

            </div>

            <div className='wt'  >
           <input type="checkbox" name="item1"/>
           <p>Quero receber promoção via whatsapp</p>
           </div>

            
           <div className='pd'  >
           <input type="checkbox" name="item1"/>
           <p>Quero atualizão de pedido via whatsapp</p>
           </div>

            
           
           <div className='sa'>
           <input type='password' placeholder='Senha*(6 ou mais caracteres)' value={senha} onChange={e => setSenha(e.target.value)}/>
            </div>
           
            <div className='genero'>
                <p>Gênero</p>
                <select value={genero} onChange={e => setGenero(e.target.value)}>
                    <option value="" disabled hidden>Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
            </div>


            <div >
                <button className='botao' onClick={salvarCliente}>Cadastro</button>
            </div>

            
        </div>


    </div>


</div>


)

}