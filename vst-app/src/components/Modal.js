import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
    this.colorPick = this.colorPick.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  colorPick(color) {
    this.setState({
      modal: !this.state.modal
    });
    this.props.tshirtColor(color);
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>T-shirt Color</ModalHeader>
          <ModalBody>
            Pick a t-shirt color.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={(e) => this.colorPick('white')}>White</Button>{' '}
            <Button color="primary" onClick={(e) => this.colorPick('black')}>Black</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;