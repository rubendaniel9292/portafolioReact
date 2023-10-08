import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <>
            <header >
                <nav id="menu" class="navbar navbar-expand-lg position-fixed">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="boton-menu text-white navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse text-center justify-content-end pt-xs-2 mt-xs-4" id="navbarNav">
                            <ul className='navbar-nav text-center fw-bold'>

                                <li>
                                    <NavLink to='/inicio' className={'nav-link text-white'}>Inicio</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to='/sobre-mi' className="nav-link text-white" aria-current="page">Sobre mí</NavLink>
                                </li>

                                <li className="nav-item mx-2">
                                    <NavLink to='/conocimientos' className="nav-link text-white" aria-current="page">Conocimientos</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to='/portafolio' className="nav-link text-white" aria-current="page">Portafolio</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink to='/contacto' className="nav-link text-white" aria-current="page">Contactos</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>


            </header>
        </>


    )
}

export default HeaderNav;