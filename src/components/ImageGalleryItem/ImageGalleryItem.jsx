import { ImageGalleryItemComponent, ImageGalleryItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({id, webformatURL, largeImageURL, tags, onClick}) => {
  return (
    <ImageGalleryItemComponent key={id}>
      <ImageGalleryItemImage src={webformatURL} alt={tags} onClick={() => onClick(largeImageURL)}/>
    </ImageGalleryItemComponent>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};