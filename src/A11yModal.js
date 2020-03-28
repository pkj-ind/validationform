import React, { useRef, useEffect } from 'react'


const A11yModal = ({ handleClose }) => {
  const focusClose = useRef(null)
  var selEle = document.getElementsByClassName("modal-main")
 
  // var closeBtn = document.getElementsByClassName("close_btn")
  // var closeIcon=document.getElementById('btnclose')
  

  useEffect(() => {
    focusClose.current.focus();
    console.log("Inside useEffect",focusClose)
    
    }, [])

  function onKeyPressed(e) {

    console.log(e.key);
    // var focusableEls = document.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')
    // console.log("firstFocusable",focusableEls[0])
    // console.log("lastFocusableEl", focusableEls[focusableEls.length - 2]);
    // console.log("Number of focusable elements",focusableEls.length)
    // console.log("event target",e.target)
    var closeIcon=document.getElementById('btnclose')
    var closeBtn=document.getElementById('closebtn')
  
    if (e.keyCode === 27) {
      console.log("Escaped pressed");
      handleClose()
    }
    else if(e.target === closeIcon ) {
      if (e.shiftKey && e.keyCode === 9){
        e.preventDefault()
        console.log("Shift and Tab pressed")
        closeBtn.focus();
      }

    }
    else if(e.target === closeBtn) {
      if (e.keyCode === 9){
        e.preventDefault()
        closeIcon.focus();
        console.log("Tab pressed")
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
        <h1 id="modal_title" className="title" >Modal</h1>
        <div id="full_description" className="description" aria-describedby="full_description">
          <p>Description goes here.</p>
        </div>
        
        <button className="close_btn" id="closebtn" onClick={(e) => handleClose(e)}> Close </button>
      
      </section>

    </div>
  )
}

export default A11yModal
