import React, { useState } from 'react';
import Modal from '../modal/Modal';
import ModalContent from '../modal/ModalContent';
import { dataProyect } from '../helper/dataProyect';

const Portafolio = ({ limit }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProyect, setSelectedProyect] = useState(null);


    {/* 
  const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
*/}


    const openModal = (proyect) => {
        setSelectedProyect(proyect);// Guarda el proyecto seleccionado
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedProyect(null);// Restablece el proyecto seleccionado al cerrar el modal
        setShowModal(false);
    };


    return (
        <>
            <section id="portafolio" className="portafolio section">
                <div className="container-fluid ">
                    <div className="row row1 text-center position-relative">
                        <h2 className="h2 fw-bold text-white mt-4">MIS PROYECTOS</h2>
                        <p className="text-white fw-bold display-6">
                            Aquí muestro mi protafolio de proyectos front-end realizados hasta el momento y los que haré en
                            un futuro.
                        </p>
                        <div className="triangulo position-absolute"></div>
                    </div>

                    <div className="row  text-center mt-5">
                        {
                            dataProyect.slice(0, limit).map(proyect => {
                                return (
                                    <div className="col-12 col-sm-3" key={proyect.title}>
                                        <h3 >{proyect.title}</h3>
                                        <div className="clipping-container">
                                            <button key={proyect} className="btn btn-p my-3 text-white fw-bold"
                                                onClick={() => openModal(proyect)} >
                                                Ver proyecto
                                            </button>
                                            {selectedProyect && ( // Renderiza el modal solo si selectedProyect tiene un valor
                                                <Modal isOpen={showModal} onClose={closeModal}>
                                                    <ModalContent proyect={selectedProyect} onClose={closeModal} />
                                                </Modal>
                                            )}

                                        </div>

                                        {/*<a href="https://rubendaniel9292.github.io/proyectomedico.github.io/"
                                        className="btn btn-p my-3 text-white fw-bold" target="_blank" rel="noopener noreferrer">
                                        Ver proyecto
                                    </a>*/}

                                    </div>

                                );
                            })
                        }

                        {/* <div className="col-12 col-sm-4">
                            <p className="t">Sitio web de una agecia de marketing y publicidad</p>
                            <a href="https://rubendaniel9292.github.io/bootstrap1.github.io/"
                                className="btn btn-p my-3 text-white fw-bold" target="_blank" rel="noopener noreferrer">
                                Ver proyecto
                            </a>
                        </div>
                        <div className="col-12 col-sm-4">
                            <p className="">Aplicación sencilla con TS </p>
                            <a href="https://rubendaniel9292.github.io/pelicula.github.io/"
                                className="btn btn-p my-3 text-white fw-bold" target="_blank" rel="noopener noreferrer">
                                Ver proyecto
                            </a>

                        </div>*/}

                    </div>

                </div>



            </section>
        </>
    )
}

export default Portafolio;