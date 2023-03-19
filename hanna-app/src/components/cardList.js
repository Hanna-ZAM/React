import React from "react";
import Card from "./card";
import './cardList.css';
class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...this.state, data: JSON.parse(this.props.data) };
    }
    render() {
        return (React.createElement("div", { className: "cardList" }, JSON.parse(this.props.data).map((el, index) => {
            return React.createElement(Card, { key: JSON.parse(this.props.data)[index].id, index: index.toString() });
        })));
    }
}
export default CardList;
