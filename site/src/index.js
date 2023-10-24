import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Cadastro from './pages/cadastro';
import Produtos from './pages/Whey';
import Home from './pages/Home';
import Login from './pages/login';
import InsercaoProduto from './pages/InsercaoProduto';
import ConsultaProduto from './pages/ConsultaProduto';
import Whey from './pages/Whey';
import DadosPessoais from './pages/dadosPessoais';
import Carrinho from './pages/carrinho';
import Senha from './pages/senha';
import Lucros from './pages/lucros';
import Pagamento from './pages/pagamento';
import EntregaPedido from './pages/entregaPedido';
import Meupedido from './pages/meupedido';
import Produto from './pages/produto'
import Teladm from './pages/teladm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

      <Route path= '/cadastro' element={<Cadastro/>} />
      <Route path= '/entregaPedido' element={<EntregaPedido/>} />
       <Route path='/Produtos' element={<Produtos/>}/>
       <Route path='/produto' element={<Produto/>}/>
      <Route path='/Home' element={<Home/>} />
      <Route path='/InsercaoProduto' element={<InsercaoProduto/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/ConsultaProduto' element={<ConsultaProduto/>} />
      <Route path= '/cadastro' element={<Cadastro/>} />
      <Route path= '/Whey' element={<Whey/>} />
      <Route path= '/DadosPessoais' element={<DadosPessoais/>} />
      <Route path= '/carrinho' element={<Carrinho/>} />
      <Route path= '/senha' element={<Senha/>} />
      <Route path= '/lucros' element={<Lucros/>} />
      <Route path= '/pagamento' element={<Pagamento/>} />
      <Route path= '/meupedido' element={<Meupedido/>} />
      <Route path= '/teladm' element={<Teladm/>} />




      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);