import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    largeImageURL: '',
  };

  handleFormSubmit = inputValue => {
    this.setState({ searchQuery: inputValue });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  getModalImg = url => {
    this.setState({ largeImageURL: url });
    this.toggleModal();
  };

  render() {
    const { searchQuery, showModal, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={searchQuery} onClick={this.getModalImg} />
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} searchQuery={searchQuery}/>
        )}
        <ToastContainer />
      </>
    );
  }
}
