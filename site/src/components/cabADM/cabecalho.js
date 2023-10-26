import './cabecalho.scss'

export default function CabecalhoADM() {

    return(
        <main className='cabADM'>
          <div className='first'>
            <span><strong>Qualidade aprovada</strong> juntamente com com <strong>preço Justo</strong></span>
          </div>

      <div className='mid'>
            <a href='../../pages/Home'><img className='logo' src='/assets/images/logo.png' height={200} alt=''/></a>

            
        <div className='inpt'>
            <input placeholder="Digite o que procura"></input>
            <button><img src='/assets/images/lupa.png' height={20} alt=''/></button>
        </div>

        <div className='profile'>
            <img src='/assets/images/perfil.png' height={50} alt=''/>
            <p><strong><a href=''>Cadastre-se</a></strong> ou Faça <strong> <a href=''>Login</a></strong></p>

            <a href=''><img className='vrum-vrum' src='/assets/images/carrinho.png' height={50} alt=''/></a>

        </div>
      </div>


        </main>
    )
}