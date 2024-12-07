import React from "react";
import styles from "../Button/Button.module.css";

export const Button = ({ onClick, text, iconUrl }) => {
  return (
    <button className={styles.primary} onClick={onClick}>
      {text} <div className={styles.icon} style={{ backgroundImage: `url(${iconUrl})` }} />
    </button>
  );
};
