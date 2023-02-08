import { FC } from 'react';
import { CardCategory } from '../card-category/card-category';
import { CardRating } from '../card-rating/card-rating';
import styles from './card-social.module.scss';

interface ICardSocial {
  category: string;
  rating: {
    rate: number;
    count: number;
  }
}

export const CardSocial: FC<ICardSocial> = ({ category, rating }) => {

  return(
    <div className={styles.container}>
      <CardCategory name={category} />
      <CardRating rating={rating}/>
    </div>
  )
}