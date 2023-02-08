import { FC } from 'react';
import { getCorrectEnding, getRatingArr } from './util';
import { CardStar } from '../card-star/card-star';
import styles from './card-rating.module.scss';

interface ICardRatingProps {
  rating: {
    rate: number;
    count: number;
  };
}

export const CardRating: FC<ICardRatingProps> = ({ rating }) => {
  const ratingArr = getRatingArr(rating.rate);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {
          ratingArr.map((rate) => <li key={rate.id}>
            <CardStar isFill={rate.isRate} />
          </li>)
        }
      </ul>
      <span className={styles.review}>{rating.count} {getCorrectEnding(rating.count)}</span>
    </div>
  );
};
