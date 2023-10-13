import React from 'react';
import foto1 from '../IMG/foto1.jpg';
import { useLocation } from 'react-router-dom';

const Sobremi = () => {
    const location = useLocation();
    let minHeight;
    if (location.pathname === '/sobre-mi') {
        if (window.innerWidth <= 992) { // Comprueba el ancho de la pantalla
            // Establece la altura para la vista de "sobre-mí" en pantallas de hasta 991px
            minHeight = 'calc(100vh + 68rem)';
          }
    }
    return (
        <>

            <section id="about" className="abaout section" style={{ minHeight }}>
                <div class="container-fluid">
                    <div class="row text-center">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-md-6 mt-5">
                            <img src={foto1} alt="Foto" className="img-fluid mt-5"></img>
                        </div>
                        <div className="col-lg-8 col-md-12  col-sm-12 col-md-6 mt5">

                            <h2 className="h2 fw-bold">SOBRE MÍ</h2>
                            <p className="pdes">
                                Mi nombre es Daniel Ruben Rivas Saltos, Ingeniero en Sistemas graduado en la Universidad
                                Técnica Estatal de Quevedo, Ecuador, especializándome en desarrollo web frontend de manera autodidacta
                                para estar actualizado en los lenguajes y herramientas del desarrollo web. Me gusta estar
                                en constante aprendizaje en el dominio en las tecnologías
                                web que nos obligan a quienes nos dedicamos a esta profesión a estar en constante
                                actualización y aprendizaje.
                            </p>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Sobremi;