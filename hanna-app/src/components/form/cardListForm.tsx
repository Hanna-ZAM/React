import React from 'react';
import CardForm from './cardForm';

import './form.css';
import { CardType } from '../function';

type MyProps = {
  data?: string;
};
type MyState = {
  formItems?: Array<CardType>;
};

export class CardListForm extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { formItems: JSON.parse(this.props.data as string) };
  }
  render() {
    if (!JSON.parse(this.props.data as string).length)
      return <div className="cardListForm">CardList is empty</div>;
    return (
      <div className="cardListForm">
        {JSON.parse(this.props.data as string).map((el: CardType, index: number) => {
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
  }
}
