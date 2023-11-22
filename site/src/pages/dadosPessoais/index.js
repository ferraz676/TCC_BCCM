import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Rodape from '../../components/rodape/rodape.js';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import LateralCliente from '../../components/lateralCliente/index.js'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { consultarCliente } from '../../api/clienteApi'
import storage from 'local-storage';

export default function DadosPessoais() {

  const [clientes, setClientes] = useState([]);

  const navigate = useNavigate();

  async function carregarClientes() {
    const idCliente = storage('cliente-logado').id;
    const resposta = await consultarCliente(idCliente);
    setClientes(resposta);
  }

  useEffect(() => {
    carregarClientes();
  }, [])


  return (
    <div className='dados-pessoais'>
      <Cabecalho />


      <div className='mid-1'>

        <LateralCliente selecionado='dadosPessoais' />


        {clientes.map(item =>

          <div className='qlqCoisa' key={item.id}>
            <div className='principal'>
              <div className='pt1'>
                <h1>CPF</h1>
                <span>{item.cpf.substr(0, 6)}X.XXX-XX</span>
                <p>Somente números.</p>
              </div>

              <div className='pt1'>
                <h1>Data de Nascimento</h1>
                <span>{item.nascimento.substr(0, 10)}</span>
              </div>

              <div className='pt1'>
                <h1>Nome Completo</h1>
                <span>{item.cliente}</span>
              </div>

              <div className='pt2'>
                <div className='d1'>
                  <h1>Telefone Celular</h1>
                  <span>{item.telefone}</span>
                </div>
                <div className='d2'>
                  <h1>Telefone Fixo(Opcional)</h1>
                  <span>{item.fixo}</span>
                </div>
              </div>


              <div className='pt1'>

                <div className='pt5'>
                  <h1>Gênero</h1>
                  <span>{item.genero}</span>
                </div>
              </div>

              <div className='pt1'>
                <h1>Dados de Acesso (Email)</h1>
                <span>{item.email}</span>
              </div>

            </div>


            <div className='right'>
              <div className='promocoes'>
                <input type='checkbox'></input>
                <p>Receber promoções via whatsapp</p>
              </div>

              <div className='promocoes'>
                <input type='checkbox'></input>
                <p>Receber atualizações de pedidos via whatsapp</p>
              </div>

              <div className='promocoes2'>
                <p>"Preços e condições de pagamento apresentados neste "site" somente são válidos para as compras efetuadas no ato da sua exibição. *Condições de pagamento à vista somente para PIX e boleto bancário.</p>
              </div>

            </div>

          </div>

        )}

      </div>


      <Rodape />



    </div>
  )

}
