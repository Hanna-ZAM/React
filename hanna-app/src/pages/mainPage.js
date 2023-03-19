import React from "react";
import CardList from "../components/cardList";
import SearchBar from "../components/search";
import productsList from "../product";
export class Main extends React.Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", null, "Main"),
            React.createElement(SearchBar, null),
            React.createElement(CardList, { data: JSON.stringify(productsList.products) })));
    }
}
