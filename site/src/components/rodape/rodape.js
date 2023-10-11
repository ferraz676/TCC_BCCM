import "./rodape.scss";

export default function Rodape() {
  return (
    <main className="roda">
      <div className="tudo">
        <div className="pt1">
          <h1>Produto</h1>
          <p>Whey Protein</p>
          <p>Creatina</p>
          <p>Multivitamínico</p>
          <p>Anabolizantes</p>
        </div>

        <div className="pt1">
          <h1>Empresa</h1>
          <p>Sobre</p>
          <p>Envio</p>
          <p>Patrocínio</p>
        </div>

        <div className="pt1">
          <h1>Política</h1>
          <p>Termos</p>
          <p>Privacidade</p>
          <p>Diretizes</p>
          <p>Licenças</p>
          <p>Moderação</p>
        </div>
      </div>

      <div className="siga">
        <h1>Siga-nos</h1>

        <div className="logo">
          <img src="/assets/images/whats.png" alt="" />
          <img src="/assets/images/tt.png" alt="" />
          <img src="/assets/images/insta.png" alt="" />
        </div>

        <img className='cartoes' src="/assets/images/cartoes.png" alt="" />

      </div>
    </main>
  );
}
