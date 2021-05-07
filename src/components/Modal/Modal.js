import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div className="modal">
      <form className="modal__form">
        <label className="modal__form__label">
          Insert the picture you took...
        </label>
        <input className="modal__form__input" type="image"></input>
      </form>
      <div className="modal__image__container">
        <div className="modal__image">1</div>
        <div className="modal__image">2</div>
        <div className="modal__image">3</div>
      </div>
    </div>
  );
};

export default Modal;
