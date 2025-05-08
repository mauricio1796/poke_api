import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Listar from  './Componentes/Listar'
import Aleatorios from  './Componentes/Aleatorios'
import Detalle from  './Componentes/Detalle'
import Favoritos from './Componentes/Favoritos'
import Original from './Componentes/Original'
import Usuario from './Componentes/Usuario'
import Menu from './Componentes/Menu';
import { AppProvider } from './contexto/contexto';
import Capturados from './Componentes/capturados';



function App() {

  return (
    <AppProvider>
    <Router>

      <Menu />
     
      <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/usuarios" element={<Usuario />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/Original" element={<Original />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/:nombre" element={<Detalle />} />
        <Route path="/detalle/:name" element={<Detalle />} />
        <Route path="/capturados" element={<Capturados />} />
      </Routes>
   
    </Router>
    </AppProvider>
  );
}

export default App
