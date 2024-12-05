import React from "react";
import styles from "../FavoritePlant/FavoritePlant.module.css";

export const FavoritePlant = ({ onClick, isFavorite }) => {
  return !isFavorite ? <button className={styles.disliked} onClick={onClick}></button> : <button className={styles.liked} onClick={onClick}></button>;
};
