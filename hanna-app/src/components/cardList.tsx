import React, {useState} from 'react';
import Card from './card';

import './cardList.css';
import { ProductType } from '../product';
type MyProps = {
  data?: string;
  key?: string;
  index?: string;
};
type MyState = {
  data?: Array<ProductType>;
};

const CardList :FC<ChildProps>=(props: MyProps):ReactElement =>  {
    return (
      <div className="cardList">
        {JSON.parse(props.data as string).map((el: ProductType, index: number) => {
          return (
            <Card
              key={JSON.parse(props.data as string)[index].id as string}
              index={index.toString()}
            />
          );
        })}
      </div>
    );
  }


export default CardList;
