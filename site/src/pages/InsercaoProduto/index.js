import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import { useState } from 'react';
import { cadastrarProduto, enviarImagem} from '../../api/produtoApi.js';
import { toast } from 'react-toastify';



export default function InsercaoProduto() {

  const [produto, setProduto] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [medida, setMedida] = useState('');
  const [imagem, setImagem] = useState();


  async function salvarProduto() {
      try{
        const novoProduto = await cadastrarProduto(produto,marca,categoria,preco,quantidade,medida);
        const r = await enviarImagem(novoProduto.id, imagem)


        toast.dark('Produto Cadastrado com Sucesso!')
      } catch(err){
        toast.error(err.response);
        console.log(err);
      }

  }

  function escolherImagem(){
     document.getElementById('imagemCapa').click();
  }

  function mostrarImagem(){
    return URL.createObjectURL(imagem);
 }
  


  return (
    <div className='pagina-insercao'>
  
      <div className='cab90'>
      <Cabecalho/>
      </div>
    <div className='mid'>
    <div className='tudoo'>

    <div className='title'>
        <img src='/assets/images/caixinha.png' height={70} alt=''/>
        <h1>Inserção de Produto</h1>
      </div>

      <div className='inserir'>
        <div className='pt'>
          <h1>Nome do Produto</h1>
          <input type='text' value={produto} onChange={e => setProduto(e.target.value)}></input>
        </div>


        <div className='pt2'>

        <div className='pts'>
          <h1>Marca / Empresa </h1>
          <input type='text' value={marca} onChange={e => setMarca(e.target.value)}></input>
        </div>

        <div className='pts'>
          <h1>Volume Disp.</h1>
          <input type='number' value={quantidade} onChange={e => setQuantidade(e.target.value)}></input>
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

          
        <button onClick={salvarProduto}>Inserir Produto</button>
        </div>

        <div className='upload-capa' onClick={escolherImagem}>

          {imagem &&  
              <img className='imagem-capa' src={mostrarImagem()} alt=''/>
          }

          {!imagem && 
          <img className='adicionar' src='./assets/images/mais.png' height={350} alt='' />
          }

        <input type='file' id='imagemCapa' onChange={e => setImagem(e.target.files[0])}></input>

        </div>
        </div>

      </div>

    </div>

    </div>
    </div>
  );

}