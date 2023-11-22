import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import CabecalhoADM from '../../components/cabADM/cabecalho.js';
import { useEffect, useState } from 'react';
import { cadastrarProduto, enviarImagem, buscarPorId, alterarProduto, buscarImagem} from '../../api/produtoApi.js';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function InsercaoProduto() {

  const [produto, setProduto] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco, setPreco] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [medida, setMedida] = useState('');
  const [imagem, setImagem] = useState();
  const [id, setId] = useState(0);

  const navigate = useNavigate();


  const { idParam } = useParams();

  useEffect(() => {
    if(idParam){
      carregarProduto();
    }
  }, [])

  async function carregarProduto(){
      const resposta = await buscarPorId(idParam);
      setProduto(resposta.produto);
      setMarca(resposta.marca);
      setCategoria(resposta.categoria);
      setPreco(resposta.preco);
      setQuantidade(resposta.quantidade);
      setMedida(resposta.medida);

      setId(resposta.id);
      setImagem(resposta.imagem);
  }

  async function salvarProduto() {
      try{
          if(!imagem)
            throw new Error('Escolha a capa do Produto!')

        if (id === 0){
          const novoProduto = await cadastrarProduto(produto,marca,categoria,preco,quantidade,medida);
          await enviarImagem( novoProduto.id, imagem);
          setId(novoProduto.id);
          toast.dark('Produto Cadastrado com Sucesso!');
          navigate('/ConsultaProduto');
      }

      else {
        await alterarProduto(id, produto, marca, categoria, preco, quantidade, medida);

        if(typeof (imagem) == 'object')
            await enviarImagem(id, imagem);

        toast.dark('Produto Alterado com Sucesso!');
        navigate('/ConsultaProduto');
      }

      } catch(err){
      if(err.response)
        toast.error(err.response.data.erro);
      else
        toast.error(err.message);
      }

  }

  function escolherImagem(){
     document.getElementById('imagemCapa').click();
  }

  function mostrarImagem(){
    if(typeof (imagem) == 'object') {
    return URL.createObjectURL(imagem);
  }
  else{
    return buscarImagem(imagem);
  }
 }
  


  return (
    <div className='pagina-insercao'>
  
      <div className='cab90'>
      <CabecalhoADM/>
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