import { FC } from 'react';
import { RightBanner } from '../right-banner/right-banner';
import styles from './intro.module.scss';
import { LeftBanner } from '../left-banner/left-banner';

export const Intro: FC = () => {
  return(
    <section className={styles.container}>
      <h1 className={styles.title}>Все для комфортной работы</h1>
      <RightBanner />
      <LeftBanner />
    </section>
  );
};
