import { useState } from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login'
import { Grid } from '@material-ui/core';
import './App.css'
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import Contato from './paginas/contato/Contato';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path='/temas' element={<ListaTema />} />
          <Route path='/postagens' element={<ListaPostagem />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/formularioPostagem' element={<CadastroPostagem />} />
          <Route path='/formularioPostagem/:id' element={<CadastroPostagem />} />
          <Route path='/formularioTema' element={<CadastroTema />} />
          <Route path='/formularioTema/:id' element={<CadastroTema />} />
          <Route path='/deletarPostagem/:id' element={<DeletarPostagem />} />
          <Route path='/deletarTema/:id' element={<DeletarTema />} />


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
