import { nanoid } from 'nanoid';

type TRating = {
  isRate: boolean;
  id: string;
}

export const getRatingArr = (rate: number): TRating[] => {
  const rating = [];
  for (let i = 0; i <=5; i++) {
    if (i <= rate) {
      rating.push({
        isRate: true,
        id: nanoid(),
      });
    } else {
      rating.push({
        isRate: false,
        id: nanoid(),
      });
    }
  }
  return rating;
};

export const getCorrectEnding = (count: number): string => {
  const numberAtString = count.toString();
  const lastNumber = Number(numberAtString[numberAtString.length - 1]);
  const label = lastNumber === 1
    ? 'отзыв'
    : lastNumber > 1 && lastNumber < 5
      ? 'отзыва'
      : 'отзывов';

  return label;
}
