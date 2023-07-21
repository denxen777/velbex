import styles from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { SideObjectsDesk } from './components/sideObjectsDesk/SideObjectsDesk';

export const App = () => {
  return (
    <div>
      <SideObjectsDesk />
      <div className={styles.container}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};
