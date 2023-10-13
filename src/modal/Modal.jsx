// Modal.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function Modal({ isOpen, onClose, proyect }) {
  const location = useLocation();
  let minHeight;
  if (location.pathname === '/portafolio') {
    // Altura para la vista de inicio
    minHeight = '100%';
  }

  if (!isOpen) return null;

  return createPortal(

    <div className="modal-container d-flex justify-content-center align-items-center" style={{ minHeight }}>
      <ModalContent onClose={onClose} proyect={proyect} />
    </div>,
    document.body
  );
}
