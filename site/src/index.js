import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Cadastro from './pages/cadastro'
import Produtos from './pages/PaginaProdutos'
import Home from './pages/Home'
import ConsultaProduto from './pages/ConsultaProduto'
import Login from './pages/login'
import InsercaoProduto from './pages/InsercaoProduto'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path= '/cadastro' element={<Cadastro/>} />
       <Route path='/Pagina-Produtos' element={<Produtos/>}/>
      <Route path='/Home' element={<Home/>} />
      <Route path='/ConsultaProduto' element={<ConsultaProduto/>} />
      <Route path='/InsercaoProduto' element={<InsercaoProduto/>} />
      <Route path='/Login' element={<Login/>} />

        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);