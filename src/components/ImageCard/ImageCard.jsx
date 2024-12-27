import { imagePropTypes } from "../PropTypes/propTypes.js";
import styles from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
};

ImageCard.propTypes = {
  image: imagePropTypes,
};

export default ImageCard;
