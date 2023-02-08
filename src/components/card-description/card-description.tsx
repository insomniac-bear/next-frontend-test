import { FC } from 'react';
import { CardCategory } from '../card-category/card-category';
import { CardTitle } from '../card-title/card-title';
import { CardPrice } from '../card-price/card-price';

interface ICardDescription {
  title: string;
  price: number;
}

export const CardDescription: FC<ICardDescription> = ({
  title,
  price,
}) => {
  return(
    <>
      <CardTitle name={title}/>
      <CardPrice value={price}/>
    </>
  );
};