import React from "react";
import styles from "../NextPage/NextPage.module.css";

export const NextPage = ({ pageChart, onClick }) => {
  return (
    <div onClick={onClick} className={styles.page}>
      {pageChart}
    </div>
  );
};
