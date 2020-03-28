import React from 'react'

const Modal = ({ handleClose, show }) => {
  



  function onKeyPressed(e) {
    console.log(e.key);
    if (e.keyCode === 27) {
      console.log("Escaped pressed");
      handleClose()
    }
  }

 // show && document.getElementById('modal_holder').setAttribute('tabindex', '0');
  return (
    <div className={show ? "modal display-block" : "modal display-none"} 
    role="dialog" id="modal_window"
    aria-labelledby="modal_title">
      <section className="modal-main" 
        onKeyDown={(e) => onKeyPressed(e)}>
        <button
          className="btn-close"
          aria-label="close"
          onClick={() => handleClose()}
          >
          X
          </button>
          <h1 id="modal_title" className="title" >Modal</h1>
          <div id="full_description" className="description" aria-describedby="full_description">
            <p>Description goes here.</p>
          </div>
        <button onClick={handleClose} className="mdl_btn btn"  >close</button>

      </section>
    </div>
  );
};

export default Modal;