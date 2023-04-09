import React, {useState, useEffect} from 'react';
import Card from './card';

import './cardList.css';
import { ProductType } from '../product';
import axios from 'axios';
type MyProps = {
  data?: string;
  key?: string;
  index?: string;
};
/*type MyState = {
  data?: Array<ProductType>;
};*/

const CardList: FC<ChildProps> = (props: MyProps): ReactElement => {
  
  
  const bases= 'https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=fd018fb8b522dc83b621f765fd3951a3&gallery_id=66911286-72157649154168622&format=json&nojsoncallback=1'
  
  const [cards, setCards] = useState('');
  async function getCardArr(){
    const resp= await axios.get(bases)
    setCards(resp.data.photos.photo)
    console.log(cards) 
  }
  useEffect( () => {
    getCardArr()
   }, []);
  
  return (
    <div className="cardList">
  {([...cards]).map((el: ProductType, index: number) => {
  return (
    <Card data={{secret: cards[index].secret, id:cards[index].id, server:cards[index].server, farm:cards[index].farm }}
      key={cards[index].id as string}
      index={index.toString()}
    />
  );
})}
    </div>
  );
};

export default CardList;
