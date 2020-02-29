import React,{useRef} from 'react'

const Modal = ({ handleClose, show, children }) => {
  //  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const cardModal=useRef(null)
  show && cardModal.current.focus()
    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main" role="main" tabIndex="0" ref={cardModal}>
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  };

  export default Modal;