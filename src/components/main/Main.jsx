import styles from './Main.module.css';
import { Present } from './present/Present';
import { SideObjectsMob } from '../sideObjectsMob/SideObjectsMob';

export const Main = () => {
  return (
    <div className={styles.content}>
      <SideObjectsMob />
      <div className={styles.wrap}>
        <div className={styles.section}>
          <h1>
            Зарабатывайте больше <span>с WELBEX</span>
          </h1>
          <p>Развиваем и контролируем продажи за вас</p>
        </div>
        <Present />
      </div>
    </div>
  );
};
