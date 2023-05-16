import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
// import { PhotoApiService } from '../components/utils/PhotoApiService';

export class App extends Component {
  state = {
    searchQuery: '',
  };

  handleFormSubmit = inputValue => {
    this.setState({ searchQuery: inputValue });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery}/>
        <Button />
        <Modal />
        <ToastContainer />
      </>
    );
  }
}

