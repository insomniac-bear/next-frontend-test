import { FC } from 'react';
import styles from './card-category.module.scss';

interface ICardCategory {
  name: string;
}

export const CardCategory: FC<ICardCategory> = ({ name }) => {
  return(
    <p className={styles.name}>{name}</p>
  );
}
