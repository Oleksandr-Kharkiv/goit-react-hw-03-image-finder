import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: '',
    photos: null,
    loading: false,
  };

  handleFormSubmit = inputValue => {
    this.setState({ searchQuery: inputValue });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery photos={this.state.photos} />
        {this.state.loading && <h1>загрузка...</h1>}
        {this.state.photos && <p>this.state.photos.id</p>}
        <Button />
        <Modal />
        <ToastContainer />
      </>
    );
  }
}

