import React from 'react';
import styles from './Present.module.css';

export const Present = () => {
  return (
    <div className={styles.present}>
      <p>
        Вместе с <span>бесплатной консультацией</span> мы дарим:
      </p>
      <div className={styles.asideDesk}>
        <div>
          <p className={styles.title}>Виджеты</p>
          <span className={styles.text}>30 готовых решений</span>
        </div>
        <div>
          <p className={styles.title}>Dashboard</p>
          <span className={styles.text}>с показателями вашего бизнеса</span>
        </div>
        <div>
          <p className={styles.title}>Skype Аудит</p>
          <span className={styles.text}>отдела продаж и CRM системы</span>
        </div>
        <div>
          <p className={styles.title}>35 дней</p>
          <span className={styles.text}>использования CRM</span>
        </div>
      </div>

      <div className={styles.asideMob}>
        <div className={styles.item}>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='1'
              viewBox='0 0 10 1'
              fill='none'
            >
              <line
                y1='0.5'
                x2='10'
                y2='0.5'
                stroke='url(#paint0_linear_0_99)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_0_99'
                  x1='-5.02155e-08'
                  y1='1.52942'
                  x2='10'
                  y2='1.52942'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop
                    offset='0.369906'
                    stopColor='#FCB045'
                  />
                  <stop
                    offset='1'
                    stopColor='#FD1D1D'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <p>Skype аудит</p>
        </div>
        <div className={styles.item}>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='1'
              viewBox='0 0 10 1'
              fill='none'
            >
              <line
                y1='0.5'
                x2='10'
                y2='0.5'
                stroke='url(#paint0_linear_0_99)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_0_99'
                  x1='-5.02155e-08'
                  y1='1.52942'
                  x2='10'
                  y2='1.52942'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop
                    offset='0.369906'
                    stopColor='#FCB045'
                  />
                  <stop
                    offset='1'
                    stopColor='#FD1D1D'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <p>30 виджетов</p>
        </div>
        <div className={styles.item}>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='1'
              viewBox='0 0 10 1'
              fill='none'
            >
              <line
                y1='0.5'
                x2='10'
                y2='0.5'
                stroke='url(#paint0_linear_0_99)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_0_99'
                  x1='-5.02155e-08'
                  y1='1.52942'
                  x2='10'
                  y2='1.52942'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop
                    offset='0.369906'
                    stopColor='#FCB045'
                  />
                  <stop
                    offset='1'
                    stopColor='#FD1D1D'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <p>Dashboard</p>
        </div>
        <div className={styles.item}>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='10'
              height='1'
              viewBox='0 0 10 1'
              fill='none'
            >
              <line
                y1='0.5'
                x2='10'
                y2='0.5'
                stroke='url(#paint0_linear_0_99)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_0_99'
                  x1='-5.02155e-08'
                  y1='1.52942'
                  x2='10'
                  y2='1.52942'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop
                    offset='0.369906'
                    stopColor='#FCB045'
                  />
                  <stop
                    offset='1'
                    stopColor='#FD1D1D'
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>{' '}
          <p>Месяц аmoCRM</p>
        </div>
      </div>

      <button className={styles.btn}>Получить консультацию</button>
    </div>
  );
};
