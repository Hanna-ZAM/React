import React from "react";
import Card from "./card";

import './cardList.css'
import productsList, { ProductType } from "../product";
type MyProps = {
  // using `interface` is also ok
  data?: string,
  key?:string,
  index?:string
};
type MyState = {
  searchValue:string,
  data?:Array<ProductType>
};


class CardList extends React.Component<MyProps, MyState>{
  constructor(props:MyProps) {
    super(props);
    this.state = { ...this.state, data: JSON.parse(this.props.data as string)};
  }
  render(){
    console.log(this.state.data)
    return (
      <div
      className="cardList">
     {JSON.parse(this.props.data as string).map((el:ProductType, index:number)=>{
    return <Card key={JSON.parse(this.props.data as string)[index].id as string} index={index.toString()}/>})}
      </div>
    );
  }
}



export default CardList