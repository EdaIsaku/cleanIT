import { connect } from "react-redux";
import { FiPaperclip } from "react-icons/fi";
import "./Modal.css";
import { showModal } from "../../redux/actions/toolsAction";

function Modal({ showModal }) {
  let hasPicture = true;

  function closeModal(ev) {
    if (ev.target === ev.currentTarget) {
      showModal(false);
    }
  }

  return (
    <div className='modal__bg' onClick={closeModal}>
      <div className='modal'>
        <h1 className='modal__header'>Make our city cleaner!</h1>
        <span className='modal__close' onClick={closeModal}>
          &#10006;
        </span>

        <div className='modal__input'>
          <label htmlFor='test' className='modal__input__label'>
            <span className='modal__input__label-left'>
              <FiPaperclip />
            </span>
            <input
              id='test'
              className='modal__input__file'
              type='file'
              multiple
            />
            <h6 className='modal__input__label-right'>
              Please upload up to 3 clear images of the place...
            </h6>
          </label>
        </div>
        <textarea
          className='modal__textarea'
          name=''
          id=''
          placeholder='Please insert info about this place...'
          cols='20'
          rows='5'
        ></textarea>
        <div className='modal__imagePreview'>
          {hasPicture ? (
            <>
              <img
                className='modal__imagePreview__1'
                src='https://mdbcdn.b-cdn.net/wp-content/uploads/2017/08/file-inputs-fb.jpg'
                alt=''
              />
              <img
                className='modal__imagePreview__2'
                src='https://mdbcdn.b-cdn.net/wp-content/uploads/2016/08/inputs.jpg'
                alt=''
              />
              <img
                className='modal__imagePreview__3'
                src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/de0e3a36329535.5717db261bf96.png'
                alt=''
              />
            </>
          ) : (
            <p className='modal__noImage'>
              Take some pictures and share with us...{" "}
            </p>
          )}
        </div>
        <div className='modal__actions'>
          <input
            className='modal__button modal__button-submit'
            type='submit'
            value='Report'
          />
          <input
            className='modal__button modal__button-cancel'
            type='button'
            value='Cancel'
            onClick={closeModal}
          />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showModal: (status) => dispatch(showModal(status)),
});

export default connect(null, mapDispatchToProps)(Modal);
