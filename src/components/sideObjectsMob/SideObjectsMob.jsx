import React from 'react';
import styles from './SideObjectsMob.module.css';
import purpleLightMob from '../../assets/img/purpleLightMob.png';
import redLightMob from '../../assets/img/redLightMob.png';
import purpleBallMob from '../../assets/img/purpleBallMob.png';
import redBallSmall from '../../assets/img/redBallSmall.png';

export const SideObjectsMob = () => {
  return (
    <div className={styles.sideObjectsMob}>
      <div style={{ position: 'relative' }}>
        <div className={styles.purpleLightMob}>
          <img
            src={purpleLightMob}
            alt='purpleLightMob'
          />
        </div>
        <div className={styles.redLightMob}>
          <img
            src={redLightMob}
            alt='redLightMob'
          />
        </div>
        <div className={styles.purpleBallMob}>
          <img
            src={purpleBallMob}
            alt='purpleBallMob'
          />
        </div>
        <div className={styles.redBallSmall}>
          <img
            src={redBallSmall}
            alt='redBallSmall'
          />
        </div>
      </div>
    </div>
  );
};
