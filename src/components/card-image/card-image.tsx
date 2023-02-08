import { FC } from 'react';
import Image from 'next/image';
import styles from './card-image.module.scss';

interface ICardImageProps {
  image: string;
  title: string;
}

export const CardImage: FC<ICardImageProps> = ({ image, title }) => {
  return(
    <div className={styles.img_container}>
    <Image className={styles.img} src={image} alt={title} fill={true}/>
  </div>
);
}
