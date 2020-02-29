import React, { Component } from "react";
//import ReactDOM from "react-dom";
import Modal from './Modal'

class CallModal extends Component {

    state = { show: false,
    lastFocus: "" ,
  modal:""};
    
    showModal = () => {
      this.setState({ show: true });
      this.setState({lastFocus : document.activeElement});
      console.log(this.state.lastFocus)
    };
  
    hideModal = () => {
      console.log("inside hidemodal",this.state.lastFocus)
      this.setState({ show: false });
      this.state.lastFocus.focus();
    };
  
    render() {

      //var modal = document.getElementById('modal-id');


      return (
        <main>
          <h1 className="prisha">React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}
          aria={{
            labelledby: "heading",
            describedby: "full_description"
          }}
          id="modal-id" >
            <h1 id="heading" className="title">Modal</h1>
            <div id="full_description" className="description">
            <p>Description goes here.</p>
            </div>           
          </Modal>
          <button type="button" onClick={this.showModal}>
            open
          </button>
        </main>
      );
    }
  
}

export default CallModal;