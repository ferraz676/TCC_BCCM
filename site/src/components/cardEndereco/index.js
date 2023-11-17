import './index.scss';
import 'react-toastify/dist/ReactToastify.css';


export default function cardEndereco(props) {


  return (
      <div className='card-endereco'>
          <div className='bloco'>
          <div className='verd'></div>
          <p>{props.item.endereco} - {props.item.numero}, {props.item.bairro}, São Paulo, SP </p>
          </div>
    </div>
  );

}
