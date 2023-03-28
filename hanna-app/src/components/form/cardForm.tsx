import React from 'react';
import './form.css';
import productsList from '../../product';

type MyProps = {
  data?: string;
  key?: string;
  index?: string;
};
type MyState = {
  id: string;
  title: string;
  author: string;
  likes: number;
  views: number;
  checked: boolean;
  category: string;
  image: string;
};

class CardForm extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state =  { ...JSON.parse(props.data), index:props.index };
  }
  render() {
    const classGender=(this.state.gender==='male')?'card-male':'card-female'
    return (
      <div className={classGender}>
        <h3 className="card-text">{+this.state.index+1})  Title: {this.state.title}</h3>
        <p className="card-text">File: {this.state.file}</p>
        <p className="card-text">Author: {this.state.author}</p>
        <p className="card-text">Category: {this.state.category}</p>
        <p className="card-text">Create at: {this.state.date}</p>
      </div>
    );
  }
}

export default CardForm;
