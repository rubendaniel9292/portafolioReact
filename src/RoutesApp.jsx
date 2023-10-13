import React from 'react';
//import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';//para trabajar en local
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'; // Cambio a HashRouter
import Inicio from './components/Inicio';
import HeaderNav from './layoud/HeaderNav';
import Footer from './layoud/Footer';
import Sobremi from './components/Sobremi';
import Conocimientos from './components/Conocimientos';
import Portafolio from './components/Portafolio';

const RoutesApp = () => {
  return (
    <HashRouter> {/* Cambiar de BrowserRouter a HashRouter */}
      {/*header y navegacion*/}
      <main>
        <HeaderNav />
        <Routes>
          <Route path='/' element={<Navigate to='/inicio' />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/sobre-mi' element={<Sobremi />} />
          <Route path='/conocimientos' element={<Conocimientos />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/*' element={<Inicio />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>

  )
}


export default RoutesApp;