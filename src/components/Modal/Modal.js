import "./Modal.css";

function Modal() {
  return (
    <div className='modal__bg'>
      <div className='modal'>
        <h1 className='modal__header'>Modal Header</h1>
        <span className='modal__close'>&#10006;</span>
        <input className='modal__file' type='file' multiple />
        <textarea
          className='modal__textarea'
          name=''
          id=''
          placeholder='Please insert info about this place...'
          cols='20'
          rows='5'
        ></textarea>
        <div className='modal__imagePreview'>
          <img className='modal__imagePreview__1' src='' alt='' />
          <img className='modal__imagePreview__2' src='' alt='' />
          <img className='modal__imagePreview__3' src='' alt='' />
        </div>
        <input className='modal__submit' type='submit' />
        <input className='modal__cancel' type='button' value='Cancel' />
      </div>
    </div>
  );
}

export default Modal;
