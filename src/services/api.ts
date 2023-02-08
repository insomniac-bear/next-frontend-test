import { IItem } from './types/item.types';

export const getGoodsApi = (): Promise<IItem[]> => fetch('https://fakestoreapi.com/products/category/electronics')
  .then(res => res.json());