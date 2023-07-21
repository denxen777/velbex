import React from 'react';
import styles from './SideObjectsDesk.module.css';
import purpleBall from '../../assets/img/purpleBall.png';
import redBall from '../../assets/img/redBall.png';
import redBallSmall from '../../assets/img/redBallSmall.png';
import purpleLight from '../../assets/img/purpleLight.png';
import redLight from '../../assets/img/redLight.png';

export const SideObjectsDesk = () => {
  return (
    <div className={styles.sideObjectsDesk}>
      <div className={styles.purpleBall}>
        <img
          src={purpleBall}
          alt='purpleBall'
        />
      </div>
      <div className={styles.redBall}>
        <img
          src={redBall}
          alt='redBall'
        />
      </div>
      <div className={styles.redBallSmall}>
        <img
          src={redBallSmall}
          alt='redBallSmall'
        />
      </div>
      <div className={styles.purpleLight}>
        <img
          src={purpleLight}
          alt='purpleLight'
        />
      </div>
      <div className={styles.redLight}>
        <img
          src={redLight}
          alt='redLight'
        />
      </div>
    </div>
  );
};
