import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'



function InsercaoProduto() {

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
          <input></input>
        </div>


        <div className='pt2'>

        <div className='pts'>
          <h1>Marca / Empresa </h1>
          <input></input>
        </div>

        <div className='pts'>
          <h1>Volume Disp.</h1>
          <input></input>
        </div>

        </div>


        <div className='pt'>
          <h1>Categoria do Produto</h1>
          <input placeholder='Selecionar'></input>
          <p></p>
          <img src='/assets/images/setinha.png' height={20} width={20} alt=''/>
        </div>


        <div className='pt2'>

        <div className='pts'>
          <h1>Valor Unitário </h1>
          <input></input>
        </div>

        <div className='pts'>
          <h1>Qtnd.(Medida)</h1>
          <input></input>

          
        <button>Inserir Produto</button>
        </div>





        </div>

      </div>











    </div>

    </div>
    </div>
  );

}

export default InsercaoProduto;