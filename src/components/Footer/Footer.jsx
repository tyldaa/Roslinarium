import React from "react";
import styles from "../Footer/Footer.module.css";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo size={50} />
      <span className={styles.copyright}> &copy; 2024 Roślinarium by tyldaa</span>
    </div>
  );
};
