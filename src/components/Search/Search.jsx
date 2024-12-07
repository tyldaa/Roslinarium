import React from "react";
import styles from "./Search.module.css";

export const Search = ({ onChange }) => {
  return (
    <>
      <div className={styles.search_container}>
        <div className={styles.search_icon} />
        <input onChange={onChange} className={styles.input} type="text" id="serach" name="serach" placeholder="Find a plant" />
      </div>
    </>
  );
};
