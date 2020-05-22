import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import Modal from './Modal'
import A11yModal from "./A11yModal"

class CallModal extends Component {

  state = {
    show: false,
    lastFocus: ""
 
  };

  showModal = () => {
    this.setState({ show: true });
    this.setState({ lastFocus: document.activeElement });
   // this.setState({ modal: document.getElementById('modal-id') });
    console.log(this.state)

  };

  hideModal = () => {
    console.log("inside hidemodal function", this.state.lastFocus)
    this.setState({ show: false });
    this.state.lastFocus.focus();
  };

  onKeyPressed =(e) => {
    e.preventDefault();
    console.log(e)
    console.log("pressed key",e.keyCode)
    if (e.keyCode === 116) {
      console.log("you will loose the data...")
      window.location.href="/valform"
    }
    if (e.ctrlKey && e.keyCode === 82){
    //  e.preventDefault()
    window.location.href="/valform"
     
    }
  } 


  onUnload = e => { // the method that will be used for both add and remove event
    e.preventDefault();
    e.returnValue = 'Pramod bye bye';
    console.log("Page got refreshed")
 }

 componentDidMount() {
    window.addEventListener("beforeunload", this.onUnload);
 }

 componentWillUnmount() {
     window.removeEventListener("beforeunload", this.onUnload);
 }

  render() {


  
    return (
      <main  onKeyDown={(e) => this.onKeyPressed(e)}>
        <h1 className="prisha">React Modal</h1>
    { this.state.show && <A11yModal handleClose={this.hideModal} /> }
        <button type="button" onClick={this.showModal}>
          open
          </button>
         
      </main>
    );
  }

}

export default CallModal;