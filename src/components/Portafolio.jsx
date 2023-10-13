import React, { useState } from 'react';
import Modal from '../modal/Modal';
import { dataProyect } from '../helper/dataProyect';

const Portafolio = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProyect, setSelectedProyect] = useState(null);

    const openModal = (index) => {
        console.log(index)
        const selectedProject = dataProyect[index];
        //console.log(dataProyect);
        setSelectedProyect(selectedProject);
        setShowModal(true);
    };
    const closeModal = () => {
        setSelectedProyect(null);
        setShowModal(false);
    }

    return (
        <>
            <section id="portafolio" className="portafolio section">
                <div className="container-fluid">
                    <div className="row row1 text-center position-relative">
                        <h2 class="text-white fw-bold">MI PORTAFOLIO</h2>
                        <p className="text-white fw-bold display-6">
                            Aquí muestro mi protafolio de proyectos front-end realizados
                            hasta el momento y los que haré en
                            un futuro.
                        </p>
                        <div className="triangulo position-absolute"></div>
                    </div>
                    <div className="row  text-center mt-4">
                        {
                            dataProyect.map((proyect, index) => {
                                //console.log(proyect, index);
                                return (
                                    <div className="col-12 col-md-6 col-lg-3 my-4" key={index} >
                                        <h3 >{proyect.title}</h3>
                                        <div className="clipping-container">
                                            <button key={index}
                                                className="btn btn-p my-3 text-white fw-bold"
                                                onClick={() => openModal(index)} >
                                                Ver proyecto
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                {selectedProyect && (
                    // Renderiza el modal solo si selectedProyect tiene un valor
                    <Modal isOpen={showModal} onClose={closeModal} proyect={selectedProyect}>
                    </Modal>
                )}
            </section>
        </>
    )
}
export default Portafolio;


