// ModalContent.js
import React from 'react';
const ModalContent = ({ proyect, onClose }) => {
  if (!proyect) return console.error('Error al recibir el objeto', proyect);

  console.log('Proyecto en ModalContent:', proyect);

  return (
    <>
      <div className="modal d-flex justify-content-center align-items-center mx-auto">
        <article className="modal-content text-center">
          <div className='conten-title'>
            <h3 className='h2 text-white fw-bold'>{proyect.title}</h3>
          </div>
          <p>Categoría: {proyect.category}</p>
          <p>Tecnologías: {proyect.technologies}</p>
          <p>Descripción: {proyect.description}</p>
          <div className='d-flex justify-content-around'>
            <a href={proyect.url}
              className="btn btn-p my-3 text-white fw-bold" target="_blank" rel="noopener noreferrer">
              Ir al sitio del proyecto
            </a>
            <button onClick={onClose} id='btnc' className="btn btn-p my-3 text-white fw-bold">Cerrar</button>
          </div>
        </article>
      </div>



    </>
  );
}

export default ModalContent;