import { ImageGalleryItemComponent, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({id, webformatURL, tags}) => {
  console.log({id, webformatURL, tags});
  return (
    <ImageGalleryItemComponent key={id}>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
    </ImageGalleryItemComponent>
  );
};
