import './index.scss';
import 'react-toastify/dist/ReactToastify.css';


export default function cardEndereco({ item: { id, endereco, numero, bairro}, selecionar, selecionado }) {
  

  return (
      <div className='card-endereco' 
      onClick={() => selecionar(id)} 
      style={{ borderColor: selecionado  ? '#02FF1B' : '#ACACAC' }}
      >
          <div className='bloco'>
          <div className='verd'></div>
          <p>{endereco} - {numero}, {bairro}, São Paulo, SP </p>
          </div>
    </div>
  );

}
