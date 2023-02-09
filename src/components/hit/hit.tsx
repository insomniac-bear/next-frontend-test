import { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './hit.module.scss';

interface IHitProps {
  extraClass: string;
  children: ReactNode;
}

export const Hit: FC<IHitProps> = ({ extraClass = '', children }) => {
  const hitStyles = cn(styles.hit, {
    [extraClass]: extraClass,
  });
  return(
    <span className={hitStyles}>{children}</span>
  );
}