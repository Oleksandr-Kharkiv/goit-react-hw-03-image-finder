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
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery.toLowerCase() !==
        this.props.searchQuery.toLowerCase()
    ) {
      this.setState({ status: 'pending' });
       this.newSearch();
    } else if (prevProps.page !== this.props.page) {
      this.addPhoto();
    }
  }

  newSearch = () => {
    fetchPhoto(this.props.searchQuery, 1)
      .then(res => {
        this.setState({
          photos: res.hits,
          totalHits: res.totalHits,
          status: 'resolved',
        });
        if (res.totalHits === 0) {
          toast.warn(`Not found`);
        } else {
          toast.success(`We found ${res.totalHits} images.`);
        }
      })
      .catch(err => this.setState({ err, status: 'rejected' }));
  };

  addPhoto = () => {
    fetchPhoto(this.props.searchQuery, this.props.page)
      .then(res => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...res.hits],
          status: 'resolved',
        }));
      })
      .catch(err => this.setState({ err, status: 'rejected' }));
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
            <Button onClick={this.props.handleLoadMore} />
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
  handleLoadMore: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
