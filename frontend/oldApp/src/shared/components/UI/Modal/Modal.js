import React from 'react';
import ReactDOM from 'react-dom';

import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const ModalOverlay = (props) => {
  const content = (
    <div className="modal-window">
      <header className="modal-window__header">{props.title}</header>
      <h3>{props.subtitle}</h3>
      {props.children}
      <button className="button-second" onClick={props.onCancel}>
        Закрити
      </button>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props) => {
  if (props.show) {
    return (
      <React.Fragment>
        <Backdrop onClick={props.onCancel} />
        <ModalOverlay
          text={props.text}
          title={props.title}
          onCancel={props.onCancel}
        >
          {props.children}
        </ModalOverlay>
      </React.Fragment>
    );
  } else {
    return '';
  }
};

export default Modal;
