import './index.scss';
import { confirmAlert } from 'react-confirm-alert';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import './index.scss';
import { useState } from 'react';
import axios from 'axios';


export default function ConsultaProdutos() {

  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');
  const [disponivel, setDisponivel] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [medida, setMedida] = useState('');
  const [listaProdutos, setListaProdutos] = useState([]);
  const [id, setId] = useState(0);
  const [erro, setErro] = useState('');
  

  function alterarProdutos(item) {
    setNome(item.nome);
    setMarca(item.marca);
    setPreco(item.preco);
    setDisponivel(item.disponivel);
    setQuantidade(item.quantidade);
    setMedida(item.medida);
    setId(item.id);
  }

    async function buscarProdutos() {
      let r = await axios.get('http://localhost:5000/produto');
      setListaProdutos(r.data);
    }

    async function removerProdutos(id) {
      confirmAlert({
        title: 'Remoção de Cliente',
        message: 'Tem certeza que deseja remover?',
        buttons: [
          {
            label: 'Sim',
            onClick: async () => {
              try {
                let r = await axios.delete('http://localhost:5000/produto/' + id);
                alert('Veículo removido com sucesso!');
                buscarProdutos();
              }
              catch (err) {
                alert(err.response.data.erro);
              }
            }
          },
          {
            label: 'Não'
          }
        ]
      });
    }

    

  return (
    <div className='pagina-produto'>
        <Cabecalho/> 

        <div className='pagina-listar'>
          <div className='container2'>
            <h1> Edição de Inventário </h1>
            <input></input>
            <div className='filtros'>
            
              <img className='lupa' onClick={buscarProdutos} src='/assets/images/lupa.svg' width={30} alt=''/>
            </div>
    
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nome</th>
                  <th>Disponível</th>
                  <th>Valor Unitário</th>
                  <th>Categoria</th>
                  <th>Marca</th>
                </tr>
              </thead>
              <tbody>
                {listaProdutos.map(item =>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.disponivel}</td>
                    <td>{item.valor}</td>
                    <td>{item.categoria}</td>
                    <td>{item.marca}</td>
                    <td className='btns' style={{ display: 'flex', height: 20 }}><i onClick={alterarProdutos} class="fa-regular fa-pen-to-square"></i> <i onClick={removerProdutos} class="fa-solid fa-delete-left"></i></td>
                  </tr>  
                )}
              </tbody>
            </table>
    
          </div>
        </div>
    </div>
  );

}