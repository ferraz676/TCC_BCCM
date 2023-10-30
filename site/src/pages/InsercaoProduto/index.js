import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants.js';


export default function InsercaoProduto() {

  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [medida, setMedida] = useState('');
  const [listaProdutos, setListaProdutos] = useState([]);
  const [id, setId] = useState(0);
  const [erro, setErro] = useState('');

  async function buscarProdutos() {
    let r = await axios.get(API_URL + '/produto');
    setListaProdutos(r.data);
  }


  function alterarProdutos(item) {
    setNome(item.nome);
    setMarca(item.marca);
    setPreco(item.preco);
    setQuantidade(item.quantidade);
    setMedida(item.medida);
    setId(item.id);
  }


  async function salvarProdutos() {
    try{  
      let produto = {
        produto: nome,
        marca: marca,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        medida: medida
      }

      if (id == 0) {
        let r = await axios.post(API_URL + '/produto/postar', produto);
        alert('Produto cadastrado com sucesso!');
      }
      else {
        let r = await axios.put(API_URL + '/produto/' + id, produto);
        alert('Produto alterado com sucesso!');
        buscarProdutos();
        limpar();
      }
      
      console.log('igao');
        
    } catch (err) {
      console.log(err);
      setErro(err.response.data.erro);  
    }
    }
  
    function limpar() {
      setNome('');
      setMarca('');
      setCategoria('');
      setPreco('');
      setQuantidade('');
      setMedida('');
      setId(0);
    }

    async function enviarImagemProduto(imagem){
      const formData = new formData();
      formData.append('capa', imagem);
    
    
      const resposta = await axios.put(`/produto/${id}/capa`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      }); 
      
      return resposta.status;
    }
    

  return (
    <div className='pagina-insercao'>
      
      <Cabecalho/>
    
    <div className='mid'>


      <div className='title'>
        <img src='/assets/images/caixinha.png' height={70} alt=''/>
        <h1>Inserção de Produto</h1>
      </div>
      



    <div className='tudo'>


      <div className='inserir'>
        <div className='pt'>
          <h1>Nome do Produto</h1>
          <input type='text' value={nome} onChange={e => setNome(e.target.value)}></input>
        </div>


        <div className='pt2'>

        <div className='pts'>
          <h1>Marca / Empresa </h1>
          <input type='text' value={marca} onChange={e => setMarca(e.target.value)}></input>
        </div>

        <div className='pts'>
          <h1>Volume Disp.</h1>
          <input type='text' value={quantidade} onChange={e => setQuantidade(e.target.value)}></input>
        </div>

        </div>


        <div className='pt'>
          <h1>Categoria do Produto</h1>
          <input type='text' value={categoria} onChange={e => setCategoria(e.target.value)} ></input>
        </div>


        <div className='pt2'>

        <div className='pts'>
          <h1>Valor Unitário </h1>
          <input type='number' value={preco} onChange={e => setPreco(e.target.value)}></input>
        </div>

        <div className='pts'>
          <h1>Qtnd.(Medida)</h1>
          <input type='text' value={medida} onChange={e => setMedida(e.target.value)}></input>

          
        <button onClick={salvarProdutos}>Inserir Produto</button>
        </div>


        <img className='adicionar' src='./assets/images/mais.png' height={350} alt=''/>



        </div>

      </div>











    </div>

    </div>
    </div>
  );

}