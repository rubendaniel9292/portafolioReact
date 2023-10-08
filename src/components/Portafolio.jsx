import React, { useState } from 'react';
import Modal from '../modal/Modal';

const Portafolio = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <section id="portafolio" className="portafolio section">
                <div className="container-fluid ">
                    <div className="row row1 text-center position-relative">
                        <h2 className="h2 fw-bold text-white mt-4">MIS PROYECTOS</h2>
                        <p className="text-white fw-bold display-6">
                            Aquí muestro el protafolio de proyectos front-end realizados hasta el momento y los que haré en
                            un futuro.
                            <div className="triangulo position-absolute"></div>
                        </p>
                    </div>

                    <div className="row  text-center mt-5">
                        <div className="col-12 col-sm-4">
                            <p className="">Sitio web de una clínica dental</p>
                            <a href="https://rubendaniel9292.github.io/proyectomedico.github.io/"
                                className="btn btn-p my-3 text-white fw-bold" target="_blank" rel="noopener noreferrer">
                                <p>Ver proyecto</p>
                            </a>

                        </div>
                        <div className="col-12 col-sm-4">
                            <p className="t">Sitio web de una agecia de marketing y publicidad</p>
                            <a href="https://rubendaniel9292.github.io/bootstrap1.github.io/"
                                className="btn btn-p my-3 text-white fw-bold" target="_blank" rel="noopener noreferrer">
                                <p>Ver proyecto</p>
                            </a>
                        </div>
                        <div className="col-12 col-sm-4">
                            <p className="">Aplicación sencilla con TS </p>
                            <a href="https://rubendaniel9292.github.io/pelicula.github.io/"
                                className="btn btn-p my-3 text-white fw-bold" target="_blank" rel="noopener noreferrer">
                                <p>Ver proyecto</p>
                            </a>
                           
                        </div>
                    </div>
                    <div className="clipping-container">
                        <button onClick={openModal}>Mostrar modal</button>
                        <Modal isOpen={showModal} onClose={closeModal} />
                    </div>
                </div>




            </section>


        </>
    )
}

export default Portafolio;