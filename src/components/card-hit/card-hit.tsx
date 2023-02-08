import { FC } from 'react';
import styles from './card-hit.module.scss';

export const CardHit: FC = () => {
  return(
    <span className={styles.hit}>Хит</span>
  );
}