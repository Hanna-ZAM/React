import React from 'react';
import CardForm from './cardForm';

import './form.css';
import { CardType } from '../function'

type MyProps = {
  data?: string;
};
type MyState = {
  formItems?: Array<CardType>;
};

class CardListForm extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { ...this.state, formItems: JSON.parse(this.props.data as string)};
  }
  render() {
    return (
      <div className="cardList">
        {this.state.formItems.map((el: CardType, index: number) => {
          return (
            <CardForm
              data= {JSON.stringify(el) as string}
              key={el.date+index as string}
              index={index.toString()}
            />
          );
        })}
      </div>
    );
  }
  }

export default CardListForm;
