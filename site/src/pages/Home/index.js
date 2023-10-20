import './index.scss';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from '../../components/cabecalho/cabecalho.js'
import Rodape from '../../components/rodape/rodape';


function Home() {

  return (
    <div className='pagina-home'>
      <Cabecalho/>

      <div className='section'>
                    <div className='info'>
                    <div className='frete'></div>
                    <div className='pagamento'></div>
                    <div className='consulte'></div>
                    <div className='QRcode'></div>
                                   
                    </div>

                    <img className='pessoas'src='/assets/images/3pessoas.png'/>

                </div>


                <h1 className='escolha'>ESCOLHA O QUE VOCÊ DESEJA</h1>

                <div className='produtos'>
                  
                  <a className='creatina'> <img className='crea'src='/assets/images/crea.png'/></a>
                 
                  <a className='whey'><img className='wheyzin'src='/assets/images/wheyzin.png'/></a>
                  <a className='multivitaminico'><img className='crea'src='/assets/images/multivitaminico.png'/></a>
                  <a className='barrinhas'><img className='crea'src='/assets/images/barra.png'/></a>
                  <h2></h2>
                  <a className='anabolizantes'><img className='crea'src='/assets/images/bomba.png'/></a>
                </div>

                <div className='div'></div>

                <div className='section-2'>

                <div className='avisos'>
                  <div className='azul'>
                    <p className='cons'>Consulte as condições</p>
                  </div>
                  <div className='verde'>
                    <p className='qtd'>Qualidade e entrega garantida ou seu dinheiro de volta.</p>
                  </div>
                </div>

                <div className='images'>
                  <img src='/assets/images/frete.png'/>
                  <img className='cash' src='/assets/images/cash.png'/>
                  </div>
                  </div>


                    

                  <div className='section-2'>

                    
                    <h1 className='historia'>NOSSA HISTÓRIA</h1>

                    <div className='sub-2'>
                          <div className='sibam'>
                          <img className='cbum'src='/assets/images/sibam.png'/>
                          <p className='sub-t2'>Ícones do fisiculturismo (Ramon Dino e Chris Bumstead)</p>
                          </div>


                            <div className='textos'>
                          <p className='text'> <span className='p'>Criamos</span> esse web site a fim de um projeto escolar e também para apoiar uma grande causa, a qual acreditamos ser de grande importância para o mundo, o esporte.</p>
                          <p className='text'> <span className='p'>Mais</span> voltado para o meio do fisiculturismo, temos como missão promover o bem-estar a longo prazo na vida de qualquer indivíduo e o aumento de sua autoestima, através da melhora de sua rotina alimentar e desempenho físico.</p>
                          </div>

                    </div>
                  </div>

                  <div className='section-3'>
                      <div className='texto'>
                      <p className='text2'><span className='p'>Acreditamos</span> que os suplementos e anabolizantes melhoram as vidas das pessoas. Muitos dizem que faz mal, porém cada um possui um objetivo em sua vida e estamos aqui para ajuda-los e provar que, se usado com sabedoria, não terá nenhum malefício, apenas benefícios.</p>
                      <p className='text3'><span className='p'>E</span> pensando em nossos clientes que sonham em entrar para o mundo do fisiculturismo implementamos uma linha de esteróides anabolizantes, a fim de potencializar seus ganhos e colocarem o “Shape” tão sonhado.</p>
                      </div>

                      <img className='math'src='/assets/images/math.png'/>

                  </div>

      <Rodape/>

    </div>
  );

}

export default Home;