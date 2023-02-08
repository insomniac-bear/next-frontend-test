import { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './button.module.scss';
import Link from 'next/link';

interface IButtonProps {
  as: 'link' | 'button';
  children: ReactNode;
  type: 'primary' | 'secondary';
  link?: string;
  buttonType?: 'submit' | 'button' | 'reset' | undefined;
  onClick?: () => void;
  extraClass?: string;
}

export const Button: FC<IButtonProps> = ({ as, children, type, link = '', buttonType = 'button', onClick, extraClass='' }) => {
  const buttonStyle = cn(styles.button, {
    [styles.button_secondary]: type === 'secondary',
    [extraClass]: extraClass,
  });

  if (as === 'button') {
    return(
      <button
        className={buttonStyle}
        type={buttonType}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return(
      <Link href={link} className={buttonStyle}>{children}</Link>
    )
  }
}
