import { FC } from 'react';
import Link from 'next/link';
import { FavoriteCard } from '../favorit-card/favorite-card';
import { useAppSelector, useAppDispatch } from '../../services/hooks';
import { addFavorite, removeFavorite } from '@/services/slices/favorites';
import { CardForm } from '../card-form/card-form';
import styles from './card-buttons.module.scss';
import { Button } from '../button/button';

interface ICardButtonProps {
  cardId: number;
}

export const CardButtons: FC<ICardButtonProps> = ({ cardId }) => {
  const dispatch = useAppDispatch();
  const favoritesId = useAppSelector(state => state.favorites.items);
  const isCardFavorite = favoritesId.some((it) => cardId === it);
  const cartIds = useAppSelector(state => state.cart.items);
  const isAddToCart = cartIds.some((it) => cardId === it.id);

  const onButtonClick = () => {
    if (isCardFavorite) {
      dispatch(removeFavorite(cardId));
    } else {
      dispatch(addFavorite(cardId));
    }
  };

  return(
    <footer className={styles.container}>
      {isAddToCart && <Button as='link' type='secondary' link={'/#'}>В корзине</Button>}
      {!isAddToCart && <CardForm cardId={cardId} />}
      <FavoriteCard
        onClick={() => onButtonClick()}
        isFavorite={isCardFavorite}
      />
    </footer>
  )
};
