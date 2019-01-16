import React, { Component } from 'react';
import PropTypes from 'prop-types';

import closeButton from './assets/close-button.png';

/* eslint-disable jsx-a11y/interactive-supports-focus */

export default class ModalBodyComponent extends Component {
  constructor(props) {
    super(props);

    const stylesConfig = Object.assign({}, ModalBodyComponent.defaultProps.styles, props.styles);

    this.state = {
      styles: stylesConfig
    };

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    return (
      <div className="modal-body" style={this.state.styles}>
        {this.props.showHeader &&
          <div className="header">
            <div className="header-title">{this.props.headerTitle}</div>
            {this.props.showCloseBtn &&
              <div className="close-btn" role="button" onClick={this.closeModal} onKeyPress={this.closeModal}>
                <img alt="Close" src={closeButton} />
              </div>
            }
          </div>
        }
        {this.props.children &&
          <div className="modal-body-content">
            {this.props.children}
          </div>
        }
        {this.props.content &&
          <div className="modal-body-content">
            {this.props.content }
          </div>
        }
      </div>
    );
  }
}

ModalBodyComponent.propTypes = {
  children: PropTypes.node,
  content: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  showCloseBtn: PropTypes.bool,
  showHeader: PropTypes.bool,
  headerTitle: PropTypes.string,
  styles: PropTypes.shape({})
};


ModalBodyComponent.defaultProps = {
  children: null,
  content: '',
  showCloseBtn: true,
  showHeader: true,
  headerTitle: '',
  styles: {
    display: 'block'
  }
};