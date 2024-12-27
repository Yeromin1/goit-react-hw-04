import { onClickPropTypes } from "../PropTypes/propTypes.js";
import styles from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Load more
    </button>
  );
};

LoadMoreBtn.propTypes = {
  onClick: onClickPropTypes,
};

export default LoadMoreBtn;
