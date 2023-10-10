// ModalContent.js
import React from 'react';
import { dataProyect } from '../helper/dataProyect';

export default function ModalContent({ onClose, proyect }) {
  if (!proyect) return null;

  return (
    <>
      <div className="modal d-flex justify-content-center align-items-center mx-auto">

        <article className="modal-content text-center" key={proyect.title}>
          <div className='conten-title'>
            <h3 className='h2 text-white fw-bold'>{proyect.title}</h3>
          </div>
          <p>Categoría: {proyect.category}</p>
          <p>Tecnologías: {proyect.technologies}</p>
          <p>Descripción: {proyect.description}</p>
          <div className='d-flex justify-content-around'>
            <button onClick={onClose} className="btn btn-p my-3 text-white fw-bold " >Ir al sitio</button>
            <button onClick={onClose} className="btn btn-p my-3 text-white fw-bold" >Cerrar</button>
          </div>
        </article>

      </div>
      {/*
     <div className="modal d-flex justify-content-center align-items-center mx-auto">
        <div className="modal-content text-center">
          <div className='conten-title'>
            <h4 className='h2 text-white fw-bold'>Clinica dental</h4>
          </div>
          <p></p>
          <div className='d-flex justify-content-around'>
            <button onClick={onClose} className="btn btn-p my-3 text-white fw-bold " >Ir al sitio</button>
            <button onClick={onClose} className="btn btn-p my-3 text-white fw-bold" >Cerrar</button>
          </div>
        </div>
      </div>
    */}

    </>

  );
}
