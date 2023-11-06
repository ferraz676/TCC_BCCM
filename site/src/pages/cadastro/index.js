import './index.scss';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { inserirCliente } from '../../api/clienteApi.js';

export default function Cadastrotcc(){


  const [cliente, setCliente] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [genero, setGenero] = useState('');
  const [fixo, setFixo] = useState('');
  const [nascimento, setNascimento] = useState('');


  async function salvarCliente() {
    try{
      const novoCliente = await inserirCliente(cliente, telefone, cpf, email, senha, genero, fixo, nascimento);

      toast.dark('Cliente Cadastrado com Sucesso!');
    } catch(err){
      toast.error(err.message);
    }
}

return(
<div className='pagina-cadastro'>
    <div className='cabeçalho'>

        <p>Garantimos que você fez a melhor escolha!</p>
        <img src='/assets/images/logobccm.png' alt=""/>
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
           <input type='text' placeholder='CPF' value={cpf} onChange={e => setCpf(e.target.value)}/>
            </div>

            <div className='nm'>
           <input type='text' placeholder='Nome Completo' value={cliente} onChange={e => setCliente(e.target.value)}/>
            </div>

            <div className='dt'>
           <input type='date' placeholder='Data de Nascimento' value={nascimento} onChange={e => setNascimento(e.target.value)}/>
            </div>

            <div className='tl'>
           <input type='text' placeholder='Celular' value={telefone} onChange={e => setTelefone(e.target.value)}/>
           <input type='text' placeholder='Telefone fixo' className='fx' value={fixo} onChange={e => setFixo(e.target.value)}/>

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
                <input type='text' value={genero} placeholder='Masculino / Feminino' onChange={e => setGenero(e.target.value)}></input>
            </div>


            <div >
                <button className='botao' onClick={salvarCliente}>Cadastro</button>
            </div>

            
        </div>


    </div>


</div>


)

}