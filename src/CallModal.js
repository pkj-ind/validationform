import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Modal from './Modal'

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
    console.log("inside hidemodal", this.state.lastFocus)
    this.setState({ show: false });
    this.state.lastFocus.focus();
  };

  render() {


  
    return (
      <main>
        <h1 className="prisha">React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal} />
        <button type="button" onClick={this.showModal}>
          open
          </button>
      </main>
    );
  }

}

export default CallModal;