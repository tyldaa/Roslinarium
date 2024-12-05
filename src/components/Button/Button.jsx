import React from "react";
import styles from "../Button/Button.module.css";

export const Button = ({ onClick }) => {
  return (
    <button className={styles.primary} onClick={onClick}>
      Join <img src="/assets/arrow_right.png" />
    </button>
  );
};
