import React, { useState, useEffect } from 'react';
import Card from './card';

import './cardList.css';
import { ProductType } from '../product';
import axios from 'axios';

const CardList: FC<ChildProps> = ({ data }): ReactElement => {
  const [cards, setCards] = useState('');
  async function getCardArr() {
    const metod = data.searchMetod
      ? 'flickr.photos.search&text=' + data.text
      : 'flickr.photos.getRecent';
    const bases =
      'https://www.flickr.com/services/rest/?api_key=fd018fb8b522dc83b621f765fd3951a3&method=' +
      metod +
      '&privacy_filter=1&&format=json&nojsoncallback=1';
    const resp = await axios.get(bases);
    setCards(resp.data.photos.photo);
    console.log(resp);
  }
  useEffect(() => {
    getCardArr();
  }, [data.text]);

  return (
    <div className="cardList">
      {[...cards].map((el: ProductType, index: number) => {
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
