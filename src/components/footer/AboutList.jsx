import React from 'react';
import styles from './Footer.module.css';

const aboutList = ['Партнёрская программа', 'Вакансии'];

export const AboutList = () => {
  return (
    <ul className={styles.aboutList}>
      {aboutList.map((val, idx) => (
        <a
          key={idx}
          href='#'
        >
          {val}
        </a>
      ))}
    </ul>
  );
};
