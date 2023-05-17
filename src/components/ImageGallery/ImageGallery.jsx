import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';
import { ImageGalleryComponent } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { fetchPhoto } from '../../API/fetchPhoto';

export class ImageGallery extends Component {
  state = {
    photos: null,
    totalHits: null,
    page: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const oldQuery = prevProps.searchQuery.toLowerCase();
    const newQuery = this.props.searchQuery.toLowerCase();

    if (oldQuery !== newQuery) {
      this.setState({ page: 1, status: 'pending' });

      fetchPhoto(newQuery, this.state.page)
        .then(res => {
          this.setState({
            photos: res.hits,
            totalHits: res.totalHits,
            status: 'resolved',
          });
          if(res.totalHits === 0) {
            toast.warn(`Not found`);
          } else {
            toast.success(`We found ${res.totalHits} images.`)
          } 
        })
        .catch(err => this.setState({ err, status: 'rejected' }));
    }

    if (prevState.page !== this.state.page) {
      fetchPhoto(newQuery, this.state.page)
        .then(res => {
          this.setState(prevState => ({
            photos: [...prevState.photos, ...res.hits],
            status: 'resolved',
          }));
        })
        .catch(err => this.setState({ err, status: 'rejected' }));
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { photos, status, totalHits } = this.state;

    if (status === 'idle') {
      return;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGalleryComponent>
            {photos &&
              photos.map(photo => (
                <ImageGalleryItem
                  key={photo.id}
                  id={photo.id}
                  webformatURL={photo.webformatURL}
                  largeImageURL={photo.largeImageURL}
                  tags={photo.tags}
                  onClick={this.props.onClick}
                />
              ))}
          </ImageGalleryComponent>
          {photos.length < totalHits && (
            <Button onClick={this.handleLoadMore} />
          )}
        </>
      );
    }
    if (status === 'rejected') {
      return toast.error('Something went wrong');
    }
  }
}

ImageGallery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
