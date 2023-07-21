import React from 'react';
import styles from './Footer.module.css';

const menuList = [
  'Расчёт стоимости',
  'Кейсы',
  'Услуги',
  'Благодарственные письма',
  'Виджеты',
  'Сертификаты',
  'Интеграции',
  'Блог на Youtube',
  'Наши клиенты',
  'Вопрос / Ответ',
];

export const MenuList = () => {
  return (
    <ul className={styles.menuList}>
      {menuList.map((val, idx) => (
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
