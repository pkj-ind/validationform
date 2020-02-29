import React,{useRef} from 'react'

const Modal = ({ handleClose, show, children }) => {
  //  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const cardModal=useRef(null)
  show && cardModal.current.focus()

  function onKeyPressed(e) {
    console.log(e.key);
   if(e.keyCode===27){
     console.log("Escaped pressed");
     handleClose()
   }
  }
    return (
      <div className={show ? "modal display-block" : "modal display-none"}>
        <section className="modal-main" role="main" tabIndex="0" 
        ref={cardModal} onKeyDown={(e) => onKeyPressed(e)}>
          <button type="button" 
          class="btn-close" 
          id="modal_close" 
          aria-label="close" 
          onClick={handleClose}>
            X
          </button>
          {children}
          <button onClick={handleClose} className="mdl_btn btn">close</button>

        </section>
      </div>
    );
  };

  export default Modal;