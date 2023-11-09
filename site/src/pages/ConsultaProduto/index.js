import './index.scss';
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import CabecalhoADM from '../../components/cabADM/cabecalho.js'
import './index.scss';
import { useState, useEffect } from 'react';
import { consultarTodosProdutos, consultarNomeProdutos, removerProduto } from '../../api/produtoApi.js';
import { toast } from 'react-toastify';


export default function ConsultaProdutos() {

  const [produtos, setProdutos] = useState([]);
  const [filtro, SetFiltro] = useState('')



  async function carregarProdutos(){
    const resposta = await consultarTodosProdutos();
    setProdutos(resposta);
  }



  async function removerProdutoClick(id, produto){

    confirmAlert({
      title: "Remover Produto",
      message: `Deseja remover o produto ${produto}?`,
      buttons: [
        {
          label: 'Sim',
          onClick: async () => {


            const resposta = await removerProduto(id, produto);
            if (filtro === '')
                consultarTodosProdutos();
            else
                filtrar();

            toast.dark('Produto Removido com Sucesso!'); 
            
            carregarProdutos();
          }
        },
        {
          label: 'Não'
        }
      ]
    })
  }
  



  async function filtrar(){
    const resposta = await consultarNomeProdutos(filtro);
    setProdutos(resposta);
  }



  useEffect(() => {
    carregarProdutos();
  }, [])


  
    

  return (
    <div className='pagina-produto'>
        <CabecalhoADM/> 

        <div className='pagina-listar'>
          <div className='container2'>
            <h1> Edição de Inventário </h1>

          <div className='buttons'>  
            <input type='text' placeholder='Pesquisar'></input>
            <div className='filtros'>
            
              <img className='lupa' value={filtro} onChange={e => SetFiltro(e.target.value)} src='/assets/images/lupa.svg' width={30} 
              alt=''/>

              <button>Inserir Produto</button>

              <button>Editar</button>
            </div>

            </div>
    
            
            <table class="tabela">
        <thead className='baba'>
            <tr>
                  <th>Id</th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Valor Unitário</th>
                  <th>Categoria</th>
                  <th>Marca</th>
            </tr>
        </thead>
        <tbody className='tbody-table'>

          {produtos.map(item =>

          <tr key={item.id} className='tr2'>
            <td>{item.id}</td>
            <td>{item.produto}</td>
            <td>{item.quantidade}</td>
            <td>{item.preco}</td>
            <td>{item.categoria}</td>
            <td>{item.marca}</td>
            <td className='btns'>
              <img  src='/assets/images/lixeira.png' alt='' height={30} onClick={() => removerProdutoClick(item.id, item.produto)}/>
              <img src='/assets/images/lapis.png' alt='' height={30}/>
            </td>
          </tr>

            )}



        </tbody>
    </table>





    
          </div>
        </div>
    </div>
  );

}