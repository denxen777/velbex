import React from 'react';
import styles from './Navbar.module.css';

const itemsDesktop = [
  'Услуги',
  'Виджеты',
  'Интеграции',
  'Кейсы',
  'Сертификаты',
];
const itemsMobile = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы'];

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbarListDesk}>
        {itemsDesktop.map((item, idx) => (
          <a
            key={idx}
            href='#'
          >
            {item}
          </a>
        ))}
      </ul>
      <ul className={styles.navbarListMob}>
        {itemsMobile.map((item, idx) => (
          <a
            key={idx}
            href='#'
          >
            {item}
          </a>
        ))}
      </ul>
    </div>
  );
};
