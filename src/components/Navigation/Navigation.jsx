import React, { useState } from "react";
import styles from "./Navigation.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";

export const Navigation = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className={styles.mobile}>
        <Hamburger color="#C7D2AB" toggled={isOpen} toggle={setOpen} />

        <nav className={`${styles.mobile} ${styles.mobile_menu} ${isOpen && styles.mobile_menu_visible}`}>
          <ul className={styles.links}>
            <li>
              <Link className={pathname === "/search" ? styles.active : undefined} to="/search">
                EXPLORE
              </Link>
            </li>
            <li>
              <Link className={pathname === "/collection" ? styles.active : undefined} to="/collection">
                MY COLLECTION
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className={styles.desktop}>
        <ul className={styles.links}>
          <li>
            <Link className={pathname === "/search" ? styles.active : undefined} to="/search">
              EXPLORE
            </Link>
          </li>
          <li>
            <Link className={pathname === "/collection" ? styles.active : undefined} to="/collection">
              MY COLLECTION
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
