import PropTypes from "prop-types";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) {
    return null; // Если image нет, не рендерим модалку
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className={styles.modalContent}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.shape({
    urls: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }),
    alt_description: PropTypes.string,
  }),
};

export default ImageModal;
