import { FC } from 'react';
import styles from './card-title.module.scss';

interface ICardTitle {
  name: string;
}

export const CardTitle: FC<ICardTitle> = ({ name }) => {
  return(<h3 className={styles.name}>{name}</h3>);
};
