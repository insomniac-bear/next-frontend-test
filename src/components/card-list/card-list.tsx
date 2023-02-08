import { IItem } from '@/services/types/item.types';
import { FC } from 'react';
import { Card } from '../card/card';
import styles from './card-list.module.scss';

interface ICardsList {
  cards: IItem[];
};

export const CardList: FC<ICardsList> = ({ cards }) => {
  return(
    <ul className={styles.container}>
      { cards.map(card => <li key={card.id}>
        <Card {...card} />
      </li>) }
    </ul>
  );
};
