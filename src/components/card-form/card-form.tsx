import { FC, FormEventHandler, useState } from 'react';
import { Button } from '../button/button';
import styles from './card-form.module.scss';
import { useAppDispatch } from '@/services/hooks';
import { addToCart } from '@/services/slices/cart';

interface ICardFormProps {
  cardId: number;
}

export const CardForm: FC<ICardFormProps> = ({ cardId }) => {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(prevState => prevState + 1);
  };

  const decrementCount = () => {
    if (count === 1) {
      return;
    }
    setCount(prevState => prevState - 1);
  }

  const onSubmitForm: FormEventHandler = (evt) => {
    evt.preventDefault();
    dispatch(addToCart({
      id: cardId,
      count,
    }))
  }

  return(
    <form className={styles.form} onSubmit={onSubmitForm}>
      <label className={styles.controls}>
        <button
          type='button'
          className={styles.dec}
          onClick={decrementCount}
          aria-label='уменьшить'
        />
        <span className={styles.count}>{count}</span>
        <button
          type='button'
          className={styles.inc}
          onClick={incrementCount}
          aria-label='увеличить'
        />
      </label>
      <Button extraClass={styles.button} as='button' type='primary' buttonType='submit'>В корзину</Button>
    </form>
  );
};
