import './index.scss';
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
  

    async function buscarProdutos() {
      let r = await axios.get('http://localhost:5000/produto');
      setListaProdutos(r.data);
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
                  </tr>  
                )}
              </tbody>
            </table>
    
          </div>
        </div>
    </div>
  );

}