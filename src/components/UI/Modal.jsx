import { faX } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  imgUrl,
  title,
  isBookmarked,
  handleClose,
  setBookMarked,
  bookMarked,
  handleBookmark,
}) => {
  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };
  const handelModal = () => {
    setBookMarked((prev) => !prev);
  };

  return (
    <div className={styles.modalOver} onClick={handleClick}>
      <div className={styles.modal}>
        <FontAwesomeIcon
          className={styles.close}
          icon={faX}
          size="lg"
          color="white"
          onClick={handleClose}
        />
        <img className={styles.img} src={imgUrl} alt="modalImg" />
        <span className={styles.title}>{title}</span>
        <FontAwesomeIcon
          className={bookMarked ? styles.bookcolor : styles.bookmark}
          size="lg"
          icon={faStar}
          onClick={handelModal}
        />
      </div>
    </div>
  );
};
export default Modal;