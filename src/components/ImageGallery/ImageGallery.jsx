import PropTypes from "prop-types";
import { imagesArrayPropTypes } from "../PropTypes/propTypes.js";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image, index) => (
        <li key={`${image.id}-${index}`}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: imagesArrayPropTypes,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
