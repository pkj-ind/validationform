import React, { Component } from "react";
import ReactDOM from "react-dom";
import Modal from './Modal'

class CallModal extends Component {
    state = { show: false };

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <main>
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <h1>Modal</h1>
            <p>Data</p>
          </Modal>
          <button type="button" onClick={this.showModal}>
            open
          </button>
        </main>
      );
    }
  
}

export default CallModal;