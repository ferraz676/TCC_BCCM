import './index.scss';
import 'react-toastify/dist/ReactToastify.css';



function Login() {

  return (
    <div className='pagina-login'>
      <div className='cab'>
        <div className='sla'>
        <img src='/assets/images/casinha.png' height={80} alt=''/>
        <a href='../Home'>Home</a>
        </div>
        <div className='loguinha'>
        <div className='bolinha'></div>
        <img className='logo' height={250} src='/assets/images/logo.png' alt=''/>
        </div>
        <p>Garantimos que você fez a <strong>melhor escolha!</strong></p>
      </div>


      <div className='mid'>
        <div className='blocao'>

          <div className='l1'>
          <img src='/assets/images/perfil2.png' height={60} alt=''/>
          <input type='text' placeholder='EMAIL'></input>
          </div>


          <div className='l1'>
          <img src='/assets/images/cadeado.png' height={60} alt=''/>
          <input type='text' placeholder='SENHA'></input>
          </div>

          <div className='check'>
            <div className='lembre'>
            <input type='checkbox'></input>
            <p>Lembre de mim</p>
            </div>
            <button>Esqueci minha senha</button>
          </div>
          
            <div className='last'>
              <button>LOGIN</button>
              <p>Não tem uma conta?</p>
              <a href='../cadastro'>Cadastre-se</a>
            </div>
      
        </div>
      </div>
    </div>
  );

}

export default Login;