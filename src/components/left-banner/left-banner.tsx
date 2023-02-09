import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hit } from '../hit/hit';
import styles from './left-banner.module.scss';

export const LeftBanner: FC = () => {
  return(
    <article className={styles.container}>
      <div className={styles.img}>
        <Image src={'/banner-2.jpg'} fill={true} alt='Товары для кабинета' />
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Скидка <Hit extraClass={styles.hit}>10%</Hit> на перефирию для компьютера</p>
        <Link className={styles.link} href='/#'>Выбрать</Link>
      </div>
    </article>
  );
};