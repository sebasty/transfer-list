import React from "react";
import "../Modal.scss";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Dear future colleague,</p>
        <p>From my end, doing 'transfer list' from scratch could be the last option or only if company request to create it this way.</p>
        <p>My first option that I will use for our case will be MUI transfer list component for speed purpose or look over network for a another build in option.</p>
        <p>I believe criteria 1, 2, 3, 4 and 5 been cover. For css I used scss file and add vanilla css. No framework been used.</p>
        <p>UI is mobile responsive and hope can be enough to cover the request</p>
        <p><span style={{fontWeight: "bold"}}>Note:</span> if needed, please send me figma file / or a design to implement UI as you desire.</p>
        <p>Thank you!</p>
        <button onClick={onClose} className="modal-button">OK</button>
      </div>
    </div>
  );
}

export default Modal;
