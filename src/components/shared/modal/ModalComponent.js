import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ModalBodyComponent from './ModalBodyComponent';

import './ModalComponent.scss';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: {}
    };

    this.closeModal = this.closeModal.bind(this);
    this.renderModalBody = this.renderModalBody.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  renderModalBody() {
    if(this.props.children) {
      return (
        <div className="modal-body-container" style={this.props.modalBodyStyles}>
          {this.props.children}
        </div>
      );
    }

    return (
      <ModalBodyComponent styles={{ position: 'absolute' }} content={this.props.content} closeModal={this.closeModal} />
    );
  }

  render() {
    return (
      <div className="modal" style={this.state.styles}>
        {/*<div className="modal-back" />*/}
        {this.renderModalBody()}
      </div>
    );
  }
}

ModalComponent.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  modalBodyStyles: PropTypes.shape({})
};


ModalComponent.defaultProps = {
  children: null,
  content: '',
  modalBodyStyles: {}
};