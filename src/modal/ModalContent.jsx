// ModalContent.js
import React from 'react';

export default function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div>Soy una ventana modal</div>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
