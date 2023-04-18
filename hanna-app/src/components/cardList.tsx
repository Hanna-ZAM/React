import React from 'react';
import Card from './card';
import { useAppSelector } from '../hooks/redux';
import './cardList.css';

import { ProductType } from '../product';
import { cardAPI } from '../store/services/serviseCards';

const CardList: FC<ChildProps> = (): ReactElement => {
  const { search } = useAppSelector((state) => state.searchReducer);
  const m = search ? `flickr.photos.search&text=${search}` : undefined;
  const { data, isLoading, error } = cardAPI.useFetchAllcardsQuery(m);

  return (
    <div className="cardList">
      {!isLoading && ![...data.photos.photo].length && !error && <p>CardList is Empty</p>}
      {isLoading && <p className="preloader">Loading...</p>}
      {error && <p>{error.error}</p>}
      {!isLoading &&
        [...data.photos.photo].map((el: ProductType, index: number) => {
          if (el.ispublic) {
            const cards = data.photos.photo;
            return (
              <Card
                data={{
                  secret: cards[index].secret,
                  id: cards[index].id,
                  server: cards[index].server,
                  farm: cards[index].farm,
                }}
                key={cards[index].id as string}
                index={index.toString()}
              />
            );
          }
        })}
    </div>
  );
};

export default CardList;
