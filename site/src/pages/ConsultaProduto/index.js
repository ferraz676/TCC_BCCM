import './index.scss';
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import CabecalhoADM from '../../components/cabADM/cabecalho.js'
import './index.scss';
import { useState, useEffect } from 'react';
import { consultarTodosProdutos, consultarNomeProdutos, removerProduto } from '../../api/produtoApi.js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ConsultaProdutos() {

  const [produtos, setProdutos] = useState([]);
  const [filtro, SetFiltro] = useState('')
  const navigate = useNavigate();

  function editarProduto(id){
    navigate(`/AlterarProduto/${id}`);
  }

  function inserirProduto(){
    navigate('/InsercaoProduto')
  }


  async function carregarProdutos(){
    const resposta = await consultarTodosProdutos();
    setProdutos(resposta);
  }

  function abrirDetalhes(id){
    navigate(`/produtoDetalhe/${id}`)
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

              <button onClick={inserirProduto}>Inserir Produto</button>
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
                  <th></th>
            </tr>
        </thead>
        <tbody className='tbody-table'>

          {produtos.map(item =>

          <tr key={item.id} className='tr2' onClick={() => abrirDetalhes(item.id)}>
            <td>{item.id}</td>
            <td>{item.produto}</td>
            <td>{item.quantidade}</td>
            <td>{item.preco}</td>
            <td>{item.categoria}</td>
            <td >{item.marca} 

            <img className='marcaTD'  src='/assets/images/lixeira.png' alt='' height={20} 
            onClick={e => {
              e.stopPropagation(); 
              removerProdutoClick(item.id, item.produto)}} />

            <img className='marcaTD' src='/assets/images/lapis.png' alt='' height={20} 
            onClick={e => {
              e.stopPropagation();
              editarProduto(item.id)}} /></td>
            
          </tr>

            )}



        </tbody>
    </table>





    
          </div>
        </div>
    </div>
  );

}