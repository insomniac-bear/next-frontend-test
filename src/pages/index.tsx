import { CardList } from '@/components/card-list/card-list';
import { Card } from '@/components/card/card';
import { useAppDispatch, useAppSelector } from '@/services/hooks';
import { fetchGoods } from '@/services/slices/goods';
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.goods.status);
  const goods = useAppSelector(state => state.goods.goods);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGoods());
    }
  }, [status, dispatch]);
  return (
    <>
      <Head>
        <title>Test task</title>
        <meta name="description" content="Тестовое задание для Некст" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {
          status === 'succeeded' &&
          <CardList cards={goods}/>
        }
      </main>
    </>
  )
}
