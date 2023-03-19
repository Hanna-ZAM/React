import React from "react";
import Card from "../components/card";
import CardList from "../components/cardList";
import SearchBar from "../components/search";
import App from "App";
import productsList from "../product";

export  class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <h2>Main</h2>
        <SearchBar/>
        <CardList data={JSON.stringify(productsList.products)} />
      </>
    )
  }
}