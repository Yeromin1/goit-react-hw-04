import PropTypes from "prop-types";
import { imagePropTypes } from "../PropTypes/propTypes.js";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image, onImageClick }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
};

ImageCard.propTypes = {
  image: imagePropTypes,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageCard;
