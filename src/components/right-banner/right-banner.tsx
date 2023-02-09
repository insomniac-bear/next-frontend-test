import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hit } from '../hit/hit';
import styles from './right-banner.module.scss';

export const RightBanner: FC = () => {
  return(
    <article className={styles.container}>
      <div className={styles.img}>
        <Image src={'/banner-1.jpg'} fill={true} alt='Товары для кабинета' />
      </div>
      <div className={styles.content}>
        <Hit extraClass={styles.hit}>-25%</Hit>
        <p className={styles.text}>на товары для кабинета</p>
        <Link className={styles.link} href='/#'>Выбрать</Link>
      </div>
    </article>
  );
};