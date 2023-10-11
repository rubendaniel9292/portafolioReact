import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from './components/Inicio';
import HeaderNav from './layoud/HeaderNav';
import Footer from './layoud/Footer';
import Sobremi from './components/Sobremi';
import Conocimientos from './components/Conocimientos';
import Portafolio from './components/Portafolio';

const RoutesApp = () => {
  return (

    <BrowserRouter>
      {/*header y navegacion*/}

      <main>
        <HeaderNav />
        <Routes>
          <Route path='/' element={<Navigate to='/inicio' />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/sobre-mi' element={<Sobremi />} />
          <Route path='/conocimientos' element={<Conocimientos />} />
          <Route path='/portafolio' element={<Portafolio />} />
          
          <Route path='/*' element={<h1>Error 404</h1>} />
        </Routes>
  
      </main>
      <Footer />
    </BrowserRouter>

  )
}

export default RoutesApp;