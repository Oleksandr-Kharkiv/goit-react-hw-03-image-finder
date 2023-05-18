import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    showModal: false,
    page: 1,
    largeImageURL: '',
  };

  handleFormSubmit = inputValue => {
    this.setState({ searchQuery: inputValue, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}));
  };
  
  toggleModal = () => {
    this.setState(state => ({showModal: !state.showModal,
    }));
  };

  getModalImg = url => {
    this.setState({ largeImageURL: url });
    this.toggleModal();
  };

  render() {
    const { searchQuery, showModal, largeImageURL, page } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={searchQuery} onClick={this.getModalImg} handleLoadMore={this.handleLoadMore} page={page}/>
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.toggleModal} searchQuery={searchQuery}/>
        )}
        <ToastContainer />
      </>
    );
  }
}
