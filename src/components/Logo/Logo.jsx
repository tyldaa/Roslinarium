import React from "react";
import styles from "../Logo/Logo.module.css";

export const Logo = ({ size = 100, ...props }) => {
  return (
    <div className={styles.logo_container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width={size} height={size} {...props}>
        {/* <defs>
          <style>{".cls-1{fill:#37461e;stroke:#37461e;stroke-miterlimit:10}"}</style>
        </defs> */}
        <path
          d="m61 95.15.13 2.58c4.3.25 10.39 1.35 13.48 5.85a11.29 11.29 0 0 1 1.84 5c1.48 11.12-.38 88-.53 94.08A13.33 13.33 0 0 1 60 212.28l-.06 3.21 67.62.13-.07-3.14c-6.27.34-11.93-2.29-14.55-6.95a13 13 0 0 1-1.55-6.95v-56.13c0-13.24 5.17-25.82 15.32-38.84 3.64-4.67 15.8-19.83 37.34-24.8 18.89-4.35 36.74 1 44.36 7.52 1.32 1.13 6.88 5.87 6 7.48-.34.6-1.43.5-2.32.53-6.17.22-10.75 6-11.22 6.6a16.53 16.53 0 0 0-2.14 15.68c3.07 8.15 11.32 10.24 12.47 10.51 7.8 1.87 16.52-1.63 19.8-7.48a22.49 22.49 0 0 0 2.21-11.75s0-.35-.07-.71c-.46-4.17-4-14.47-14.08-23.36a54.49 54.49 0 0 0-21.56-11.4 67 67 0 0 0-37.6.35 69.63 69.63 0 0 0-28.68 17.29 77.25 77.25 0 0 0-19.07 29.22l-.18-24.05Z"
          className={styles.cls}
        />
        <path
          d="M189.57 92.87c-.18-.72-21.09-2.32-32.61 9.89-10.12 10.72-11.53 30.51-4.15 44.37 14 26.33 55.74 23.83 59.74 44.5a22.82 22.82 0 0 1-1.74 13.9c-3.55 6.68-10.3 9.24-12.69 10 16.48.5 31.39-8 37.28-21.11 7.92-17.59-1.16-41.83-23.12-51.59-23-10.21-39.53-18.42-39.95-30.33-.17-4.59 2.69-10.57 6.68-14.3 4.9-4.56 10.65-4.94 10.56-5.33Z"
          className={styles.cls}
        />
        <path d="M166.71 182.55a17.25 17.25 0 1 1 13.37 31.8c-9.44 3.79-20.29-2.15-22.85-11.49-2.11-7.67 1.77-16.31 9.48-20.31Z" className={styles.cls} />
      </svg>
    </div>
  );
};