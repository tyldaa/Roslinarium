import React from "react";
import styles from "../HomePage/HomePage.module.css";
import { Logo } from "../../components/Logo/Logo";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  const goToExplore = () => {
    navigate(`/search`);
  };
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.page}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Home Is{" "}
            <span className={styles.bold}>
              Where My <span className={styles.green_bg}>Plants</span> Are
            </span>
          </h1>
          <p className={styles.description}>
            Welcome! Start building your personal plant collection – catalog your green companions, track their growth, and keep all your care notes in one
            place. Let&rsquo;s grow together!
          </p>
          <Button onClick={() => goToExplore()} />
        </div>
        <div className={styles.banner}></div>
      </div>
    </div>
  );
};
