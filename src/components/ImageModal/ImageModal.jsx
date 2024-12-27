import Modal from "react-modal";
import PropTypes from "prop-types";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  const { alt_description, urls, user, likes } = image;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      closeTimeoutMS={200}
    >
      <div className={styles.modalContent}>
        <img
          src={urls.full}
          alt={alt_description}
          className={styles.modalImage}
        />
        <div className={styles.imageInfo}>
          <p>
            <strong>Author:</strong> {user.name}
          </p>
          <p>
            <strong>Likes:</strong> {likes}
          </p>
          <p>
            <strong>Location:</strong> {user.location || "Unknown"}
          </p>
          <p>
            <strong>Profile Link:</strong>{" "}
            <a href={user.links.html} target="_blank" rel="noopener noreferrer">
              Visit Authors Profile
            </a>
          </p>
        </div>
      </div>
    </Modal>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.object,
};

export default ImageModal;
