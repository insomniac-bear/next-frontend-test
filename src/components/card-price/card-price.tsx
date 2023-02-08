import { FC } from 'react';
import styles from './card-price.module.scss';

const CHANGE_RATE = 70;

interface ICardPrice {
  value: number;
}

export const CardPrice: FC<ICardPrice> = ({ value }) => {
  return(
    <p className={styles.value}>{value * CHANGE_RATE} ₽<span className={styles.note}>/шт.</span></p>

  );
};
