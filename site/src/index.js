import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import Cadastro from './pages/cadastro';
import EnderecoEditar from './pages/enderecoEditar';
import Home from './pages/Home';
import Login from './pages/login';
import InsercaoProduto from './pages/InsercaoProduto';
import ConsultaProduto from './pages/ConsultaProduto';
import Whey from './pages/Whey';
import DadosPessoais from './pages/dadosPessoais';
import Senha from './pages/senha';
import Lucros from './pages/lucros';
import Pagamento from './pages/pagamento';
import Pagamento2 from './pages/pagamento2';
import Pagamento3 from './pages/pagamento3';
import EntregaPedido from './pages/entregaPedido';
import Meupedido from './pages/meupedido';
import Endereco from './pages/endereco';
import ProdutoDetalhe from './pages/produtoDetalhe'
import Teladm from './pages/teladm';
import DesempenhoVendas from './pages/desempenhoVendas';
import Creatina from './pages/creatina'
import Anabolizante from './pages/anabolizante';
import Multivitaminico from './pages/multivitaminico';
import Histopedido from './pages/histopedido';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>

      <Route path= '/cadastro' element={<Cadastro/>} />
      <Route path= '/enderecoEditar/:idParam' element={<EnderecoEditar/>} />
      <Route path= '/desempenhoVendas' element={<DesempenhoVendas/>} />
      <Route path= '/entregaPedido' element={<EntregaPedido/>} />
      <Route path='/produtoDetalhe/:idParam' element={<ProdutoDetalhe/>}/>
      <Route path='/' element={<Home/>} />
      <Route path='/InsercaoProduto' element={<InsercaoProduto/>} />
      <Route path='/AlterarProduto/:idParam' element={<InsercaoProduto/>} />
      <Route path='/endereco' element={<Endereco/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/ConsultaProduto' element={<ConsultaProduto/>} />
      <Route path= '/cadastro' element={<Cadastro/>} />
      <Route path= '/Whey' element={<Whey/>} />
      <Route path= '/DadosPessoais' element={<DadosPessoais/>} />
      <Route path= '/senha' element={<Senha/>} />
      <Route path= '/lucros' element={<Lucros/>} />
      <Route path= '/pagamento' element={<Pagamento/>} />
      <Route path= '/pagamento2' element={<Pagamento2/>} />
      <Route path= '/pagamento3' element={<Pagamento3/>} />
      <Route path= '/meupedido' element={<Meupedido/>} />
      <Route path= '/teladm' element={<Teladm/>} />
      <Route path= '/creatina' element={<Creatina/>} />
      <Route path= '/anabolizante' element={<Anabolizante/>} />
      <Route path= '/multivitaminico' element={<Multivitaminico/>} />
      <Route path= '/histopedido' element={<Histopedido/>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);