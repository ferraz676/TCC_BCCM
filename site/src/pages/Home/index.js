import "./index.scss";

import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import "react-toastify/dist/ReactToastify.css";
import Cabecalho from "../../components/cabecalho/cabecalho.js";
import Rodape from "../../components/rodape/rodape.js";
import { useEffect, useState } from "react";
import storage from "local-storage";

register();

export default function Home() {

  const [slidePerView, setSlidePerView] = useState(1);
  const data = [
    {id: '1', image: '/assets/images/3pessoas.png'},
    {id: '2', image: '/assets/images/arones.png'},
    {id: '3', image: '/assets/images/homeCrea.png'}
  ]

  return (
    <div className="pagina-home">
      <Cabecalho />

      <div className="section">
        <div className="info">
          <div className="frete">
          <div className="bordaImagem">
            <img src="/assets/images/caminhao.png" height={20} alt="" />
          </div>
            <p>FRETE GRÁTIS (CONSULTE CEP)</p>
          </div>

          <div className="frete">
          <div className="bordaImagem">
            <img src="/assets/images/barras.png" height={20} alt="" />
            </div>
            <p>PAGAMENTO VIA BOLETO</p>
          </div>
          <div className="frete">
          <div className="bordaImagem">
            <img src="/assets/images/msg.png" height={20} alt="" />
            </div>
            <p className="pp1">CONSULTE NOSSA NUTRI</p>
          </div>
          <div className="frete">
            <div className="bordaImagem">
            <img src="/assets/images/code.png" height={20} alt="" />
            </div>
            <p>ESCANEIE NOSSO QR CODE</p>
          </div>
        </div>

        <article>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={slidePerView}
            navigation={true}
            loop={true}
            autoplay={{delay: 3000}}
          >
            {data.map((item) => (

            
            <SwiperSlide key={item.id}>
              <main className="slide">
                <img src={item.image} 
                      alt="fdc" 
                      className="slide-item"/>
              </main>

            </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </div>

      <h1 className="escolha">ESCOLHA O QUE VOCÊ DESEJA</h1>
      <div className="roleta">
        <div className="produtos">
          <div className="f1">
            <a href="../creatina" className="creatina">
              {" "}
              <img className="crea" src="/assets/images/creatina.png" alt="" />
            </a>
          </div>

          <div className="f2">
            <a href="../creatina" className="whey">
              <img
                className="wheyzin"
                src="/assets/images/wheyzin.png"
                alt=""
              />
            </a>
          </div>

          <div className="f3">
            <a href="../creatina" className="multivitaminico">
              <img
                className="crea"
                src="/assets/images/multivitaminico.png"
                alt=""
              />
            </a>
          </div>

          <div className="f4">
            <a href="../creatina" className="barrinhas">
              <img className="crea" src="/assets/images/barra.png" alt="" />
            </a>
          </div>

          <div className="f5">
            <a href="../creatina" className="anabolizantes">
              <img className="crea" src="/assets/images/bomba.png" alt="" />
            </a>
          </div>
        </div>

        <div className="nms">
          <p className="c1">Creatina</p>
          <p className="c2">Whey Protein</p>
          <p className="c3">Multivitamínico</p>
          <p className="c4">Barrinhas</p>
          <p className="c5">Anabolizantes</p>
        </div>
      </div>
      <div className="div"></div>

      <div className="section-2">
        <div className="avisos">
          <div className="azul">
            <p className="cons">Consulte as condições</p>
          </div>
          <div className="verde">
            <p className="qtd">
              Qualidade e entrega garantida ou seu dinheiro de volta.
            </p>
          </div>
        </div>

        <div className="images">
          <img src="/assets/images/frete.png" alt="" />
          <img className="cash" src="/assets/images/cash.png" alt="" />
        </div>
      </div>

      <div className="section-22">
        <h1 className="historia">NOSSA HISTÓRIA</h1>

        <div className="sub-2">
          <div className="sibam">
            <img className="cbum" src="/assets/images/sibam.png" alt="" />
            <p className="sub-t2">
              Ícones do fisiculturismo (Ramon Dino e Chris Bumstead)
            </p>
          </div>

          <div className="textos">
            <p className="texto">
              <span className="pc">Criamos</span> esse web site a fim de um
              projeto escolar e também para apoiar uma grande causa, a qual
              acreditamos ser de grande importância para o mundo, o esporte.
            </p>
            <p className="texto">
              {" "}
              <span className="pc">Mais</span> voltado para o meio do
              fisiculturismo, temos como missão promover o bem-estar a longo
              prazo na vida de qualquer indivíduo e o aumento de sua autoestima,
              através da melhora de sua rotina alimentar e desempenho físico.
            </p>
          </div>
        </div>
      </div>

      <div className="section-3">
        <div className="texto">
          <p className="text2">
            <span className="p">Acreditamos</span> que os suplementos e
            anabolizantes melhoram as vidas das pessoas. Muitos dizem que faz
            mal, porém cada um possui um objetivo em sua vida e estamos aqui
            para ajuda-los e provar que, se usado com sabedoria, não terá nenhum
            malefício, apenas benefícios.
          </p>
          <p className="text3">
            <span className="p">E</span> pensando em nossos clientes que sonham
            em entrar para o mundo do fisiculturismo implementamos uma linha de
            esteróides anabolizantes, a fim de potencializar seus ganhos e
            colocarem o “Shape” tão sonhado.
          </p>
        </div>

        <img className="math" src="/assets/images/math.png" alt="" />
      </div>

      <Rodape />
    </div>
  );
}
