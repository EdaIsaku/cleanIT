import "./Modal.css";
import image from "../../assets/bgImg.jpg";

function Modal() {
  return (
    <div className="modal__bg">
      <div className="modal">
        <h1 className="modal__header">Modal Header</h1>
        <span className="modal__close">&#10006;</span>
        <input className="modal__file" type="file" multiple />
        <textarea
          className="modal__textarea"
          name=""
          id=""
          placeholder="Please insert info about this place..."
          cols="20"
          rows="5"
        ></textarea>
        <div className="modal__imagePreview">
          <img className="modal__imagePreview__1" src="image" alt="" />
          <img className="modal__imagePreview__2" src="image" alt="" />
          <img className="modal__imagePreview__3" src="image" alt="" />
        </div>
        <input
          className="modal__button modal__button-submit"
          type="submit"
          value="Report"
        />
        <input
          className="modal__button modal__button-cancel"
          type="button"
          value="Cancel"
        />
      </div>
    </div>
  );
}

export default Modal;
