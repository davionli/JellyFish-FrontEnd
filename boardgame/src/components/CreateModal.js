import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInputGroup } from 'mdbreact';

class CreateModal extends Component {
state={
  modal1: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
    <div style={{display: "inline-block"}}>
      <a><i class="far fa-plus-square"  onClick={this.toggle(1)}></i></a>
      <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
        <MDBModalHeader toggle={this.toggle(1)}>Create a board game</MDBModalHeader>
        <MDBModalBody>
            <MDBInputGroup
                material
                containerClassName="mb-2 mt-0"
                prepend="Event title"
            />
            <MDBInputGroup
                material
                containerClassName="mb-2 mt-0"
                prepend="Boardgame"
                hint="The Name Of The Boardgame"
            />
            <MDBInputGroup
                material
                containerClassName="mb-2 mt-0"
                prepend="Event Date"
                hint="MM/DD/YYYY"
            />
            <MDBInputGroup
                material
                containerClassName="mb-2 mt-0"
                prepend="Default"
            />
            <MDBInputGroup
                material
                containerClassName="mb-2 mt-0"
                prepend="Default"
            />
            <MDBInputGroup
                material
                containerClassName="mb-2 mt-0"
                prepend="Default"
            />
            <MDBInputGroup
                material
                containerClassName="mb-2 mt-0"
                prepend="Default"
                type="textarea"
            />

        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(1)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </div>
    );
  }
}

export default CreateModal;