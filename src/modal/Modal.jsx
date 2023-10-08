// Modal.js
import React from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-container">
      <ModalContent onClose={onClose} />
    </div>,
    document.body
  );
}
