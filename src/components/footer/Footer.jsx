import styles from './Footer.module.css';
import { Contacts } from '../common/contacts/Contacts';
import { AboutList } from './AboutList';
import { MenuList } from './MenuList';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <h5 className={styles.title}>О компании</h5>
        <AboutList />
      </div>
      <div>
        <h5 className={styles.title}>Меню</h5>
        <MenuList />
      </div>
      <div className={styles.contacts}>
        <h5 className={styles.title}>Контакты</h5>
        <Contacts style={'flex'} />
        <p>Москва, Путевой проезд 3с1, к 902</p>
      </div>
      <div className={styles.info}>
        <p>©WELBEX 2022. Все права защищены.</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
};
