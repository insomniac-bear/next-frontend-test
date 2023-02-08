import { FC } from 'react';
import { CardDescription } from '../card-description/card-description';
import { IItem } from '@/services/types/item.types';
import { CardHit } from '../card-hit/card-hit';
import { CardImage } from '../card-image/card-image';
import { CardSocial } from '../card-social/card-social';
import { CardButtons } from '../card-buttons/card-buttons';
import styles from './card.module.scss';

export const Card: FC<IItem> = (props) => {
  const {
    id,
    title,
    price,
    category,
    image,
    rating,
  } = props;

  return(
    <article className={styles.container}>
      {rating.count > 300 && <CardHit />}
      <CardImage
        image={image}
        title={title}
      />
      <CardSocial
        category={category}
        rating={rating}
      />
      <CardDescription
        title={title}
        price={price}
      />
      <CardButtons cardId={id} />
    </article>
  );
}