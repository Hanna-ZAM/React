import React, { useEffect } from 'react';
import Card from './card';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import './cardList.css';
import { fetchCards, searchCards } from '../store/reducers/ActionCreator';
import { ProductType } from '../product';

const CardList: FC<ChildProps> = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { cards, isLoading, error } = useAppSelector((state) => state.cardsReducer);
  const { search } = useAppSelector((state) => state.searchReducer);

  useEffect(() => {
    if (!search) {
      dispatch(fetchCards());
    } else {
      dispatch(searchCards());
    }
  }, [dispatch, search]);

  return (
    <div className="cardList">
      {![...cards].length && !isLoading && <p>CardList is Empty</p>}
      {isLoading && <p className="preloader">Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading &&
        [...cards].map((el: ProductType, index: number) => {
          if (el.ispublic) {
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
