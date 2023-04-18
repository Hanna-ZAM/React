import React, { useState, useEffect } from 'react';
import CardForm from './cardForm';

import './form.css';
import { CardType } from '../function';

export const CardListForm: FC<ChildProps> = (props: MyProps): ReactElement => {
  const [emptyList, setEmptyList] = useState(true);
  useEffect(() => {
    if (JSON.parse(props.data as string).length) {
      setEmptyList(false);
    } else {
      setEmptyList(true);
    }
  }, [props]);
  return (
    <div className="cardListForm">
      {emptyList && <p>CardList is empty</p>}
      {JSON.parse(props.data as string).map((el: CardType, index: number) => {
        return (
          <CardForm
            data={JSON.stringify(el) as string}
            key={(el.date + index) as string}
            index={index.toString()}
          />
        );
      })}
    </div>
  );
};
