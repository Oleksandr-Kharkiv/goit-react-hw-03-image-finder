import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Overlay, ModalWindow, ModalImage} from './Modal.styled';


export class Modal extends Component { 

  componentDidMount() {
      window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = e => {
      if (e.code === 'Escape') {
          this.props.onClose();
      }
  }

  handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
          this.props.onClose();
      }
  }

  render() {
    const {largeImageURL, searchQuery} = this.props;
      return (
          <Overlay onClick={this.handleBackdropClick}>
              <ModalWindow>
                  <ModalImage src={largeImageURL} alt={searchQuery} />
              </ModalWindow>
          </Overlay>      
      )
  }
};


Modal.proptTypes = {
    largeImageURL: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
};