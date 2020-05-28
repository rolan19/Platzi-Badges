import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css';

export default function Modal(props) {
   if (!props.isOpen) {
      return null;
   }

   /* {ReactDOM.createPortal(__que__, __donde__)} */
   return ReactDOM.createPortal(
      <div className="Modal">
         <div className="Modal__container">
            <button onClick={props.onClose} className="Modal__close-button">
               X
            </button>
            {props.children}
         </div>
      </div>,
      document.getElementById('modal')
   );
}
