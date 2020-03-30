import React, { useRef, useEffect } from 'react'


const A11yModal = ({ handleClose }) => {
  const focusClose = useRef(null)
  
  useEffect(() => {
    focusClose.current.focus();
    }, [])

  function onKeyPressed(e) {

    var closeIcon=document.getElementById('btnclose')
    var closeBtn=document.getElementById('closebtn')
  
    if (e.keyCode === 27) {
      handleClose()
    }
    else if(e.target === closeIcon ) {
      if (e.shiftKey && e.keyCode === 9){
        e.preventDefault()
        closeBtn.focus();
      }
      
    }
    else if(e.target === closeBtn) {
      if(e.shiftKey && e.keyCode === 9){
        e.preventDefault()
        document.getElementById("userID").focus()
      }
      else if (e.keyCode === 9){
        e.preventDefault()
        closeIcon.focus();
      }
      
    } 
  }

  return (
    <div className="modal display-block">
      <section className="modal-main" role="dialog"
        aria-modal="true" onKeyDown={(e) => onKeyPressed(e)}>
        <button className="btn-close" id="btnclose" onClick={(e) => handleClose(e)} ref={focusClose}>
          X
        </button>
        <h1 id="modal_title" className="title" >A11y Modal</h1>
        <label style={{margin: '40px'}}>Sample Input Box:</label>
        <br />
        <input type="text" id="userID" className="modal_txt_box" />
        <div id="full_description" className="description" aria-describedby="full_description">
          <p>It is just an example A11Y modal. It will get close if user press Esc key and by defaluty when it opens focus will be on corner close icon.Focus is trapped in this modal for keyboard users.</p>
        </div>        
        <button className="close_btn" id="closebtn" onClick={(e) => handleClose(e)}> Close </button>     
      </section>
    </div>
  )
}

export default A11yModal
