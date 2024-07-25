import React from 'react';
import './Modal.css'; // Optional: Create a CSS file for styling the modal

const Modal = ({ show, message, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose} className="close-button">What happens next?</button>
      </div>
    </div>
  );
};

export default Modal;
