import React, { Component } from 'react';
import { ImageGalleryComponent } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

export class ImageGallery extends Component {
  state = {
    photos: null,
    loading: false,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery.toLowerCase() !==
      this.props.searchQuery.toLowerCase()
    ) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?key=34921015-82cb8e104c87b6309f3f6f395&q=${this.props.searchQuery}&image_type=photo&per_page=12&page=${this.page}`
      )
        .then(res => res.json())
        .then(photos => {
          this.setState({ photos: photos.hits });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { photos } = this.state;
    return (
      <ImageGalleryComponent>
        {this.state.loading && <Loader/>}
        {photos &&
          photos.map(photo => (
            <ImageGalleryItem
              key={photo.id}
              id={photo.id}
              webformatURL={photo.webformatURL}
              tags={photo.tags}
            />
          ))}
      </ImageGalleryComponent>
    );
  }
}
